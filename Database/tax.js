import prisma from './index.js';

// add tax
export const addTax = async (data) => {
    try {
        const { percentage, taxName } = data;

        if (!percentage || !taxName) {
            return { status: "failed", message: "All fields are required" };
        }

        let percentageValue = parseFloat(percentage);

        if (isNaN(percentageValue) || percentageValue < 0 || percentageValue > 100) {
            return { status: "failed", message: "Percentage must be a number between 0 and 100" };
        }

        const existingTax = await prisma.tax.findFirst({
            where: {
                OR: [
                    { percentage: percentage.toString() },
                ],
            },
        });

        if (existingTax) {
            return {
                status: "failed",
                message: `Tax already exists, check tax value or tax name`,
            };
        }

        const tax = await prisma.tax.create({
            data: {
                percentage: percentageValue.toString(),
                taxName
            },
        });

        return {
            status: "success",
            message: "Tax added successfully",
        };
    } catch (error) {
        console.error("Error adding Tax:", error);
        return { status: "error", message: error.message };
    }
};


// get tax with pagination
export const getTaxes = async ({ page = 1, limit = 5, search = 0 }) => {

    try {
        const skip = (page - 1) * limit;
        const where = search
            ? {
                OR: [
                    { taxName: { contains: search, } },
                    { percentage: { contains: search } },
                ],
            }
            : {};

        const taxes = await prisma.tax.findMany({
            where,
            skip,
            take: limit,
            orderBy: { id: "desc" },
        });

        const totalCount = await prisma.tax.count({ where });
        const totalPages = Math.ceil(totalCount / limit);

        if (!taxes || taxes.length < 1) {
            return { status: "failed", message: "No tax found" };
        }

        return {
            status: "success",
            message: "taxes found",
            data: taxes,
            totalPages,
            currentPage: page,
        };

    } catch (error) {
        console.log(error)
        return { status: "failed", message: "No tax found" };
    }
}

// get All tax
export const getAllTaxes = async () => {

    const taxes = await prisma.tax.findMany()
    if (!taxes || taxes.length < 1) {
        return { status: 'failed', message: 'Tax not found' }
    }

    return { status: 'success', message: 'Tax found', data: taxes }
}

