import prisma from "./index.js";
import generateNumber from "./utils/generateNumber.js";

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

        const [lastItem, lastPayment] = await Promise.all([
            prisma.purchase.findFirst({ orderBy: { createdAt: 'desc' } }),
            prisma.payment.findFirst({ orderBy: { createdAt: "desc" } })
        ])
        const purchaseNumber = generateNumber(lastItem, 'purchase', 'purchaseNumber')
        const paymentNumber = generateNumber(lastPayment, "payment", "paymentNumber");


        const transactionResult = await prisma.$transaction(async (prisma) => {

            const payment = await prisma.payment.create({
                data: {
                    paymentType: "PURCHASE",
                    paymentNumber: paymentNumber,
                    amount: netTotal,
                },
            });

            const purchase = await prisma.purchase.create({
                data: {
                    supplierId,
                    purchaseDate: new Date(purchaseDate),
                    notes,
                    discountType,
                    discount,
                    tax,
                    subTotal,
                    netTotal,
                    purchaseNumber,
                    total: netTotal,
                    paymentId: payment.id,
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
                            sellingPricePerMedicine: parseFloat(item.sellingPrice / item.quantity),
                            scheme: item.scheme,
                            packageQuantity: item.packageQuantity
                        }))
                    }
                },
                include: {
                    purchasedItems: true,
                }
            });

            return { payment, purchase };
        });

        return { status: 'success', message: 'Purchase Added', data: transactionResult };

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

// get purchase items on typing
export async function getStocksOnTyping({ search }) {
    const medicines = await prisma.medicine.findMany({
        where: {
            OR: [
                { saltName: { contains: search } },
                { brandName: { contains: search } },
                { productForm: { contains: search } },
            ],
        },
        include: {
            purchaseItems: {
                where: {
                    isSold: false,  // Only fetch unsold purchase items
                },
                select: {
                    id: true,
                    batchNumber: true,
                    expiryDate: true,
                    purchasePrice: true,
                    sellingPrice: true,
                    quantity: true,
                    remainingMedicines: true,
                    scheme: true,
                    totalMedicines: true,
                    profit: true,
                    tax: true,
                    sellingPricePerMedicine: true,
                },
            },
        },
    });

    if (!medicines || medicines.length < 1) {
        return { status: "failed", message: "No medicines found" };
    }

    // Filter out medicines that have no unsold purchase items
    const filteredMedicines = medicines.filter((med) => med.purchaseItems.length > 0);

    if (filteredMedicines.length === 0) {
        return { status: "failed", message: "No unsold medicines found" };
    }

    const mergedMedicines = filteredMedicines.map((med) => {
        const batchMap = new Map();

        med.purchaseItems.forEach((item) => {
            if (batchMap.has(item.batchNumber)) {
                const existing = batchMap.get(item.batchNumber);
                batchMap.set(item.batchNumber, {
                    ...existing,
                    quantity: existing.quantity + item.quantity,
                    remainingMedicines:
                        existing.remainingMedicines + item.remainingMedicines,
                    totalMedicines:
                        existing.totalMedicines + item.totalMedicines,
                });
            } else {
                batchMap.set(item.batchNumber, { ...item });
            }
        });

        return {
            ...med,
            purchaseItems: Array.from(batchMap.values()),
        };
    });

    return {
        status: "success",
        message: "Medicines found",
        data: mergedMedicines,
    };
}

