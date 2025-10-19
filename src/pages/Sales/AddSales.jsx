import React, { useState, useEffect } from "react";
import { Trash } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";
import { Search } from "lucide-react";

const AddSales = () => {

    const [searchPatient, setSearchPatient] = useState("");
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const patients = [
        { id: 1, name: "Harry Potter", age: 17, gender: "Male", contact: "9876543210", address: "Godric's Hollow" },
        { id: 2, name: "Hermione Granger", age: 17, gender: "Female", contact: "9821456732", address: "London" },
        { id: 3, name: "Ron Weasley", age: 17, gender: "Male", contact: "9812345678", address: "The Burrow" },
        { id: 4, name: "Luna Lovegood", age: 16, gender: "Female", contact: "9765432198", address: "Ottery St Catchpole" },
    ];


    useEffect(() => {
        const results = patients.filter((p) =>
            p.name.toLowerCase().includes(searchPatient.toLowerCase())
        );
        setFilteredPatients(results);
    }, [searchPatient]);

    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient);
    };


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
            <div className="p-4 bg-gray-200 rounded-xl mb-4 border border-gray-200">
                <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                    <div>
                        <h2 className="text-lg font-semibold">Patient Details</h2>
                    </div>

                    {/* Patient Search Input */}
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                        <input
                            type="text"
                            placeholder="Search Patient..."
                            value={searchPatient}
                            onChange={(e) => setSearchPatient(e.target.value)}
                            onBlur={() => setTimeout(() => setSearchPatient(""), 150)}
                            className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                        />

                        {/* Suggestions dropdown */}
                        {searchPatient && filteredPatients.length > 0 && (
                            <ul className="absolute bg-gray-300 border border-gray-300 rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                                {filteredPatients.map((patient) => (
                                    <li
                                        key={patient.id}
                                        onClick={() => {
                                            handleSelectPatient(patient);
                                            setSearchPatient(""); // 👈 Close dropdown after selecting
                                        }}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {patient.name} — {patient.contact}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Show selected patient */}
                {selectedPatient ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Name:</span>
                            <span className="text-gray-600">{selectedPatient.name}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Age:</span>
                            <span className="text-gray-600">{selectedPatient.age}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Gender:</span>
                            <span className="text-gray-600">{selectedPatient.gender}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Contact:</span>
                            <span className="text-gray-600">{selectedPatient.contact}</span>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <span className="font-semibold text-gray-700">Address:</span>
                            <span className="text-gray-600">{selectedPatient.address}</span>
                        </div>

                        <div className="col-span-2 text-right">
                            <button
                                onClick={() => setSelectedPatient(null)}
                                className="text-sm text-red-600 hover:underline"
                            >
                                Remove Patient
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">No patient selected.</p>
                )}
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
                                <table className="min-w-full border border-gray-200 text-sm table-fixed">
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
