import prisma from "./index.js";

// add company
export async function addCompany(data) {

    const { companyName, mfgCode } = data;


    if (!companyName || companyName.trim() === '') {
        throw new Error('Company Name is required');
    }

    if (!mfgCode || mfgCode.trim() === '') {
        throw new Error('Manufacturing Code (mfgCode) is required');
    }

    if (companyName.length > 255) {
        throw new Error('Company Name is too long');
    }

    if (mfgCode.length > 50) {
        throw new Error('Manufacturing Code is too long');
    }

    const existingCompany = await prisma.company.findFirst({
        where: {
            mfgCode: mfgCode
        }
    })

    if (existingCompany) {
        return { status: 'failed', message: `Company with ${mfgCode} Already exist` }
    }
    const newCompany = await prisma.company.create({
        data: {
            companyName: data.companyName,
            mfgCode: data.mfgCode,
        },
    });

    return { status: 'success', message: 'Company Added Successfully' };
}

// get suppliers with pagination
export const getCompany = async ({ page = 1, limit = 5, search = "" }) => {

    try {

        const skip = (page - 1) * limit;
        const where = search
            ? {
                OR: [
                    { companyName: { contains: search, } },
                    { mfgCode: { contains: search, } },
                ],
            }
            : {};

        const comapnies = await prisma.company.findMany({
            where,
            skip,
            take: limit,
            orderBy: { id: "desc" },
        });

        const totalCount = await prisma.company.count({ where });
        const totalPages = Math.ceil(totalCount / limit);

        if (!comapnies || comapnies.length < 1) {
            return { status: "failed", message: "No company found" };
        }

        return {
            status: "success",
            message: "suppliers found",
            data: comapnies,
            totalPages,
            currentPage: page,
        };

    } catch (error) {
        console.log(error)
        return { status: "failed", message: "No company found" };
    }
}

// update company
export const updateCompany = async (data) => {
    try {

        const { id, companyName, mfgCode } = data;

        if (!id) {
            return { status: 'failed', message: 'Company ID is required' };
        }

        const company = await prisma.company.findUnique({
            where: { id: Number(id) },
        });

        if (!company) {
            return { status: 'failed', message: 'Company not found' };
        }

        if (mfgCode && mfgCode !== company.mfgCode) {
            const existingMfgCode = await prisma.company.findUnique({
                where: { mfgCode },
            });

            if (existingMfgCode) {
                return { status: 'failed', message: 'MfgCode is already in use by another company' };
            }
        }

        const updatedData = {};
        if (companyName) updatedData.companyName = companyName;
        if (mfgCode) updatedData.mfgCode = mfgCode;
        updatedData.updatedAt = new Date();

        if (Object.keys(updatedData).length === 0) {
            return { status: 'failed', message: 'No valid fields to update' };
        }

        const updatedCompany = await prisma.company.update({
            where: { id: Number(id) },
            data: updatedData,
        });

        return { status: 'success', message: 'Company updated' };

    } catch (error) {
        console.log(error);
        return { status: 'failed', message: 'Internal error' };
    }
};

// delete company
export const deleteCompany = async (id) => {
    try {
      
        if (!id || isNaN(id)) {
            return { status: 'failed', message: 'Invalid company ID' };
        }

        const company = await prisma.company.findUnique({
            where: { id },
        });

        if (!company) {
            return { status: 'failed', message: 'Company not found' };
        }

        await prisma.company.delete({
            where: { id },
        });

        return { status: 'success', message: 'Company deleted successfully' };

    } catch (error) {
        console.log(error);
        return { status: 'failed', message: 'Internal error' };
    }
};

