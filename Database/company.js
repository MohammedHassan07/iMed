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
        console.log('Database URL:', process.env.DATABASE_URL);
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
