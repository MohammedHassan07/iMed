import React, { useState, useEffect, useMemo } from "react";
import { Trash } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";
import { Search } from "lucide-react";
import showToast from "../../utils/Toast";

const AddSales = () => {

    const [searchPatient, setSearchPatient] = useState("");
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [deliveryCharge, setDeliveryCharge] = useState(0)
    const [discount, setDiscount] = useState(0);
    const [discountType, setDiscountType] = useState("percentage");

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

    const handlePatientChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    const handleAddMedicine = (med) => {
        setSelectedItems((prev) => {
            // Extract the purchase details (first batch)
            const purchase = med.purchaseItems?.[0] || {};

            // Check if the same medicine + batch already exists
            const exists = prev.find(
                (i) => i.id === med.id && i.batchNumber === purchase.batchNumber
            );

            if (exists) {
                return prev.map((item) =>
                    item.id === med.id && item.batchNumber === purchase.batchNumber
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [
                    ...prev,
                    {
                        ...med,
                        quantity: 1,
                        batchNumber: purchase.batchNumber || "N/A",
                        expiryDate: purchase.expiryDate || "N/A",
                        sellingPrice: purchase.sellingPricePerMedicine || 0,
                        purchasePrice: purchase.purchasePrice || 0,
                        remainingMedicines: purchase.remainingMedicines || 0,
                        scheme: purchase.scheme || "",
                    },
                ];
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
    const { subTotal, discountAmount, netTotal } = useMemo(() => {
        const subTotal = selectedItems.reduce(
            (acc, cur) => acc + cur.sellingPrice * cur.quantity,
            0
        );
        const discountValue = Number(discount) || 0;
        const discountAmount =
            discountType === "percentage"
                ? (subTotal * discountValue) / 100
                : discountValue;

        const netTotal = subTotal + Number(deliveryCharge) - discountAmount;

        return { subTotal, discountAmount, netTotal };
    }, [selectedItems, discount, discountType, deliveryCharge]);


    const handleAddSales = async () => {


        if (selectedItems.length === 0) {
            showToast("Please add at least one medicine.", "error");
            return;
        }

        // Prepare items array
        const items = selectedItems.map((item) => ({
            purchaseItemsId: item.purchaseItems?.[0]?.id || null, // from your medicine structure
            itemId: item.id,
            batchNumber: item.batchNumber,
            totalAmount: item.sellingPrice * item.quantity,
            quantity: item.quantity,
            sellingPrice: item.sellingPrice,
        }));

        // Prepare final payload
        const saleData = {
            items,
            subTotal,
            netTotal,
            discount,
            discountType,
            deliveryCharge,
            patientDetails: {
                id: selectedPatient.id,
                name: selectedPatient.name,
                contact: selectedPatient.contact,
                address: selectedPatient.address,
            },
        };

        console.log("Sale Data:", saleData);

        try {
            // const response = await axios.post("http://localhost:5000/api/sales", saleData);

            // showToast("Sale completed successfully!", "success");
            // console.log("Server Response:", response.data);

            // Optionally reset after success
            // setSelectedItems([]);
            // setSelectedPatient(null);
            // setDeliveryCharge(0);
            // setDiscount(0);
            // setDiscountType("percentage");

        } catch (error) {
            console.error("Sale submission failed:", error);
            showToast("Failed to complete sale. Please try again.", "error");
        }
    };


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


            <div className="grid grid-cols-[7.5fr_4.5fr] p-3 gap-3">

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
                                                <td className="py-2 px-3 text-center">
                                                    <input
                                                        type="number"

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
                                <div className="flex flex-col">
                                    <label htmlFor="">Delivery charge</label>
                                    <input
                                        type="number"
                                        value={deliveryCharge}
                                        onChange={(e) => setDeliveryCharge(e.target.value)}
                                        className="outline-0 border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950"
                                    />
                                </div>
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
                            <div className="flex justify-between text-lg font-semibold mb-4">
                                <span>Net Total</span>
                                <span>₹{netTotal.toFixed(2)}</span>
                            </div>
                            <button onClick={handleAddSales} className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                Complete Sale
                            </button>
                        </div>
                    )}
                </div>

                {/* Search Medicines */}
                <MedicineSearch

                    onSelectMedicine={handleAddMedicine}
                />
            </div>
        </>
    );
};

export default AddSales;
