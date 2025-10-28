import prisma from './index.js'
import { data } from 'react-router-dom'
import generateNumber from './utils/generateNumber.js'

// add medicine
export async function createMedicine(data) {

    try {

        const existingMedicine = await prisma.medicine.findUnique({ where: { saltName: data.saltName } })
        if (existingMedicine) {

            return { status: 'failed', message: `Medicine ${existingMedicine.saltName} already exists`, saltName: data.saltName }
        }

        const lastItem = await prisma.medicine.findFirst({
            orderBy: {
                createdAt: 'desc',
            }
        })

        const itemCode = generateNumber(lastItem, 'item', 'itemCode')
        const medicine = {

            saltName: data.saltName,
            brandName: data.brandName,
            manufacturer: data.manufacturer,
            packageQuantity: Number(data.packageQuantity),
            productForm: data.productForm,
            minQuantityAlert: Number(data.minQuantityAlert),
            storageCondition: data.storageCondition,
            boxNumber: Number(data.boxNumber),
            description: data.description,
            itemCode: itemCode
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

// get medicine on typing 
export async function getMedicineOnTyping({ search }) {
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
                select: {
                    id: true,
                    purchaseId: true,
                    medicineId: true,
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

    const mergedMedicines = medicines.map((med) => {
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

// bulk upload
export async function bulkUpload(fileContent) {
    const jsonData = fileContent;

    const uniqueItems = [];
    const seen = new Set();

    for (const item of jsonData) {
        const { saltName } = item;

        if (!seen.has(saltName)) {
            uniqueItems.push(item);
            seen.add(saltName);
        }
    }

    const lastItem = await prisma.medicine.findFirst({
        orderBy: {
            createdAt: 'desc',
        }
    });

    let itemCode = generateNumber(lastItem, 'item', 'itemCode');

    const duplicateItems = [];
    const newItems = [];

    for (const item of uniqueItems) {
        const { saltName, brandName, manufacturer, packageQuantity, productForm,
            minQuantityAlert, storageCondition, boxNumber, description } = item;

        const existingItem = await prisma.medicine.findUnique({ where: { saltName: saltName } });

        if (existingItem) {

            duplicateItems.push(existingItem);
            continue;
        }

        const medicine = {
            saltName: saltName,
            brandName: brandName,
            manufacturer: manufacturer,
            packageQuantity: Number(packageQuantity),
            productForm: productForm,
            minQuantityAlert: Number(minQuantityAlert),
            storageCondition: storageCondition,
            boxNumber: Number(boxNumber),
            description: description,
            itemCode: itemCode,
        };

        newItems.push(medicine);

        let numericPart = medicine.itemCode.replace('iM-', '');
        let nextNumber = parseInt(numericPart) + 1;
        itemCode = `iM-${String(nextNumber).padStart(6, '0')}`;
    }

    const createdMedicines = await prisma.medicine.createMany({ data: newItems });

    return {
        newItems: newItems,
        duplicates: duplicateItems,
        status: 'success',
        message: `${newItems.length} items added successfully, ${duplicateItems.length} duplicates found.`,
    };
}
