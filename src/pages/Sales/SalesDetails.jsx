import React, { useEffect, useState } from "react";
import { ArrowLeft, FileDown, RotateCcw } from "lucide-react";
import ExportPDF from "../../components/ExportPDF";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

const SalesDetails = ({ selectedSale, onBack }) => {
    const [saleData, setSaleData] = useState(null);

    useEffect(() => {
        if (selectedSale) {
            // Simulate fetching sale details
            setSaleData({
                id: selectedSale.id,
                invoiceNumber: selectedSale.invoiceNumber,
                customerName: selectedSale.customerName,
                saleDate: selectedSale.date,
                paymentMode: selectedSale.paymentMode,
                addedBy: "Cashier A",
                discountPercent: 10,
                taxPercent: 5,
                items: [
                    {
                        id: 1,
                        saltName: "Paracetamol",
                        brandName: "Calpol 500",
                        quantity: 2,
                        price: 50,
                    },
                    {
                        id: 2,
                        saltName: "Cetrizine",
                        brandName: "Okacet",
                        quantity: 1,
                        price: 25,
                    },
                ],
            });
        }
    }, [selectedSale]);

    if (!saleData)
        return (
            <div className="p-6 text-center text-gray-600">Loading sales details...</div>
        );

    const subTotal = saleData.items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );
    const discount = (subTotal * saleData.discountPercent) / 100;
    const taxedAmount = ((subTotal - discount) * saleData.taxPercent) / 100;
    const netTotal = subTotal - discount + taxedAmount;

    // PDF Export
    const handleExportPDF = () => {
        const doc = new jsPDF();
        doc.text("Sales Invoice", 14, 15);
        doc.text(`Invoice No: ${saleData.invoiceNumber}`, 14, 25);
        doc.text(`Customer: ${saleData.customerName}`, 14, 32);
        doc.text(`Date: ${saleData.saleDate}`, 14, 39);
        doc.autoTable({
            startY: 45,
            head: [["Salt Name", "Brand Name", "Qty", "Price", "Total"]],
            body: saleData.items.map((item) => [
                item.saltName,
                item.brandName,
                item.quantity,
                item.price,
                item.quantity * item.price,
            ]),
        });
        doc.text(`Net Total: ₹${netTotal.toFixed(2)}`, 14, doc.lastAutoTable.finalY + 10);
        doc.save(`${saleData.invoiceNumber}.pdf`);
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-semibold text-gray-800">Sale Details</h2>

                <div className="flex gap-2">

                    <button
                        onClick={onBack}
                        className=" cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>
                    <ExportPDF />

                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                        onClick={() => alert("Return Sale feature will be connected later")}
                    >
                        <RotateCcw size={18} />
                        Return Sale
                    </button>
                </div>
            </div>

            {/* Sale Info */}
            <div className="grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-6">
                <div>
                    <p><strong>Invoice No:</strong> {saleData.invoiceNumber}</p>
                    <p><strong>Customer:</strong> {saleData.customerName}</p>
                    <p><strong>Sale Date:</strong> {saleData.saleDate}</p>
                </div>
                <div>
                    <p><strong>Payment Mode:</strong> {saleData.paymentMode}</p>
                    <p><strong>Added By:</strong> {saleData.addedBy}</p>
                    <p><strong>Discount:</strong> {saleData.discountPercent}%</p>
                    <p><strong>Tax:</strong> {saleData.taxPercent}%</p>
                </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Salt Name</th>
                            <th className="p-3 text-left">Brand Name</th>
                            <th className="p-3 text-right">Qty</th>
                            <th className="p-3 text-right">Price</th>
                            <th className="p-3 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saleData.items.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50">
                                <td className="p-3">{item.saltName}</td>
                                <td className="p-3">{item.brandName}</td>
                                <td className="p-3 text-right">{item.quantity}</td>
                                <td className="p-3 text-right">₹{item.price}</td>
                                <td className="p-3 text-right">₹{item.quantity * item.price}</td>
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
                        <span>Discount ({saleData.discountPercent}%):</span>
                        <span>-₹{discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Tax ({saleData.taxPercent}%):</span>
                        <span>₹{taxedAmount.toFixed(2)}</span>
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

export default SalesDetails;
