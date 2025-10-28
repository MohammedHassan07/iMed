import React, { useState, useEffect, useMemo } from "react";
import { Trash } from "lucide-react";
import MedicineSearch from "../../components/MedicineSearch";
import showToast from "../../utils/Toast";
import PatientDetails from "../../components/PatientDetails";

const AddSales = () => {

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
    const { subTotal, netTotal } = useMemo(() => {
        const subTotal = selectedItems.reduce(
            (acc, cur) => acc + cur.sellingPrice * cur.quantity,
            0
        );

        const netTotal = subTotal + Number(deliveryCharge);

        return { subTotal, netTotal };
    }, [selectedItems]);


    const handleAddSales = async () => {

        if (selectedItems.length === 0) {
            showToast("Please add at least one medicine.", "error");
            return;
        }

        // Prepare items array
        const items = selectedItems.map((item) => ({
            purchaseItemsId: item.purchaseItems?.[0]?.id || null,
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
            discount: discount || 0,
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
            const response = await window.electronAPI.returnSales(saleData)
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
                                            <th className="py-2 px-3 text-left font-semibold whitespace-nowrap">Selling Price</th>
                                            <th className="py-2 px-3 text-center font-semibold">Quantity</th>
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
                                                <td className="py-2 px-3">
                                                    ₹{item.sellingPrice.toFixed(2)}
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

                            <div className="flex justify-between text-lg font-semibold mb-4">
                                <span>Total Refund</span>
                                <span>₹{netTotal.toFixed(2)}</span>
                            </div>
                            <button onClick={handleAddSales} className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                Complete Refund
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
