import prisma from "./index.js";

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
