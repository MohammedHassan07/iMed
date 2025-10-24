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
export async function getPurchase({ page = 1, limit = 10, search = "" }) {
    try {
        const skip = (page - 1) * limit;

        const whereCondition = search
            ? {
                OR: [

                    // Search in invoice number 
                    // { invoiceNumber: { contains: search } },
                    {
                        purchasedItems: {
                            some: {
                                medicine: {
                                    OR: [
                                        { brandName: { contains: search } },
                                        { saltName: { contains: search } },
                                    ],
                                },
                            },
                        },
                    },
                ],
            }
            : {};

        const [totalCount, purchases] = await Promise.all([
            prisma.purchase.count({ where: whereCondition }),

            prisma.purchase.findMany({
                skip,
                take: limit,
                where: whereCondition,
                orderBy: { createdAt: "desc" },
                include: {
                    purchasedItems: {
                        include: {
                            medicine: true,
                        },
                    },
                },
            }),
        ]);

        const totalPages = Math.ceil(totalCount / limit);

        return {
            status: "success",
            message: "Purchases found successfully",
            data: purchases,
            totalPages,
            currentPage: page,
        };
    } catch (error) {
        console.error("Error fetching purchases:", error);
        return {
            status: "error",
            message: "Failed to fetch purchases",
        };
    }
}

