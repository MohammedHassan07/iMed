import prisma from "./index.js";

// add purchase
export async function addPurchase(data) {
    try {
        const {
            supplierId,
            purchaseDate,
            notes,
            discountType,
            discount,
            tax,
            subTotal,
            // totalTax,
            netTotal,
            medicines
        } = data;

        const purchase = await prisma.purchase.create({
            data: {
                supplierId,
                purchaseDate: new Date(purchaseDate),
                notes,
                discountType,
                discount,
                tax,
                subTotal,
                // totalTax,
                netTotal,
                total: netTotal,
                purchasedItems: {
                    create: medicines.map((item) => ({
                        medicineId: item.medicineId,
                        batchNumber: item.batchNumber,
                        expiryDate: new Date(item.expiryDate),
                        purchasePrice: parseFloat(item.purchasePrice),
                        sellingPrice: parseFloat(item.sellingPrice),
                        quantity: parseInt(item.quantity),
                        profit: parseFloat(item.profit),
                        tax: parseFloat(item.tax),
                        total: parseFloat(item.total),
                        totalMedicines: parseInt(item.quantity * item.packageQuantity),
                        remainingMedicines: parseInt(item.quantity * item.packageQuantity),
                        scheme: item.scheme
                    }))
                }
            },
            include: {
                purchasedItems: true,
            }
        });

        return { status: 'success', message: 'Purchase Added', data: purchase };
    } catch (error) {
        console.error('Error creating purchase:', error);
        return { status: 'failed', message: error.message };
    }
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