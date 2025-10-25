import prisma from './index.js'

// add sales
export const addSales = async (data) => {
    const {
        items,
        subTotal,
        netTotal,
        discount,
        discountType,
        deliveryCharge,
        patientData,
    } = data;

    if (!Array.isArray(items) || items.length === 0) {
        return {
            status: 'failed',
            message: "At least one medicine item is required to complete the sale.",
        };
    }

    if (typeof subTotal !== "number" || subTotal <= 0) {
        return {
            status: 'failed',
            message: "Subtotal must be a positive number.",
        }
    }

    if (typeof netTotal !== "number" || netTotal <= 0) {
        return {
            status: 'failed',
            message: "Net total must be a positive number.",
        }
    }

    if (!["percentage", "fixed"].includes(discountType)) {
        return {
            status: 'failed',
            message: "Invalid discount type. Must be 'percentage' or 'fixed'.",
        }
    }

    for (const item of items) {
        if (
            !item.itemId ||
            !item.batchNumber ||
            typeof item.quantity !== "number" ||
            item.quantity <= 0 ||
            typeof item.sellingPrice !== "number" ||
            item.sellingPrice <= 0
        ) {
            return {
                status: 'failed',
                message: "Invalid item details provided in sale items.",
            }
        }
    }

    const patientDetails = patientData ? {
        patientId: patientData.patientId || null,
        patientName: patientData.patientName || null,
        patientContact: patientData.patientContact || null,
        patientAddress: patientData.patientAddress || null,
    } : {};

    const transaction = await prisma.$transaction(async (prisma) => {

        const sale = await prisma.sales.create({
            data: {
                ...patientDetails,
                subTotal,
                netTotal,
                discount,
                discountType,
                deliveryCharge: Number(deliveryCharge) || 0,
                items: {
                    create: items.map((item) => ({
                        purchaseItemId: item.purchaseItemsId || null,
                        itemId: item.itemId,
                        batchNumber: item.batchNumber,
                        quantity: item.quantity,
                        sellingPrice: item.sellingPrice,
                        totalAmount: item.totalAmount || item.quantity * item.sellingPrice,
                    })),
                },
            },
            include: { items: true },
        });


        for (const item of items) {
            const purchaseItem = await prisma.purchaseItem.findUnique({
                where: { id: item.purchaseItemsId },
            });

            if (!purchaseItem) {
                console.log(`Purchase item with ID ${item.purchaseItemsId} not found.`);
            }

            if (purchaseItem.remainingMedicines < item.quantity) {
                throw new Error(`Not enough stock available for ${item.itemId} (Batch: ${item.batchNumber}).`);
            }
            
            const updatedRemainingMedicines = purchaseItem.remainingMedicines - item.quantity;

            await prisma.purchaseItem.update({
                where: { id: item.purchaseItemsId },
                data: {
                    remainingMedicines: Number(purchaseItem.remainingMedicines - item.quantity),
                    isSold: updatedRemainingMedicines === 0 ? true : purchaseItem.isSold,
                },
            });
        }

        return sale;
    });

    return {
        status: 'success',
        message: "Sale recorded and inventory updated successfully.",
        data: transaction,
    };
};
