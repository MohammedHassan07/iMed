import { PrismaClient } from '../prisma/generated/prisma/index.js'
// import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// Example usage
export async function createMedicine(name, email) {

    return await prisma.medicine.create({
        data: { saltName: 'citrazine', brandName: 'dolo', },
    });
}

export async function getMedicine() {
    return await prisma.medicine.findMany()
}
