import React, { useState, useEffect } from "react";
import { Trash, Search } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";

const ReturnSales = () => {
    const [searchPatient, setSearchPatient] = useState("");
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const patients = [
        { id: 1, name: "Harry Potter", contact: "9876543210" },
        { id: 2, name: "Hermione Granger", contact: "9821456732" },
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
            productForm: "tablet",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
            packageQuantity: 10,
            batchNumber: 'BTC-97452',
            quantity: 20
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Amoxil 250",
            productForm: "capsule",
            availableQty: 30,
            purchasePrice: 18,
            sellingPrice: 28,
            packageQuantity: 50,
            batchNumber: 'BTC-12452',
            quantity: 210
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            productForm: "tablet",
            availableQty: 40,
            purchasePrice: 8,
            sellingPrice: 15,
            packageQuantity: 20,
            batchNumber: 'BTC-1287',
            quantity: 26
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

    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.sellingPrice * cur.quantity,
        0
    );

    const refundTotal = subTotal;

    return (
        <>
            {/* Patient Section (same as AddSales) TODO: implement this later for return */}
            {/* <div className="p-4 bg-gray-200 rounded-xl mb-4 border border-gray-200">
                <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                    <h2 className="text-lg font-semibold">Patient Details</h2>
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                        <input
                            type="text"
                            placeholder="Search Patient..."
                            value={searchPatient}
                            onChange={(e) => setSearchPatient(e.target.value)}
                            className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none w-full"
                        />
                        {searchPatient && filteredPatients.length > 0 && (
                            <ul className="absolute bg-gray-300 border rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                                {filteredPatients.map((p) => (
                                    <li
                                        key={p.id}
                                        onClick={() => {
                                            handleSelectPatient(p);
                                            setSearchPatient("");
                                        }}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {p.name} — {p.contact}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                {selectedPatient ? (
                    <div>
                        <p className="text-gray-700 font-semibold">{selectedPatient.name}</p>
                        <button
                            onClick={() => setSelectedPatient(null)}
                            className="text-sm text-red-600 hover:underline"
                        >
                            Remove Patient
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">No patient selected.</p>
                )}
            </div> */}

            <div className="grid grid-cols-[8fr_4fr] p-3 gap-3">
                {/* Left Side */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-300 overflow-x-auto">
                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center">No medicines added for return.</p>
                    ) : (
                        <div className="max-h-[400px] overflow-y-auto rounded-lg">
                            <table className="min-w-full border border-gray-200 text-sm table-fixed">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                        <th className="py-2 px-3 text-left font-semibold">Sale Name</th>
                                        <th className="py-2 px-3 text-center font-semibold">Quantity</th>
                                        <th className="py-2 px-3 text-center font-semibold">Price</th>
                                        <th className="py-2 px-3 text-center font-semibold">Refund</th>
                                        <th className="py-2 px-3 text-center font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="py-2 px-3">{item.brandName}</td>
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
                                                    className="border border-gray-300 p-1 rounded-md w-16 text-center bg-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">₹{item.sellingPrice}</td>
                                            <td className="py-2 px-3 text-center">
                                                ₹{(item.quantity * item.sellingPrice).toFixed(2)}
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

                    {selectedItems.length > 0 && (
                        <div className="mt-6 border-t pt-4">
                            <div className="flex justify-between text-lg font-semibold mb-4">
                                <span>Total Refund</span>
                                <span>₹{refundTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                                Process Return
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Side — Medicine Search */}
                <MedicineSearch medicines={medicines} onSelectMedicine={handleAddMedicine} />
            </div>
        </>
    );
};

export default ReturnSales;
