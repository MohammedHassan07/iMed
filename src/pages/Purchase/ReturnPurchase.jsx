import React, { useState } from "react";
import { Trash, Search } from "lucide-react";
import useDebounceEffect from "../../utils/debounce";
import MedicineCard from "../../components/MedicineCard";
import showToast from "../../utils/Toast";
import SupplierDetails from "../../components/SupplierDetails";

const ReturnPurchase = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [returnDate, setReturnDate] = useState('')
    const [notes, setNotes] = useState('')

    const handleAddMedicine = (med) => {
        console.log(med)
        setSelectedItems((prev) => {
            const exists = prev.find((i) => i.id === med.id);
            if (exists) return prev; // avoid duplicates

            return [
                ...prev,
                {
                    ...med,
                    returnQty: 1,
                    selectedBatch: "",
                    reason: "",
                },
            ];
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
        setSelectedItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subTotal = selectedItems.reduce((acc, cur) => {
        const batch = cur.purchaseItems?.find(
            (b) => b.batchNumber === cur.selectedBatch
        );
        return acc + (cur.returnQty || 0) * (batch?.purchasePrice || 0);
    }, 0);

    const netTotal = subTotal;

    const fetchItems = async () => {
        try {
            const response = await window.electronAPI.getMedicineOnTyping({
                search: searchTerm.trim(),
            });
            console.log(response)
            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setMedicines([]);
                return;
            }

            const formatted = response.data.map((med) => ({
                ...med,
                purchaseItems: med.purchaseItems || [],
            }));

            setMedicines(formatted);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    };

    useDebounceEffect(() => {
        fetchItems();
    }, [searchTerm]);

    const handleSubmitReturn = async () => {

        if (!selectedSupplier || !returnDate) {
            return showToast("Please select supplier.", "oklch(57.7% 0.245 27.325)");

        }
        if (!returnDate) {
            return showToast("Please select return date.", "oklch(57.7% 0.245 27.325)");
        }
        if (selectedItems.length === 0) {
            return showToast("No medicines selected for return.", "oklch(57.7% 0.245 27.325)");
        }

        const invalidItem = selectedItems.find(
            (i) => !i.selectedBatch || !i.reason || i.returnQty <= 0
        );
        if (invalidItem)
            return showToast("Please select batch, reason, and valid return qty for all items.", "oklch(57.7% 0.245 27.325)");

        const medicines = selectedItems.map((item) => {
            const batch = item.purchaseItems.find(
                (b) => b.batchNumber === item.selectedBatch
            );
            return {
                purchaseId: batch?.purchaseId,
                medicineId: item.id,
                batchNumber: item.selectedBatch,
                returnQty: Number(item.returnQty),
                reason: item.reason,
                purchasePrice: batch?.purchasePrice || 0,
                sellingPrice: batch?.sellingPrice || 0,
                sellingPricePerMedicine: batch?.sellingPricePerMedicine || 0,
                expiryDate: batch?.expiryDate,
                packageQuantity: item.packageQuantity,
                totalMedicines: batch?.totalMedicines || 0,
                remainingMedicines: batch?.remainingMedicines || 0,
                purchaseDate: batch.purchaseDate,
            };
        });

        console.log(medicines)
        const payload = {
            parentPurchaseId: medicines[0].purchaseId,
            supplierId: selectedSupplier?.id || null,
            returnDate: returnDate,
            notes: notes || '',
            discountType: "percentage",
            discount: 0,
            tax: 0,
            subTotal,
            netTotal,
            medicines,

        };

        try {
            console.log("Payload to backend:", payload);

            const response = await window.electronAPI.returnPurchase(payload);
            console.log(response)
            if (response.status === "success") {
                showToast("Return submitted successfully!", "oklch(62.7% 0.194 149.214)");
                // setSelectedItems([]);
            } else {
                showToast(response.message || "Failed to record return.", "oklch(57.7% 0.245 27.325)");
            }
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    };


    return (
        <>
            <SupplierDetails
                selectedSupplier={selectedSupplier}
                setSelectedSupplier={setSelectedSupplier}
            />

            <div className="grid grid-cols-[7.5fr_4.5fr] p-3 gap-3">
                {/* Left Panel */}
                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300">
                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center">No medicines selected for return.</p>
                    ) : (
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">
                            <div className="flex items-center justify-start space-x-4">
                                <div className="flex flex-col">
                                    <label htmlFor="">Return date</label>
                                    <input
                                        className="border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950 transition-all duration-100"
                                        type="date"
                                        placeholder="Purchase Date"
                                        onChange={(e) => { setReturnDate(e.target.value) }}
                                        value={returnDate}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Notes</label>
                                    <input
                                        type="text"
                                        className="outline-0 border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950"
                                        rows="2"
                                        placeholder="Enter Notes"
                                        onChange={(e) => { setNotes(e.target.value) }}
                                        value={notes}
                                    />
                                </div>
                            </div>
                            <table className="min-w-full border border-gray-200 text-sm table-auto mt-5">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                        <th className="py-2 px-3 text-left font-semibold">Salt Name</th>
                                        <th className="py-2 px-3 text-center font-semibold">Batch</th>
                                        <th className="py-2 px-3 text-center font-semibold">Expiry</th>
                                        <th className="py-2 px-3 text-center font-semibold">Stock</th>
                                        <th className="py-2 px-3 text-center font-semibold">Return Qty</th>
                                        <th className="py-2 px-3 text-center font-semibold">Reason</th>
                                        <th className="py-2 px-3 text-center font-semibold">Price</th>
                                        <th className="py-2 px-3 text-center font-semibold">Total</th>
                                        <th className="py-2 px-3 text-center font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedItems.map((item) => {
                                        const batch = item.purchaseItems.find(
                                            (b) => b.batchNumber === item.selectedBatch
                                        );
                                        return (
                                            <tr key={item.id} className="hover:bg-gray-100">
                                                <td className="py-2 px-3">{item.brandName}</td>
                                                <td className="py-2 px-3">{item.saltName}</td>
                                                <td className="py-2 px-3 text-center">
                                                    <select
                                                        value={item.selectedBatch || ""}
                                                        onChange={(e) =>
                                                            handleInputChange(item.id, "selectedBatch", e.target.value)
                                                        }
                                                        className="border border-gray-300 p-1 rounded-md bg-white text-sm"
                                                    >
                                                        <option value="">Select</option>
                                                        {item.purchaseItems.map((b) => (
                                                            <option
                                                                key={b.batchNumber}
                                                                value={b.batchNumber}
                                                            >
                                                                {b.batchNumber}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    {batch
                                                        ? new Date(batch.expiryDate)
                                                            .toISOString()
                                                            .split("T")[0]
                                                        : "-"}
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    {batch?.remainingMedicines || 0}
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        max={batch?.remainingMedicines || 1}
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
                                                    ₹{batch?.purchasePrice?.toFixed(2) || "0.00"}
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    ₹{(
                                                        (batch?.purchasePrice || 0) *
                                                        (item.returnQty || 0)
                                                    ).toFixed(2)}
                                                </td>
                                                <td className="py-2 px-3 text-center cursor-pointer">
                                                    <Trash
                                                        size={20}
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="text-red-600 hover:text-red-800 cursor-pointer"
                                                    />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Billing */}
                    {selectedItems.length > 0 && (
                        <div className="mt-6 border-t pt-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">Subtotal:</span>
                                <span>₹{subTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-semibold border-t pt-2">
                                <span>Total Return Amount:</span>
                                <span>₹{netTotal.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleSubmitReturn}
                                className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                            >
                                Submit Return
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Panel - Medicine Search */}
                <div className="w-full bg-gray-50 shadow-md rounded-xl p-4 border border-gray-300">
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
                        <div className="flex flex-wrap justify-start gap-4">
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
