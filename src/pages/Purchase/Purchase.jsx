import React, { useState } from "react";
import { Search, Trash } from "lucide-react";
import MedicineCard from "../../components/MedicineCard";

const Purchase = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [selectedTax, setSelectedTax] = useState(5);
    const [searchSupplier, setSearchSupplier] = useState("");
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const [discountType, setDiscountType] = useState("percentage"); // 'percentage' | 'fixed'


    const [medicines] = useState([
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            productForm: "tablet",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
            packageQuantity: 10
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Amoxil 250",
            productForm: "capsule",
            availableQty: 30,
            purchasePrice: 18,
            sellingPrice: 28,
            packageQuantity: 50
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            productForm: "tablet",
            availableQty: 40,
            purchasePrice: 8,
            sellingPrice: 15,
            packageQuantity: 20
        },
    ]);

    const [suppliers] = useState([
        {
            id: 1,
            name: "Draco Malfoy",
            company: "Malfoy Potions Ltd.",
            contact: "9876543210",
            email: "draco@malfoypotions.com",
            address: "Malfoy Manor, Wiltshire, England",
        },
        {
            id: 2,
            name: "Severus Snape",
            company: "Snape’s Advanced Elixirs",
            contact: "9823456712",
            email: "snape@hogwardz.edu",
            address: "Hogwardz Dungeon, Scotland",
        },
    ]);

    // Filter suppliers dynamically
    const filteredSuppliers = suppliers.filter(
        (supplier) =>
            supplier.name.toLowerCase().includes(searchSupplier.toLowerCase()) ||
            supplier.company.toLowerCase().includes(searchSupplier.toLowerCase())
    );

    // Select supplier
    const handleSelectSupplier = (supplier) => {
        setSelectedSupplier(supplier);
        setSearchSupplier("");
    };

    // Add medicine to purchase list
    const handleAddMedicine = (med) => {
        setSelectedItems((prev) => {
            const exists = prev.find((i) => i.id === med.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === med.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [
                    ...prev,
                    { ...med, quantity: 1, batchNumber: "", tax: selectedTax },
                ];
            }
        });
    };

    // Input change handler
    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setSelectedItems((prev) => prev.filter((item) => item.id !== id));
    };

    // PER ITEM TOTAL (with tax)
    const getItemTotal = (item) => {
        const qty = Number(item.quantity) || 0;
        const price = Number(item.purchasePrice) || 0;
        const tax = Number(item.tax) || 0;
        const totalWithoutTax = qty * price;
        const taxAmount = (totalWithoutTax * tax) / 100;
        return totalWithoutTax + taxAmount;
    };

    const getItemProfit = (item) => {
        const sellingPrice = item.sellingPrice * item.packageQuantity // TODO: multiply with package qunatity
        const purchasePrice = item.purchasePrice
        const profit = (sellingPrice - purchasePrice) * item.quantity
        return profit
    }

    // BILL TOTALS
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.purchasePrice * cur.quantity,
        0
    );

    const itemTaxAmount = selectedItems.reduce(
        (acc, cur) =>
            acc + (cur.purchasePrice * cur.quantity * (Number(cur.tax) || 0)) / 100,
        0
    );


    const discountValue = Number(discount) || 0;
    const discountAmount =
        discountType === "percentage"
            ? (subTotal * discountValue) / 100
            : discountValue;

    const overallTaxRate = selectedTax;

    const overallTaxAmount =
        ((subTotal - discountAmount) + itemTaxAmount) * overallTaxRate / 100;

    const netTotal = subTotal - discountAmount + itemTaxAmount + overallTaxAmount;


    return (
        <>
            {/* Supplier Section */}
            <div className="p-4 bg-gray-200 rounded-xl mb-4 border border-gray-200">

                <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                    <div>
                        <h2 className="text-lg font-semibold">Supplier Details</h2>
                    </div>

                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                        <input
                            type="text"
                            placeholder="Search Supplier..."
                            value={searchSupplier}
                            onChange={(e) => setSearchSupplier(e.target.value)}
                            className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                        />

                        {searchSupplier && filteredSuppliers.length > 0 && (
                            <ul className="absolute bg-gray-300 border border-gray-300 rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                                {filteredSuppliers.map((supplier) => (
                                    <li
                                        key={supplier.id}
                                        onClick={() => handleSelectSupplier(supplier)}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {supplier.name} — {supplier.company}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {selectedSupplier ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Name:</span>
                            <span className="text-gray-600">{selectedSupplier.name}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Company:</span>
                            <span className="text-gray-600">{selectedSupplier.company}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Contact:</span>
                            <span className="text-gray-600">{selectedSupplier.contact}</span>
                        </div>
                        <div className="col-span-2 text-right">
                            <button
                                onClick={() => setSelectedSupplier(null)}
                                className="text-sm text-red-600 hover:underline"
                            >
                                Remove Supplier
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">No supplier selected.</p>
                )}
            </div>

            {/* Purchase Details */}
            <div className="grid grid-cols-[8fr_4fr] p-3 gap-3">

                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300">

                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center ">No medicines added yet.</p>
                    ) : (
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">
                            <div className="flex items-center justify-start space-x-4">
                                <div className="flex flex-col">
                                    <label htmlFor="">Purchase date</label>
                                    <input
                                        className="border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950 transition-all duration-100"
                                        type="date"
                                        placeholder="Purchase Date"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Notes</label>
                                    <input
                                        type="text"
                                        className="outline-0 border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950"
                                        rows="2"
                                        placeholder="Enter Notes"
                                    />
                                </div>
                            </div>
                            <table className="min-w-full border border-gray-200 text-sm table-fixed mt-5">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                        <th className="py-2 px-3 text-left font-semibold">Salt Name</th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Quantity
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Batch Number
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Purchase Price
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Selling Price
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Expiry Date
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">Tax</th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Total (₹)
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Profit (₹)
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="py-2 px-3 truncate">{item.brandName}</td>
                                            <td className="py-2 px-3 truncate w-32 flex flex-col justify-center ">
                                                <span className="">
                                                    {item.saltName}
                                                </span>
                                                <span className="text-xs ">
                                                    ({item.packageQuantity})
                                                </span>
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "quantity",
                                                            parseInt(e.target.value) || 1
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-16 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="text"
                                                    value={item.batchNumber}
                                                    placeholder="Batch Number"
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "batchNumber"
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-20 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    value={item.purchasePrice}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "purchasePrice",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-24 text-center"
                                                />
                                            </td>

                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    value={item.sellingPrice}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "sellingPrice",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-24 text-center"
                                                />
                                            </td>

                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="date"
                                                    value={item.expiryDate}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "expiryDate",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-32 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <select
                                                    value={item.tax}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "tax",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-20 text-center"
                                                >
                                                    <option value="0">0%</option>
                                                    <option value="5">5%</option>
                                                    <option value="12">12%</option>
                                                    <option value="18">18%</option>
                                                    <option value="28">28%</option>
                                                </select>
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                ₹{getItemTotal(item).toFixed(2)}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                ₹{getItemProfit(item).toFixed(2)}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Billing Section */}
                    {selectedItems.length > 0 && (
                        <div className="mt-6 border-t pt-4 space-y-3">


                            <div className="mt-6 border-t pt-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Subtotal:</span>
                                    <span>₹{subTotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Discount:</span>
                                    <div className="flex items-center gap-2">

                                        <select
                                            value={discountType}
                                            onChange={(e) => setDiscountType(e.target.value)}
                                            className="border border-gray-300 p-2 rounded-md w-35 text-center"
                                        >
                                            <option value="percentage">Percentage (%)</option>
                                            <option value="fixed">Fixed (₹)</option>
                                        </select>

                                        <input
                                            type="number"
                                            value={discount}
                                            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                                            className="border border-gray-300 p-1 rounded-md w-20 text-right"
                                        />

                                    </div>
                                </div>


                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Overall Tax (%):</span>
                                    <select
                                        value={selectedTax}
                                        onChange={(e) => setSelectedTax(parseFloat(e.target.value))}
                                        className="border border-gray-300 p-1 rounded-md w-20 text-right "
                                    >
                                        <option value="0">0%</option>
                                        <option value="5">5%</option>
                                        <option value="12">12%</option>
                                        <option value="18">18%</option>
                                        <option value="28">28%</option>
                                    </select>
                                </div>


                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Overall Tax ({selectedTax}%):</span>
                                    <span>₹{overallTaxAmount.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-lg font-semibold border-t pt-2">
                                    <span>Net Total:</span>
                                    <span>₹{netTotal.toFixed(2)}</span>
                                </div>

                                <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                    Purchase
                                </button>
                            </div>

                        </div>
                    )}
                </div>

                {/* Medicine List */}
                <div className="w-full bg-gray-50 shadow-md rounded-xl p-4 border border-gray-300 overflow-auto h-[80vh]">
                    <div className="relative mb-5">
                        <Search className="absolute left-3 top-2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search medicines..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-3 border rounded-md py-1 px-2 border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                    <div className="flex flex-wrap justify-start gap-3 max-h-[450px] overflow-y-auto">
                        {medicines
                            .filter(
                                (m) =>
                                    m.saltName
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    m.brandName
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    m.productForm
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                            )
                            .map((med) => (
                                <MedicineCard
                                    key={med.id}
                                    med={med}
                                    handleAddMedicine={handleAddMedicine}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;
