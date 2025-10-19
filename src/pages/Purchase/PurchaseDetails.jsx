import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExportPDF from "../../components/ExportPDF";

const PurchaseDetails = () => {
    const [purchaseData, setPurchaseData] = useState(null);
    const params = useParams()
    console.log(params.id)

    // Dummy Data Simulation
    useEffect(() => {

        // Simulate fetching detailed purchase data
        setPurchaseData({
            id: params.id,
            invoiceNumber: `INV-${"selectedPurchase.id.toString().padStart(4)"}`,
            supplier: "selectedPurchase.supplier",
            purchaseDate: "selectedPurchase.purchaseDate",
            entryDate: "2025-02-16",
            paymentMode: "Cash",
            addedBy: "Admin",
            remarks: "Regular stock refill",
            taxPercent: 5,
            items: [
                {
                    id: 1,
                    saltName: "Paracetamol",
                    brandName: "Calpol 500mg",
                    batchNumber: "BCH-001",
                    quantity: 50,
                    purchasePrice: 12,
                    sellingPrice: 18,
                    expiryDate: "2026-02-10",
                },

                {
                    id: 2,
                    saltName: "Cetrizine",
                    brandName: "Okacet",
                    batchNumber: "BCH-002",
                    quantity: 30,
                    purchasePrice: 8,
                    sellingPrice: 12,
                    expiryDate: "2026-01-15",
                },

                {
                    id: 3,
                    saltName: "Cetrizine",
                    brandName: "Okacet",
                    batchNumber: "BCH-002",
                    quantity: 30,
                    purchasePrice: 8,
                    sellingPrice: 12,
                    expiryDate: "2026-01-15",
                },

                {
                    id: 4,
                    saltName: "Cetrizine",
                    brandName: "Okacet",
                    batchNumber: "BCH-002",
                    quantity: 30,
                    purchasePrice: 8,
                    sellingPrice: 12,
                    expiryDate: "2026-01-15",
                },
                {
                    id: 5,
                    saltName: "Paracetamol",
                    brandName: "Calpol 500mg",
                    batchNumber: "BCH-001",
                    quantity: 50,
                    purchasePrice: 12,
                    sellingPrice: 18,
                    expiryDate: "2026-02-10",
                },
                {
                    id: 6,
                    saltName: "Paracetamol",
                    brandName: "Calpol 500mg",
                    batchNumber: "BCH-001",
                    quantity: 50,
                    purchasePrice: 12,
                    sellingPrice: 18,
                    expiryDate: "2026-02-10",
                },
                {
                    id: 7,
                    saltName: "Paracetamol",
                    brandName: "Calpol 500mg",
                    batchNumber: "BCH-001",
                    quantity: 50,
                    purchasePrice: 12,
                    sellingPrice: 18,
                    expiryDate: "2026-02-10",
                },
            ],
        });
    }, []);

    if (!purchaseData) {
        return (
            <div className="p-6 text-center text-gray-600">
                Loading purchase details...
            </div>
        );
    }

    // Summary Calculations
    const subTotal = purchaseData.items.reduce(
        (sum, item) => sum + item.purchasePrice * item.quantity,
        0
    );
    const taxAmount = (subTotal * purchaseData.taxPercent) / 100;
    const netTotal = subTotal + taxAmount;

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 gap-6">

                <h2 className="text-2xl font-semibold text-gray-800">
                    Purchase Details
                </h2>
               <ExportPDF />
            </div>

            {/* Purchase Info */}
            <div className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-6">
                <div>
                    <p><strong>Invoice Number:</strong> {purchaseData.invoiceNumber}</p>
                    <p><strong>Supplier:</strong> {purchaseData.supplier}</p>
                    <p><strong>Purchase Date:</strong> {purchaseData.purchaseDate}</p>
                    <p><strong>Entry Date:</strong> {purchaseData.entryDate}</p>
                </div>
                <div>
                    <p><strong>Payment Mode:</strong> {purchaseData.paymentMode}</p>
                    <p><strong>Added By:</strong> {purchaseData.addedBy}</p>
                    <p><strong>Remarks:</strong> {purchaseData.remarks}</p>
                    <p><strong>Tax:</strong> {purchaseData.taxPercent}%</p>
                </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-y-auto h-[50vh]">
                <table className="min-w-full border border-gray-300 text-sm table-fixed">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Salt Name</th>
                            <th className="p-3 text-left">Brand Name</th>
                            <th className="p-3 text-left">Batch No</th>
                            <th className="p-3 text-center">Quantity</th>
                            <th className="p-3 text-center">Purchase Price</th>
                            <th className="p-3 text-center">Selling Price</th>
                            <th className="p-3 text-left">Expiry Date</th>
                            <th className="p-3 text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseData.items.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50">
                                <td className="p-3">{item.saltName}</td>
                                <td className="p-3">{item.brandName}</td>
                                <td className="p-3">{item.batchNumber}</td>
                                <td className="p-3 text-center">{item.quantity}</td>
                                <td className="p-3 text-center">₹{item.purchasePrice}</td>
                                <td className="p-3 text-center">₹{item.sellingPrice}</td>
                                <td className="p-3">{item.expiryDate}</td>
                                <td className="p-3 text-center">
                                    ₹{item.purchasePrice * item.quantity}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Summary */}
            <div className="flex justify-end mt-6">
                <div className="w-full sm:w-1/2 lg:w-1/3 bg-white border border-gray-200 rounded-lg p-4 shadow">
                    <div className="flex justify-between mb-2">
                        <span>Subtotal:</span>
                        <span>₹{subTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Tax ({purchaseData.taxPercent}%):</span>
                        <span>₹{taxAmount.toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-lg">
                        <span>Net Total:</span>
                        <span>₹{netTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseDetails;
