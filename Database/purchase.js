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
            medicines,
            date,
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
                    createdAt: new Date(purchaseDate)
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
                    purchaseType: 'PURCHASE',
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
                            packageQuantity: item.packageQuantity,
                            purchaseDate: new Date(purchaseDate),

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
                    isSold: false,
                    isExpired: false
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
                    purchaseDate: true,
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

// get neart to expire medicines
export async function getNearExpiryMedicines() {
    const today = new Date();
    const nearExpiryDate = new Date();
    nearExpiryDate.setMonth(today.getMonth() + 2);

    const nearExpiryMedicines = await prisma.purchaseItem.findMany({
        where: {
            expiryDate: {
                gte: today,
                lte: nearExpiryDate,
            },
            isExpired: false,
        },
        select: {
            batchNumber: true,
            expiryDate: true,
            remainingMedicines: true,
            medicine: {
                select: {
                    saltName: true,
                    brandName: true,
                },
            },
        },
        orderBy: {
            expiryDate: 'asc',
        },
    });

    if (!nearExpiryMedicines || nearExpiryMedicines.length < 1) {
        return { status: "failed", message: "No near-expiry medicines found." };
    }

    // Format response for frontend
    const formatted = nearExpiryMedicines.map((item) => ({
        saltName: item.medicine.saltName,
        brandName: item.medicine.brandName,
        batchNumber: item.batchNumber,
        expiryDate: item.expiryDate.toISOString().split("T")[0],
        stockLeft: item.remainingMedicines,
    }));

    return { status: "success", data: formatted };
}

// return purchase
export async function returnPurchase(data) {
    try {
        const {
            parentPurchaseId,
            notes,
            supplierId,
            subTotal,
            netTotal,
            medicines,
            returnDate,
        } = data;

        if (!Array.isArray(medicines) || medicines.length === 0) {
            throw new Error("No medicines provided for return.");
        }

        const [lastPurchase, lastPayment] = await Promise.all([
            prisma.purchase.findFirst({ orderBy: { createdAt: "desc" } }),
            prisma.payment.findFirst({ orderBy: { createdAt: "desc" } }),
        ]);

        const returnNumber = generateNumber(lastPurchase, "purchase", "purchaseNumber");
        const paymentNumber = generateNumber(lastPayment, "payment", "paymentNumber");

        const transactionResult = await prisma.$transaction(async (prisma) => {
            // 🔹 STEP 1: Validate all medicine entries before processing
            for (const item of medicines) {
                const existingItems = await prisma.purchaseItem.findMany({
                    where: {
                        purchaseId: Number(item.purchaseId),
                        medicineId: Number(item.medicineId),
                        batchNumber: item.batchNumber,
                    },
                });

                if (!existingItems.length) {
                    throw new Error(
                        `Batch ${item.batchNumber} for medicine ID ${item.medicineId} not found in purchase ID ${item.purchaseId}.`
                    );
                }

                const totalAvailableQty = existingItems.reduce(
                    (sum, record) => sum + record.remainingMedicines / record.packageQuantity,
                    0
                );

                if (item.returnQty > totalAvailableQty) {
                    throw new Error(
                        `Insufficient stock for batch ${item.batchNumber}. Available: ${totalAvailableQty}, Requested: ${item.returnQty}.`
                    );
                }
            }

            // 🔹 STEP 2: Create Payment record
            const payment = await prisma.payment.create({
                data: {
                    paymentType: "RETURN",
                    paymentNumber: paymentNumber,
                    amount: parseFloat(netTotal),
                    createdAt: new Date(returnDate),
                },
            });

            // 🔹 STEP 3: Create Return Purchase record
            const returnPurchase = await prisma.purchase.create({
                data: {
                    supplierId,
                    purchaseDate: new Date(returnDate),
                    purchaseNumber: returnNumber,
                    purchaseType: "RETURN",
                    notes: notes || null,
                    subTotal: parseFloat(subTotal),
                    netTotal: parseFloat(netTotal),
                    total: parseFloat(netTotal),
                    paymentId: payment.id,
                    returnPurchasedItems: {
                        create: medicines.map((item) => ({
                            medicineId: item.medicineId,
                            batchNumber: item.batchNumber,
                            expiryDate: item.expiryDate ? new Date(item.expiryDate) : null,
                            quantity: item.returnQty,
                            purchasePrice: parseFloat(item.purchasePrice),
                            reason: item.reason || "Damaged / Expired",
                            sellingPrice: parseFloat(item.sellingPrice),
                            sellingPricePerMedicine: parseFloat(item.sellingPricePerMedicine),
                            packageQuantity: item.packageQuantity,
                            totalMedicines: item.totalMedicines,
                            returnDate: new Date(returnDate),
                            parentPurchaseId: item.purchaseId,
                            purchaseDate: new Date(item.purchaseDate),
                        })),
                    },
                },
                include: { returnPurchasedItems: true },
            });

            // 🔹 STEP 4: Deduct quantities & mark as sold if zero
            for (const item of medicines) {
                // Fetch all batches to distribute return quantity properly
                const batchItems = await prisma.purchaseItem.findMany({
                    where: {
                        purchaseId: Number(item.purchaseId),
                        medicineId: Number(item.medicineId),
                        batchNumber: item.batchNumber,
                    },
                    orderBy: { id: "asc" },
                });

                let remainingToReturn = item.returnQty;

                for (const batch of batchItems) {
                    if (remainingToReturn <= 0) break;

                    const batchAvailable = batch.remainingMedicines / batch.packageQuantity;
                    const deduction = Math.min(remainingToReturn, batchAvailable);

                    await prisma.purchaseItem.update({
                        where: { id: batch.id },
                        data: {
                            quantity: { decrement: deduction },
                            remainingMedicines: { decrement: deduction * batch.packageQuantity },
                            totalMedicines: { decrement: deduction * batch.packageQuantity },
                        },
                    });

                    remainingToReturn -= deduction;

                    // Check updated stock level for this batch
                    const updatedBatch = await prisma.purchaseItem.findUnique({
                        where: { id: batch.id },
                        select: { remainingMedicines: true },
                    });

                    if (updatedBatch && updatedBatch.remainingMedicines <= 0) {
                        await prisma.purchaseItem.update({
                            where: { id: batch.id },
                            data: { isSold: true },
                        });
                    }
                }

                // If any return qty remains unallocated, something went wrong
                if (remainingToReturn > 0) {
                    throw new Error(
                        `Failed to fully return quantity for medicine ID ${item.medicineId}, batch ${item.batchNumber}.`
                    );
                }
            }

            return { payment, returnPurchase };
        });

        return {
            status: "success",
            message: "Purchase return successfully processed.",
            data: transactionResult,
        };
    } catch (error) {
        console.error("Error returning purchase:", error);
        return {
            status: "failed",
            message: error.message || "Failed to process purchase return.",
        };
    }
}





