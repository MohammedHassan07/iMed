import { PrismaClient } from '../prisma/generated/prisma/index.js'

const prisma = new PrismaClient()

// add supplier
export const addSupplier = async (data) => {

    try {

        const { companyName, contactPerson, contact, email, address } = data

        if (!companyName || !contactPerson || !contact || !email || !address) {
            return { status: "failed", message: "All fields are required" }
        }

        const existingSupplier = await prisma.supplier.findUnique({
            where: { email },
        })

        if (existingSupplier) {
            return {
                status: "failed",
                message: `Supplier with email ${email} already exists`,
            }
        }

        const supplier = await prisma.supplier.create({
            data: {
                companyName,
                contactPerson,
                contact,
                email,
                address,
            },
        })

        return {
            status: "success",
            message: "Supplier added successfully",
            data: supplier,
        }
    } catch (error) {
        console.error("Error adding supplier:", error)
        return { status: "error", message: error.message }
    }
}

// get supplier on typing
export const getSupplierOnTyping = ({ search }) => {

    // const suppliers = await prisma.
}

// get suppliers with pagination
export const getSuppliers = async ({ page = 1, limit = 5, search = "" }) => {

    try {
        const skip = (page - 1) * limit;
        const where = search
            ? {
                OR: [
                    { companyName: { contains: search, } },
                    { contactPerson: { contains: search, } },
                    { contact: { contains: search, } },
                    { email: { contains: search } }
                ],
            }
            : {};

        const suppliers = await prisma.supplier.findMany({
            where,
            skip,
            take: limit,
            orderBy: { id: "desc" },
        });

        const totalCount = await prisma.supplier.count({ where });
        const totalPages = Math.ceil(totalCount / limit);

        if (!suppliers || suppliers.length < 1) {
            return { status: "failed", message: "No suppliers found" };
        }

        return {
            status: "success",
            message: "suppliers found",
            data: suppliers,
            totalPages,
            currentPage: page,
        };

    } catch (error) {
        console.log(error)
        return { status: "failed", message: "No suppliers found" };
    }
}