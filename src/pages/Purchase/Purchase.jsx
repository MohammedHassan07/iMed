import React, { useState } from "react";
import { Search, Trash } from "lucide-react";
import MedicineCard from "../../components/MedicineCard";

const Purchase = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [medicines, setMedicines] = useState([
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image:
                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image:
                "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 35,
            purchasePrice: 25,
            sellingPrice: 35,
        },
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image:
                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image:
                "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 35,
            purchasePrice: 25,
            sellingPrice: 35,
        },
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image:
                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image:
                "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 35,
            purchasePrice: 25,
            sellingPrice: 35,
        },
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image:
                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image:
                "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 35,
            purchasePrice: 25,
            sellingPrice: 35,
        },
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image:
                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image:
                "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 35,
            purchasePrice: 25,
            sellingPrice: 35,
        },
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image:
                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            image:
                "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
            availableQty: 75,
            purchasePrice: 8,
            sellingPrice: 15,
        },
    ]);

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
                // Add new item with quantity 1
                return [...prev, { ...med, quantity: 1, batchNumber: "" }];
            }
        });
    };

    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setSelectedItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };


    // Billing Calculations
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.purchasePrice * cur.quantity,
        0
    );
    const tax = subTotal * 0.05; 
    const netTotal = subTotal + tax;

    return (
        <div className="grid grid-cols-[8fr_4fr] p-3 gap-3">

            {/* Purchase Details */}
            <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300 ">
                {selectedItems.length === 0 ? (
                    <p className="text-gray-500 text-center">No medicines added yet.</p>
                ) : (
                    <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">

                        <table className="min-w-full border border-gray-200 text-sm table-auto">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                    <th className="py-2 px-3 text-left font-semibold whitespace-nowrap">Salt Name</th>
                                    <th className="py-2 px-3 text-center font-semibold">Quantity</th>
                                    <th className="py-2 px-3 text-center font-semibold">Batch No.</th>
                                    <th className="py-2 px-3 text-center font-semibold">Purchase Price</th>
                                    <th className="py-2 px-3 text-center font-semibold">Selling Price</th>
                                    <th className="py-2 px-3 text-center font-semibold">Purchase Date</th>
                                    <th className="py-2 px-3 text-center font-semibold">Expiry Date</th>
                                    <th className="py-2 px-3 text-center font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedItems.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-100">
                                        <td className="py-2 px-3 truncate">{item.brandName}</td>
                                        <td className="py-2 px-3 text-gray-600 text-xs truncate whitespace-nowrap">{item.saltName}</td>
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "quantity", parseInt(e.target.value) || 1)
                                                }
                                                className="border border-gray-300 p-1 rounded-md w-16 text-center bg-white"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="text"
                                                placeholder="Batch No."
                                                value={item.batchNumber}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "batchNumber", e.target.value)
                                                }
                                                className="border border-gray-300 p-1 rounded-md w-28 text-center bg-white"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="number"
                                                placeholder="₹0.00"
                                                value={item.purchasePrice}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "purchasePrice", parseFloat(e.target.value))
                                                }
                                                className="border border-gray-300 p-1 rounded-md w-24 text-center bg-white"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="number"
                                                placeholder="₹0.00"
                                                value={item.sellingPrice}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "sellingPrice", parseFloat(e.target.value))
                                                }
                                                className="border border-gray-300 p-1 rounded-md w-24 text-center bg-white"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="date"
                                                value={item.purchaseDate || ""}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "purchaseDate", e.target.value)
                                                }
                                                className="border border-gray-300 p-1 rounded-md bg-white w-36 text-center"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center">
                                            <input
                                                type="date"
                                                value={item.expiryDate || ""}
                                                onChange={(e) =>
                                                    handleInputChange(item.id, "expiryDate", e.target.value)
                                                }
                                                className="border border-gray-300 p-1 rounded-md bg-white w-36 text-center"
                                            />
                                        </td>
                                        <td className="py-2 px-3 text-center cursor-pointer">
                                            <div className="flex items-center justify-center" onClick={() => handleRemoveItem(item.id)}>
                                                <Trash size={20} className="text-red-600 hover:text-red-800" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Billing Section */}
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
                            <span>Net Total</span>
                            <span>₹{netTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            Purchase
                        </button>
                    </div>
                )}
            </div>


            {/*  Search Medicines */}
            <div className="w-full  bg-gray-50 shadow-md rounded-xl p-4 border-1 border-gray-300 overflow-auto h-[80vh]">
                <div className="relative mb-5">
                    <Search className="absolute left-3 top-2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Salt Name, Brand Name, Poduct Form"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-3 border rounded-md py-1 px-2 border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-100"
                    />
                </div>

                <div className="flex flex-wrap justify-start items-start gap-5 max-h-[450px] ">
                    {medicines.map((med) => (

                        <MedicineCard med={med} handleAddMedicine={handleAddMedicine} />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Purchase;
