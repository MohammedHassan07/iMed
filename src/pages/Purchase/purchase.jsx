import React, { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
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
        const exists = selectedItems.find((i) => i.id === med.id);
        if (!exists) {
            setSelectedItems([
                ...selectedItems,
                { ...med, quantity: 1, batchNumber: "" },
            ]);
        }
    };

    const handleQuantityChange = (id, type) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity:
                            type === "inc"
                                ? item.quantity + 1
                                : item.quantity > 1
                                    ? item.quantity - 1
                                    : 1,
                    }
                    : item
            )
        );
    };

    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    // Billing Calculations
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.purchasePrice * cur.quantity,
        0
    );
    const tax = subTotal * 0.05; // 5% GST
    const netTotal = subTotal + tax;

    return (
        <div className="grid grid-cols-[8fr_4fr]  p-3 gap-3">
            {/* Purchase Details */}
            <div className="w-full  bg-gray-50 rounded-xl p-2 border-1 border-gray-300">
                {selectedItems.length === 0 ? (
                    <p className="text-gray-500 text-center">
                        No medicines added yet.
                    </p>
                ) : (
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                        {selectedItems.map((item) => (
                            <div
                                key={item.id}
                                className="border border-gray-300 rounded-lg p-3 flex flex-col gap-2 bg-gray-50"
                            >
                                <div className="flex ">
                                    <div>
                                        <p className="font-semibold">{item.brandName}</p>
                                        <p className="text-sm text-gray-600">
                                            {item.saltName}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() =>
                                                handleQuantityChange(item.id, "dec")
                                            }
                                            className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="px-2">{item.quantity}</span>
                                        <button
                                            onClick={() =>
                                                handleQuantityChange(item.id, "inc")
                                            }
                                            className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Batch Number"
                                        value={item.batchNumber}
                                        onChange={(e) =>
                                            handleInputChange(item.id, "batchNumber", e.target.value)
                                        }
                                        className="border border-gray-300  p-2 rounded-md"
                                    />
                                    <div >
                                        <input
                                            type="number"
                                            placeholder="Purchase Price"
                                            value={item.purchasePrice}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    item.id,
                                                    "purchasePrice",
                                                    parseFloat(e.target.value)
                                                )
                                            }
                                            className="border p-2 rounded-md w-11     appearance-none 
             [&::-webkit-inner-spin-button]:appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none 
             [&::-webkit-inner-spin-button]:m-0 
             [&::-webkit-outer-spin-button]:m-0
             [&::-moz-appearance]:textfield"
                                        />
                                        <label className="text-sm text-gray-500" htmlFor="purchase-price">Purchase Price</label>

                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Selling Price"
                                        value={item.sellingPrice}
                                        onChange={(e) =>
                                            handleInputChange(
                                                item.id,
                                                "sellingPrice",
                                                parseFloat(e.target.value)
                                            )
                                        }
                                        className="border p-2 rounded-md"
                                    />
                                </div>
                            </div>
                        ))}
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
            <div className="w-full  bg-gray-50 shadow-md rounded-xl p-4 border-1 border-gray-300 overflow-auto h-2/3">
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

                <div className="flex flex-wrap justify-start items-start gap-2 max-h-[450px] ">
                    {medicines.map((med) => (

                        <MedicineCard med={med} handleAddMedicine={handleAddMedicine} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Purchase;
