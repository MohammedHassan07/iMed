import React, { useState } from "react";
import { Trash } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";

const AddSales = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [medicines] = useState([
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            image: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
            availableQty: 50,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Mox 250",
            image: "https://cdn-icons-png.flaticon.com/512/2947/2947374.png",
            availableQty: 35,
            sellingPrice: 35,
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            image: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
            availableQty: 75,
            sellingPrice: 15,
        },
    ]);

    const [patient, setPatient] = useState({
        name: "",
        age: "",
        gender: "",
        contact: "",
    });

    const handlePatientChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

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
                return [...prev, { ...med, quantity: 1 }];
            }
        });
    };

    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
        );
    };

    const handleRemoveItem = (id) => {
        setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Billing Calculations
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.sellingPrice * cur.quantity,
        0
    );
    const tax = subTotal * 0.05;
    const netTotal = subTotal + tax;

    return (
        <>
            {/* Patient Details */}
            <div className="p-4 bg-white rounded-xl">
                <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                    <div>

                        <h2 className="text-lg font-semibold">Patient Details</h2>
                    </div>
                    {/* Search Patient Input */}
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search Patient..."
                            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="name"
                        placeholder="Patient Name"
                        value={patient.name}
                        onChange={handlePatientChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    />
                    <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        value={patient.age}
                        onChange={handlePatientChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    />
                    <select
                        name="gender"
                        value={patient.gender}
                        onChange={handlePatientChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        name="contact"
                        placeholder="Contact Number"
                        value={patient.contact}
                        onChange={handlePatientChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    />
                    {/* Full-width Address Field */}
                    <textarea
                        name="address"
                        placeholder="Address"
                        value={patient.address || ""}
                        onChange={handlePatientChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full col-span-2"
                    ></textarea>
                </div>
            </div>

            <div className="grid grid-cols-[8fr_4fr] p-3 gap-3">

                {/* Left Side: Sales Details */}
                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300 overflow-x-auto">

                    {/* Medicines Table */}
                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center">No medicines added yet.</p>
                    ) : (
                        <div className="max-h-[400px] overflow-y-auto rounded-lg">
                            <div className="min-w-[800px]">
                                <table className="w-full border border-gray-200 text-sm table-fixed">
                                    <thead className="bg-gray-200 text-gray-700">
                                        <tr>
                                            <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                            <th className="py-2 px-3 text-left font-semibold whitespace-nowrap">Salt Name</th>
                                            <th className="py-2 px-3 text-center font-semibold">Quantity</th>
                                            <th className="py-2 px-3 text-center font-semibold">Selling Price</th>
                                            <th className="py-2 px-3 text-center font-semibold">Total</th>
                                            <th className="py-2 px-3 text-center font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedItems.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-100">
                                                <td className="py-2 px-3">{item.brandName}</td>
                                                <td className="py-2 px-3 text-gray-600 text-xs">{item.saltName}</td>
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
                                                        className="border border-gray-300 p-1 rounded-md w-16 text-center bg-white"
                                                    />
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        value={item.sellingPrice}
                                                        onChange={(e) =>
                                                            handleInputChange(
                                                                item.id,
                                                                "sellingPrice",
                                                                parseFloat(e.target.value) || 0
                                                            )
                                                        }
                                                        className="border border-gray-300 p-1 rounded-md w-24 text-center bg-white"
                                                    />
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    ₹{(item.quantity * item.sellingPrice).toFixed(2)}
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
                                <span>Net Total</span>
                                <span>₹{netTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                Complete Sale
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Side: Search Medicines */}
                <MedicineSearch
                    medicines={medicines}
                    onSelectMedicine={handleAddMedicine}
                />
            </div>
        </>
    );
};

export default AddSales;
