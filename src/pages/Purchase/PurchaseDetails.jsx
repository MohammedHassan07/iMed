import React from "react";
import ExportPDF from "../../components/ExportPDF";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";

const PurchaseDetails = () => {
    const navigate = useNavigate();
    const { state: purchase } = useLocation();

    if (!purchase) {
        return (
            <div className="p-6 text-center text-gray-600">
                No purchase details found.
            </div>
        );
    }

 
    const subTotal = purchase.purchasedItems?.reduce(
        (sum, item) => sum + item.purchasePrice * item.quantity,
        0
    );

    const totalTax = purchase.purchasedItems?.reduce(
            (sum, item) => sum + (item.purchasePrice * item.quantity * item.tax) / 100,
            0
        ) || 0;

    const netTotal = subTotal + totalTax;

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 gap-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Purchase Details
                </h2>

                <div className="flex items-center justify-center gap-5">
                    <BackButton url={"/purchase/"} />
                    <ExportPDF />
                </div>
            </div>

            {/* Purchase Info */}
            <div className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-6">
                <div>
                    <p><strong>Purchase ID:</strong> #{purchase.id}</p>
                    <p><strong>Supplier ID:</strong> {purchase.supplierId}</p>
                    <p>
                        <strong>Purchase Date:</strong>{" "}
                        {new Date(purchase.purchaseDate).toLocaleDateString("en-IN")}
                    </p>
                    <p><strong>Notes:</strong> {purchase.notes || "—"}</p>
                </div>
                <div>
                    <p><strong>Discount:</strong> {purchase.discount} ({purchase.discountType})</p>
                    <p><strong>Tax:</strong> {purchase.tax}%</p>
                    <p><strong>Net Total:</strong> ₹{purchase.netTotal.toFixed(2)}</p>
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
                            <th className="p-3 text-center">Scheme</th>
                            <th className="p-3 text-center">Purchase Price</th>
                            <th className="p-3 text-center">Selling Price</th>
                            <th className="p-3 text-center">Tax (%)</th>
                            <th className="p-3 text-center">Total</th>
                            <th className="p-3 text-center">Profit</th>
                            <th className="p-3 text-left">Expiry Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchase.purchasedItems?.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50">
                                <td className="p-3">{item.medicine?.saltName || "—"}</td>
                                <td className="p-3">{item.medicine?.brandName || "—"}</td>
                                <td className="p-3">{item.batchNumber}</td>
                                <td className="p-3 text-center">{item.quantity}</td>
                                <td className="p-3 text-center">{item.scheme || 0}</td>
                                <td className="p-3 text-center">₹{item.purchasePrice.toFixed(2)}</td>
                                <td className="p-3 text-center">₹{item.sellingPrice.toFixed(2)}</td>
                                <td className="p-3 text-center">{item.tax}%</td>
                                <td className="p-3 text-center">₹{item.total.toFixed(2)}</td>
                                <td className="p-3 text-center">₹{item.profit.toFixed(2)}</td>
                                <td className="p-3">
                                    {new Date(item.expiryDate).toLocaleDateString("en-IN")}
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
                        <span>Total Tax:</span>
                        <span>₹{totalTax.toFixed(2)}</span>
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
