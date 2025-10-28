import React, { useState, useEffect } from "react";
import { Trash, Search } from "lucide-react";
import useDebounceEffect from "../../utils/debounce";
import MedicineCard from "../../components/MedicineCard";
import showToast from "../../utils/Toast";
import SupplierDetails from "../../components/SupplierDetails";

const ReturnPurchase = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTax, setSelectedTax] = useState(0);
    const [medicines, setMedicines] = useState([]);

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
                    {
                        ...med,
                        quantity: 1,
                        batchNumber:
                            med.purchaseItems && med.purchaseItems[0]
                                ? med.purchaseItems[0].batchNumber
                                : "",
                        expiryDate:
                            med.purchaseItems && med.purchaseItems[0]
                                ? new Date(med.purchaseItems[0].expiryDate)
                                    .toISOString()
                                    .split("T")[0]
                                : "",
                        stockLeft:
                            med.purchaseItems && med.purchaseItems[0]
                                ? med.purchaseItems[0].remainingMedicines
                                : 0,
                        tax: parseFloat(selectedTax),
                        mrp: med.purchasePrice || 0,
                        scheme: 0,
                    },
                ];
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

    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + (cur.returnQty || 0) * (cur.purchasePrice || 0),
        0
    );
    const tax = subTotal * 0.05;
    const netTotal = subTotal + tax;

    useDebounceEffect(() => {
        fetchItems();
    }, [searchTerm]);

    const fetchItems = async () => {
        try {
            const response = await window.electronAPI.getMedicineOnTyping({
                search: searchTerm.trim(),
            });

            console.log("Medicine Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setMedicines([]);
                return;
            }

            const formatted = response.data.map((med) => ({
                id: med.id,
                saltName: med.saltName,
                brandName: med.brandName,
                batchNumber:
                    med.purchaseItems && med.purchaseItems[0]
                        ? med.purchaseItems[0].batchNumber
                        : "-",
                expiryDate:
                    med.purchaseItems && med.purchaseItems[0]
                        ? new Date(med.purchaseItems[0].expiryDate)
                            .toISOString()
                            .split("T")[0]
                        : "-",
                stockLeft:
                    med.purchaseItems && med.purchaseItems[0]
                        ? med.purchaseItems[0].remainingMedicines
                        : 0,
                purchasePrice:
                    med.purchaseItems && med.purchaseItems[0]
                        ? med.purchaseItems[0].purchasePrice
                        : 0,
            }));

            setMedicines(formatted);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    };

    return (
        <>
            {/* Supplier Section */}
            <SupplierDetails />

            <div className="grid grid-cols-[7.5fr_4.5fr] p-3 gap-3">

                {/* Left Panel - Return Details */}
                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300">
                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center">
                            No medicines selected for return.
                        </p>
                    ) : (
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">
                            <table className="min-w-full border border-gray-200 text-sm table-auto">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold whitespace-nowrap">
                                            Brand Name
                                        </th>
                                        <th className="py-2 px-3 text-left font-semibold">
                                            Salt Name
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Return Qty
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Reason
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">Price</th>
                                        <th className="py-2 px-3 text-center font-semibold">Total</th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="py-2 px-3 truncate">{item.brandName}</td>
                                            <td className="py-2 px-3 text-gray-600 text-xs truncate whitespace-nowrap">
                                                {item.saltName}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.returnQty || 1}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "returnQty",
                                                            parseInt(e.target.value) || 1
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-16 text-center bg-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <select
                                                    value={item.reason || ""}
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
                                            <td className="py-2 px-3 text-center">
                                                ₹{item.purchasePrice}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                ₹
                                                {(
                                                    (item.purchasePrice || 0) * (item.returnQty || 0)
                                                ).toFixed(2)}
                                            </td>
                                            <td className="py-2 px-3 text-center cursor-pointer">
                                                <div
                                                    className="flex items-center justify-center"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    <Trash
                                                        size={20}
                                                        className="text-red-600 hover:text-red-800"
                                                    />
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

                {/* Medicine List */}
                <div className="w-full bg-gray-50 shadow-md rounded-xl p-4 border border-gray-300 ">
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

                    <div className="overflow-auto h-[80vh]">
                        <div className="flex flex-wrap justify-start gap-4 ">
                            {medicines.map((med) => (
                                <MedicineCard
                                    key={med.id}
                                    med={med}
                                    handleAddMedicine={handleAddMedicine}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReturnPurchase;
