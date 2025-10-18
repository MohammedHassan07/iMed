import React, { useState } from "react";
import { Trash } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";

const ReturnPurchase = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const [medicines] = useState([
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            supplier: "MedLife Distributors",
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image: "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 30,
            purchasePrice: 25,
            supplier: "Apollo Pharma",
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            image: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
            availableQty: 70,
            purchasePrice: 10,
            supplier: "MedPlus Pharma",
        },
    ]);

    // Add Medicine to Return List
    const handleAddToReturn = (med) => {
        setSelectedItems((prev) => {
            const exists = prev.find((i) => i.id === med.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === med.id
                        ? { ...item, returnQty: item.returnQty + 1 }
                        : item
                );
            } else {
                return [...prev, { ...med, returnQty: 1, reason: "" }];
            }
        });
    };

    // Handle Field Updates
    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    //  Remove Item
    const handleRemoveItem = (id) => {
        setSelectedItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    // Calculations
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.returnQty * cur.purchasePrice,
        0
    );
    const tax = subTotal * 0.05;
    const netTotal = subTotal + tax;

    return (
        <div className="grid grid-cols-[8fr_4fr] p-3 gap-3">
            {/* Left Panel - Return Details */}
            <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300">
                {selectedItems.length === 0 ? (
                    <p className="text-gray-500 text-center">No medicines selected for return.</p>
                ) : (
                    <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">
                        <table className="min-w-full border border-gray-200 text-sm table-auto">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-2 px-3 text-left font-semibold whitespace-nowrap">Brand Name</th>
                                    <th className="py-2 px-3 text-left font-semibold">Salt Name</th>
                                    {/* <th className="py-2 px-3 text-center font-semibold">Supplier</th> */}
                                    <th className="py-2 px-3 text-center font-semibold">Return Qty</th>
                                    <th className="py-2 px-3 text-center font-semibold">Reason</th>
                                    <th className="py-2 px-3 text-center font-semibold">Price</th>
                                    <th className="py-2 px-3 text-center font-semibold">Total</th>
                                    <th className="py-2 px-3 text-center font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-100">
                                        <td className="py-2 px-3 truncate">{item.brandName}</td>
                                        <td className="py-2 px-3 text-gray-600 text-xs truncate whitespace-nowrap">
                                            {item.saltName}
                                        </td>
                                        {/* <td className="py-2 px-3 text-center text-xs">{item.supplier}</td> */}
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.returnQty}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "returnQty", parseInt(e.target.value) || 1)
                                                }
                                                className="border border-gray-300 p-1 rounded-md w-16 text-center bg-white"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center">
                                            <select
                                                value={item.reason}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "reason", e.target.value)
                                                }
                                                className="border border-gray-300 p-1 rounded-md w-28 text-center bg-white text-sm"
                                            >
                                                <option value="">Select</option>
                                                <option value="Expired">Expired</option>
                                                <option value="Damaged">Damaged</option>
                                                <option value="Wrong Supply">Wrong Supply</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </td>
                                        <td className="py-2 px-3 text-center">₹{item.purchasePrice}</td>
                                        <td className="py-2 px-3 text-center">
                                            ₹{(item.purchasePrice * item.returnQty).toFixed(2)}
                                        </td>
                                        <td className="py-2 px-3 text-center cursor-pointer">
                                            <div
                                                className="flex items-center justify-center"
                                                onClick={() => handleRemoveItem(item.id)}
                                            >
                                                <Trash size={20} className="text-red-600 hover:text-red-800" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Billing Summary */}
                {selectedItems.length > 0 && (
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Subtotal</span>
                            <span>₹{subTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-medium">Tax (5%)</span>
                            <span>₹{tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold mb-4">
                            <span>Return Net Total</span>
                            <span>₹{netTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            Submit Return
                        </button>
                    </div>
                )}
            </div>

            {/* ✅ Right Panel - Medicine Search */}
            <MedicineSearch
                medicines={medicines}
                onSelectMedicine={handleAddToReturn}
            />
        </div>
    );
};

export default ReturnPurchase;
