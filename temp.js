export async function returnPurchase(data) {
    try {
        const {
            parentPurchaseId,
            notes,
            supplierId,
            subTotal,
            netTotal,
            medicines,
            returnDate
        } = data;

        const [lastPurchase, lastPayment] = await Promise.all([
            prisma.purchase.findFirst({ orderBy: { createdAt: 'desc' } }),
            prisma.payment.findFirst({ orderBy: { createdAt: 'desc' } })
        ]);

        const returnNumber = generateNumber(lastPurchase, "purchase", "purchaseNumber");
        const paymentNumber = generateNumber(lastPayment, "payment", "paymentNumber");

        const transactionResult = await prisma.$transaction(async (prisma) => {

            // 🔹 Step 1: Validation check
            for (const item of medicines) {
                const currentItem = await prisma.purchaseItem.findFirst({
                    where: {
                        purchaseId: Number(item.purchaseId),
                        medicineId: Number(item.medicineId),
                        batchNumber: item.batchNumber,
                    },
                });

                if (!currentItem) {
                    throw new Error(
                        `Batch ${item.batchNumber} for medicine ID ${item.medicineId} not found in purchase.`
                    );
                }

                const availableQty = currentItem.remainingMedicines / currentItem.packageQuantity;
               console.log(item.returnQty,  currentItem.quantity)
                if (item.returnQty > currentItem.quantity) {
                    throw new Error(
                        `Not enough stock for batch ${item.batchNumber}. Available: ${currentItem.quantity}, Requested: ${item.returnQty}`
                    );
                }
            }

            // 🔹 Step 2: Create Payment record
            const payment = await prisma.payment.create({
                data: {
                    paymentType: "RETURN",
                    paymentNumber: paymentNumber,
                    amount: netTotal,
                    createdAt: new Date(returnDate),
                },
            });

            // 🔹 Step 3: Create Return Purchase record
            const returnPurchase = await prisma.purchase.create({
                data: {
                    supplierId,
                    purchaseDate: new Date(returnDate),
                    purchaseNumber: returnNumber,
                    purchaseType: "RETURN",
                    notes: notes || null,
                    subTotal,
                    netTotal,
                    total: netTotal,
                    paymentId: payment.id,
                    returnPurchasedItems: {
                        create: medicines.map((item) => ({
                            medicineId: item.medicineId,
                            batchNumber: item.batchNumber,
                            expiryDate: new Date(item.expiryDate),
                            quantity: item.returnQty,
                            purchasePrice: parseFloat(item.purchasePrice),
                            reason: item.reason || "Damaged / Expired",
                            sellingPrice: item.sellingPrice,
                            sellingPricePerMedicine: item.sellingPricePerMedicine,
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

            // 🔹 Step 4: Update stock & mark as sold if zero
            for (const item of medicines) {

                // Update quantities
                const updated = await prisma.purchaseItem.updateMany({
                    where: {
                        purchaseId: Number(item.purchaseId),
                        medicineId: Number(item.medicineId),
                        batchNumber: item.batchNumber,
                    },
                    data: {
                        quantity: { decrement: item.returnQty },
                        remainingMedicines: { decrement: item.returnQty * item.packageQuantity },
                        totalMedicines: { decrement: item.returnQty * item.packageQuantity },
                    },
                });

                // Fetch the updated record to check remainingMedicines
                const updatedItem = await prisma.purchaseItem.findFirst({
                    where: {
                        purchaseId: Number(item.purchaseId),
                        medicineId: Number(item.medicineId),
                        batchNumber: item.batchNumber,
                    },
                    select: { remainingMedicines: true },
                });

                // If stock = 0 → mark as sold
                if (updatedItem && updatedItem.remainingMedicines <= 0) {
                    await prisma.purchaseItem.updateMany({
                        where: {
                            purchaseId: Number(item.purchaseId),
                            medicineId: Number(item.medicineId),
                            batchNumber: item.batchNumber,
                        },
                        data: { isSold: true },
                    });
                }
            }

            return { payment, returnPurchase };
        });

        return {
            status: "success",
            message: "Purchase return successfully processed",
            data: transactionResult,
        };
    } catch (error) {
        console.error("Error returning purchase:", error);
        return {
            status: "failed",
            message: error.message || "Failed to process return.",
        };
    }
}