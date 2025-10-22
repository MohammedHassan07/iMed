import { PrismaClient } from '../prisma/generated/prisma/index.js'
// import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// add medicine
export async function createMedicine(data) {

    try {

        const existingMedicine = await prisma.medicine.findUnique({ where: { saltName: data.saltName } })
        if (existingMedicine) {
            
            return { status: 'failed', message: `Medicine ${existingMedicine.saltName} already exists`, saltName: data.saltName }
        }

        const medicine = {

            saltName: data.saltName,
            brandName: data.brandName,
            manufacturer: data.manufacturer,
            packageQuantity: Number(data.packageQuantity),
            productForm: data.productForm,
            minQuantityAlert: Number(data.minQuantityAlert),
            storageCondition: data.storageCondition,
            boxNumber: Number(data.boxNumber),
            description: data.description
        }
        const result = await prisma.medicine.create({ data: medicine })

        if (!result) {
            return { status: 'failed', message: 'something went wrong !!!' }
        }
        return { status: 'success', message: 'Medicine added', result }

    } catch (error) {
        console.log(error)
        return { status: 'failed', message: 'something went wrong !!!', error }
    }
}

// get medicine with pagination
export async function getMedicine({ page = 1, limit = 5, search = "" }) {

    try {

        const skip = (page - 1) * limit;

        const where = search
            ? {
                OR: [
                    { saltName: { contains: search, } },
                    { brandName: { contains: search, } },
                    { productForm: { contains: search, } },
                ],
            }
            : {};

        const medicines = await prisma.medicine.findMany({
            where,
            skip,
            take: limit,
            orderBy: { id: "desc" },
        });

        const totalCount = await prisma.medicine.count({ where });
        const totalPages = Math.ceil(totalCount / limit);

        if (!medicines || medicines.length < 1) {
            return { status: "failed", message: "No medicines found" };
        }

        return {
            status: "success",
            message: "Medicines found",
            data: medicines,
            totalPages,
            currentPage: page,
        };

    } catch (error) {
        console.log(error)
        return { status: "failed", message: "No medicines found" };
    }
}
