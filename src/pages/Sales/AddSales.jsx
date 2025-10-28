import React, { useState, useEffect, useMemo } from "react";
import { Trash } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";
import { Search } from "lucide-react";
import showToast from "../../utils/Toast";
import PatientDetails from "../../components/PatientDetails";

const AddSales = () => {

    const [selectedPatient, setSelectedPatient] = useState(null);
    const [deliveryCharge, setDeliveryCharge] = useState(0)
    const [discount, setDiscount] = useState(0);
    const [discountType, setDiscountType] = useState("percentage");

    const [selectedItems, setSelectedItems] = useState([]);

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

    const handleBatchChange = (id, selectedBatchNumber) => {
        setSelectedItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    const selectedBatch = item.purchaseItems.find(
                        (b) => b.batchNumber === selectedBatchNumber
                    );
                    if (!selectedBatch) return item;

                    return {
                        ...item,
                        batchNumber: selectedBatch.batchNumber,
                        expiryDate: selectedBatch.expiryDate,
                        sellingPrice: selectedBatch.sellingPricePerMedicine || selectedBatch.sellingPrice,
                        purchasePrice: selectedBatch.purchasePrice,
                        remainingMedicines: selectedBatch.remainingMedicines,
                        scheme: selectedBatch.scheme,
                        selectedBatchId: selectedBatch.id, // 👈 use this in payload
                    };
                }
                return item;
            })
        );
    };


    const handleAddSales = async () => {

        if (selectedItems.length === 0) {
            showToast("Please add at least one medicine.", "oklch(57.7% 0.245 27.325)");
            return;
        }

        for (const item of selectedItems) {
            const selectedBatch = item.purchaseItems?.find(
                (batch) => batch.batchNumber === item.batchNumber
            );
            const available = selectedBatch?.remainingMedicines ?? 0;

            if (!selectedBatch) {
                showToast(`Batch not selected for ${item.brandName}.`, "oklch(57.7% 0.245 27.325)");
                return;
            }
            if (available <= 0) {
                showToast(
                    `${item.brandName} (${item.batchNumber}) is out of stock.`,
                    "oklch(57.7% 0.245 27.325)"
                );
                return;
            }

            if (item.quantity > available) {
                showToast(
                    `Only ${available} left in stock for ${item.brandName} (${item.batchNumber}).`,
                    "oklch(57.7% 0.245 27.325)"
                );
                return;
            }
        }


        // Prepare items array
        const items = selectedItems.map((item) => ({
            purchaseItemsId: item.selectedBatchId || item.purchaseItems?.[0]?.id || null,
            itemId: item.id,
            batchNumber: item.batchNumber,
            totalAmount: item.sellingPrice * item.quantity,
            quantity: item.quantity,
            sellingPrice: item.sellingPrice,
        }));

        // Prepare final payload
        const patientData = selectedPatient ? {
            patientId: selectedPatient.id || null,
            patientName: selectedPatient.name || null,
            patientContact: selectedPatient.contact || null,
            patientAddress: selectedPatient.address || null,
        } : {};

        const saleData = {
            items,
            subTotal,
            netTotal,
            discount,
            discountType,
            deliveryCharge,
            patientData,
        };

        console.log("Sale Data:", saleData);

        try {


            // Optionally reset after success
            // setSelectedItems([]);
            // setSelectedPatient(null);
            // setDeliveryCharge(0);
            // setDiscount(0);
            // setDiscountType("percentage");
            const response = await window.electronAPI.addSales(saleData)
            console.log(response)
            if (response.status === "success") {

                return showToast(' Sales recorded successfully!', 'oklch(62.7% 0.194 149.214)');
            } else {
                showToast(` ${response.message || "Failed to record purchase"}`, "oklch(57.7% 0.245 27.325)");
            }

        } catch (error) {
            console.error("Sale submission failed:", error);
            showToast("Failed to complete sale. Please try again.", "error");
        }
    };


    return (
        <>
            {/* Patient Details */}
            <PatientDetails />


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
                                            <th className="py-2 px-3 text-center font-semibold whitespace-nowrap">Batch / Expiry</th>
                                            <th className="py-2 px-3 text-center font-semibold">Quantity</th>
                                            <th className="py-2 px-3 text-center font-semibold whitespace-nowrap">Selling Price (₹)</th>
                                            <th className="py-2 px-3 text-center font-semibold">Total (₹)</th>
                                            <th className="py-2 px-3 text-center font-semibold">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {selectedItems.map((item) => (
                                            <tr key={item.id} className="hover:bg-gray-100 border-b border-gray-200">
                                                {/* Brand Name */}
                                                <td className="py-2 px-3 text-gray-800 font-medium">{item.brandName}</td>

                                                {/* Salt Name */}
                                                <td className="py-2 px-3 truncate w-32">
                                                    <div className="flex flex-col justify-center">
                                                        <span>{item.saltName}</span>
                                                        <span className="text-xs text-gray-500">({item.packageQuantity})</span>
                                                    </div>
                                                </td>

                                                {/* Batch + Expiry */}
                                                <td className="py-2 px-3 text-center">
                                                    <div className="flex flex-col items-center">
                                                        <select
                                                            value={item.batchNumber}
                                                            onChange={(e) => handleBatchChange(item.id, e.target.value)}
                                                            className="border border-gray-300 p-1 rounded-md w-32 bg-white text-sm"
                                                        >
                                                            {item.purchaseItems?.map((batch) => (
                                                                <option key={batch.id} value={batch.batchNumber}>
                                                                    {batch.batchNumber} (₹{batch.sellingPricePerMedicine})
                                                                </option>
                                                            ))}
                                                        </select>

                                                        {item.expiryDate && (
                                                            <span className="text-xs text-gray-500 mt-1">
                                                                Exp: {new Date(item.expiryDate).toLocaleDateString()}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>

                                                {/* Quantity */}
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

                                                {/* Selling Price */}
                                                <td className="py-2 px-3 text-center">
                                                    <input
                                                        type="number"
                                                        value={item.sellingPrice}
                                                        onChange={(e) =>
                                                            handleInputChange(item.id, "sellingPrice", parseFloat(e.target.value) || 0)
                                                        }
                                                        className="border border-gray-300 p-1 rounded-md w-24 text-center bg-white"
                                                    />
                                                </td>

                                                {/* Total */}
                                                <td className="py-2 px-3 text-center font-semibold text-gray-800">
                                                    ₹{(item.quantity * item.sellingPrice).toFixed(2)}
                                                </td>

                                                {/* Actions */}
                                                <td className="py-2 px-3 text-center">
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <Trash size={18} />
                                                    </button>
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
                    handleAddSales={handleAddSales}
                />
            </div>
        </>
    );
};

export default AddSales;
