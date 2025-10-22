import { PrismaClient } from '../prisma/generated/prisma/index.js'

// add purchase
export async function addPurchase(data) {

    console.log(data)
    return { status: 'failed' }
}

// get purchase
export async function getPurchase(data) {

    const purchase = await prisma.purchase.findMany({
        include: {
            purchasedItems: {
                include: { medicine: true },
            },
        },
    });
    return {}
}