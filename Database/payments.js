import prisma from "./index.js";
import { startOfMonth, endOfMonth, eachMonthOfInterval, format } from 'date-fns'

// get payments with pagination
export const getAllPayments = async (data) => {
    const page = Number(data.page) || 1;
    const limit = Number(data.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        const payments = await prisma.payment.findMany({
            skip,
            take: limit,
            orderBy: { id: "desc" },
            include: {
                sales: true,
                purchases: true,
            },
        });

        if (!payments || payments.length < 1) {
            return { status: 'failed', message: "No payments found" }
        }
        const totalPayments = await prisma.payment.count();

        return {
            status: "success",
            message: "Payments fetched successfully",
            data: payments,
            total: totalPayments,
            page,
            limit,
            totalPages: Math.ceil(totalPayments / limit),
        };
    } catch (error) {
        console.error(error);
        return { status: "failed", message: "Error fetching payments" }
    }
};

// get payment details
export const paymentDetails = async (data) => {
    try {

        const { id, paymentType } = data

        let payment = {}
        if (paymentType === 'PURCHASE' || paymentType === 'RETURN') {

            payment = await prisma.payment.findUnique({
                where: { id: Number(id) },
                include: {
                    purchases: {
                        include: {
                            purchasedItems: {
                                include: {
                                    medicine: true
                                }
                            }
                        }
                    }
                }
            })
        } else if (paymentType === 'SALE' || paymentType === 'REFUND') {

            payment = await prisma.payment.findUnique({
                where: { id: Number(id) },
                include: {
                    sales: {
                        include: {
                            items: {
                                include: {
                                    items: true
                                }
                            }
                        }
                    }
                }
            })
        }

        if (!payment) return { status: "failed", message: "Payment not found" };

        return { status: "success", message: "Details found", data: payment };
    } catch (error) {
        console.error("Error fetching payment details:", error);
        return { status: "failed", message: "Error fetching payment details" };
    }
};

// get summary stats
export const getSummaryStats = async () => {
    try {
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);

        const endOfMonth = new Date(startOfMonth);
        endOfMonth.setMonth(endOfMonth.getMonth() + 1);

        const startOfLastMonth = new Date(startOfMonth);
        startOfLastMonth.setMonth(startOfLastMonth.getMonth() - 1);

        const endOfLastMonth = new Date(startOfMonth);

        const calcTotals = async (start, end) => {
            const sales = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: "SALE", createdAt: { gte: start, lt: end } },
            });

            const purchases = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: "PURCHASE", createdAt: { gte: start, lt: end } },
            });

            const refunds = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: "REFUND", createdAt: { gte: start, lt: end } },
            });

            const returns = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: "RETURN", createdAt: { gte: start, lt: end } },
            });

            const totalSales = sales._sum.amount || 0;
            const totalPurchase = purchases._sum.amount || 0;
            const totalRefund = refunds._sum.amount || 0;
            const totalReturn = returns._sum.amount || 0;

            const totalRevenue = (totalSales - totalPurchase) - (totalRefund + totalReturn);

            return { totalSales, totalPurchase, totalRevenue };
        };

        const current = await calcTotals(startOfMonth, endOfMonth);
        const previous = await calcTotals(startOfLastMonth, endOfLastMonth);

        const revenueGrowth =
            previous.totalRevenue > 0
                ? ((current.totalRevenue - previous.totalRevenue) / previous.totalRevenue) * 100
                : 0;

        const salesGrowth =
            previous.totalSales > 0
                ? ((current.totalSales - previous.totalSales) / previous.totalSales) * 100
                : 0;

        const purchaseGrowth =
            previous.totalPurchase > 0
                ? ((current.totalPurchase - previous.totalPurchase) / previous.totalPurchase) * 100
                : 0;

        return {
            status: "success",
            message: "Summary stats fetched successfully",
            data: {
                totalRevenue: current.totalRevenue,
                totalSales: current.totalSales,
                totalPurchase: current.totalPurchase,
                revenueGrowth: revenueGrowth.toFixed(2),
                salesGrowth: salesGrowth.toFixed(2),
                purchaseGrowth: purchaseGrowth.toFixed(2),
            },
        };
    } catch (error) {
        console.error("Error fetching summary stats:", error);
        return {
            status: "failed",
            message: "Error fetching summary stats",
        };
    }
};

// revenue chart
export const getRevenueGraphData = async (payload) => {
    try {
        const { filter, startDate, endDate } = payload

        let data = [];

        if (filter === 'monthly') {

            const currentYear = new Date().getFullYear();
            const months = Array.from({ length: 12 }, (_, i) => i);

            for (const month of months) {
                const from = new Date(currentYear, month, 1);
                const to = endOfMonth(from);

                const sales = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: 'SALE', createdAt: { gte: from, lte: to } },
                });

                const purchases = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: 'PURCHASE', createdAt: { gte: from, lte: to } },
                });

                const totalRevenue = (sales._sum.amount || 0) - (purchases._sum.amount || 0);
                data.push({
                    name: format(from, 'MMM'),
                    revenue: totalRevenue,
                });
            }
        }
        else if (filter === 'yearly') {

            const currentYear = new Date().getFullYear();
            const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];

            for (const year of years) {
                const from = new Date(year, 0, 1);
                const to = new Date(year, 11, 31);

                const sales = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: 'SALE', createdAt: { gte: from, lte: to } },
                });

                const purchases = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: 'PURCHASE', createdAt: { gte: from, lte: to } },
                });

                const totalRevenue = (sales._sum.amount || 0) - (purchases._sum.amount || 0);
                data.push({
                    name: year.toString(),
                    revenue: totalRevenue,
                });
            }
        }
        else if (filter === 'custom') {

            if (!startDate || !endDate) {
                return res.status(400).json({ error: 'Start and End dates required for custom filter' });
            }

            const from = new Date(startDate);
            const to = new Date(endDate);

            const sales = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: 'SALE', createdAt: { gte: from, lte: to } },
            });

            const purchases = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: 'PURCHASE', createdAt: { gte: from, lte: to } },
            });

            const totalRevenue = (sales._sum.amount || 0) - (purchases._sum.amount || 0);
            data.push({
                name: `${format(from, 'dd MMM')} - ${format(to, 'dd MMM')}`,
                revenue: totalRevenue,
            });
        }

        return { message: 'Revenue Data', status: 'success', data }

    } catch (error) {
        console.log(error);
        return { message: 'Failed to fetch revenue data', status: 'failed' }

    }
};

// get sales and purchase data 
export const getSalesAndPurchaseData = async (payload) => {
    try {
        const { filter, startDate, endDate } = payload || {};
        let data = [];

        if (filter === "monthly" || !filter) {
     
            const today = new Date();
            const months = Array.from({ length: 4 }, (_, i) => {
                const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
                return { month: date.getMonth(), year: date.getFullYear() };
            }).reverse();

            for (const { month, year } of months) {
                const from = new Date(year, month, 1);
                const to = new Date(year, month + 1, 0);

                const sales = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: "SALE", createdAt: { gte: from, lte: to } },
                });

                const purchase = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: "PURCHASE", createdAt: { gte: from, lte: to } },
                });

                const monthName = from.toLocaleString("default", { month: "short" });

                data.push({
                    name: monthName,
                    Sales: sales._sum.amount || 0,
                    Purchase: purchase._sum.amount || 0,
                });
            }
        }

        else if (filter === "yearly") {
            const currentYear = new Date().getFullYear();
            const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];

            for (const year of years) {
                const from = new Date(year, 0, 1);
                const to = new Date(year, 11, 31);

                const sales = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: "SALE", createdAt: { gte: from, lte: to } },
                });

                const purchase = await prisma.payment.aggregate({
                    _sum: { amount: true },
                    where: { paymentType: "PURCHASE", createdAt: { gte: from, lte: to } },
                });

                data.push({
                    name: year.toString(),
                    Sales: sales._sum.amount || 0,
                    Purchase: purchase._sum.amount || 0,
                });
            }
        }

        else if (filter === "custom") {
            if (!startDate || !endDate)
                return { status: "failed", message: "Start and End dates are required for custom filter" };

            const from = new Date(startDate);
            const to = new Date(endDate);

            const sales = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: "SALE", createdAt: { gte: from, lte: to } },
            });

            const purchase = await prisma.payment.aggregate({
                _sum: { amount: true },
                where: { paymentType: "PURCHASE", createdAt: { gte: from, lte: to } },
            });

            data.push({
                name: `${from.toLocaleDateString("en-IN")} - ${to.toLocaleDateString("en-IN")}`,
                Sales: sales._sum.amount || 0,
                Purchase: purchase._sum.amount || 0,
            });
        }

        return { status: "success", message: "Sales vs Purchase Data", data };

    } catch (error) {
        console.log("Error fetching sales/purchase data:", error);
        return { status: "failed", message: "Error fetching data" };
    }
};


