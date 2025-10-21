import { PrismaClient } from '../prisma/generated/prisma/index.js'
// import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// add medicine
export async function createMedicine(data) {

    try {

        console.log(data.packageQuantity, typeof data.packageQuantity)
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
        return { status: 'failed', message: 'something went wrong !!!' , error}
    }
}

export async function getMedicine() {
    return await prisma.medicine.findMany()
}
