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
            pagination: {
                total: totalPayments,
                page,
                limit,
                totalPages: Math.ceil(totalPayments / limit),
            },
        };
    } catch (error) {
        console.error(error);
        return { status: "failed", message: "Error fetching payments" }
    }
};
