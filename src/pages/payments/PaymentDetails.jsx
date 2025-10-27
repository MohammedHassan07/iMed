import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import ExportPDF from "../../components/ExportPDF";
import { useLocation } from "react-router-dom";
import showToast from "../../utils/Toast";

const PaymentDetails = () => {
    const { state } = useLocation();
    const [payment, setPayment] = useState(state || null);
    const [loading, setLoading] = useState(!state);

    useEffect(() => {
        if (!state?.id) return;

        const fetchPayment = async () => {
            try {
                setLoading(true);

                const response = await window.electronAPI.getPaymentDetails({ id: state.id, paymentType: state.paymentType })
                console.log(response.data)

                if (response.status === 'failed') throw new Error("Failed to load details");

                setPayment(response.data);
            } catch (err) {
                showToast("Error fetching payment details", "error");
                console.log(err)
            } finally {
                setLoading(false);
            }
        };

        fetchPayment();
    }, [state]);

    if (loading)
        return <div className="text-center mt-10 text-gray-500">Loading...</div>;

    const { paymentType, paymentNumber, createdAt, amount, sales, purchases } = payment;
    const isSale = paymentType === "SALE";
    const data = isSale ? sales?.[0] : purchases?.[0];

    if (!data)
        return (
            <>
                <div className="flex justify-between items-center mb-6 gap-6 p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Payment Details
                    </h2>
                    <div className="flex items-center justify-center gap-5">
                        <BackButton url={"/payments/"} />
                        <ExportPDF />
                    </div>
                </div>
                <div className="text-center mt-10 text-gray-500">
                    No {isSale ? "Sales" : "Purchase"} record found.
                </div >
            </>
        );

    const subTotal = data.subTotal || 0;
    const totalTax = data.tax || 0;
    const netTotal = data.netTotal || 0;

    // if (!payment)
    //     return (
    //         <>
    //             <div className="flex justify-between items-center mb-6 gap-6">
    //                 <h2 className="text-2xl font-semibold text-gray-800">
    //                     Payment Details
    //                 </h2>
    //                 <div className="flex items-center justify-center gap-5">
    //                     <BackButton url={"/payments/"} />
    //                     <ExportPDF />
    //                 </div>
    //             </div>
    //             <div className="text-center mt-10 text-gray-500">No payment found.</div>;
    //         </>
    //     )

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 gap-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Payment Details
                </h2>
                <div className="flex items-center justify-center gap-5">
                    <BackButton url={"/payments/"} />
                    <ExportPDF />
                </div>
            </div>

            {/* Payment Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Payment Info Card */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg p-5">
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">Payment Info</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>Payment ID:</strong> #{payment.id}</p>
                            <p><strong>Payment Number:</strong> {paymentNumber}</p>
                            <p><strong>Date:</strong> {new Date(createdAt).toLocaleDateString("en-IN")}</p>
                        </div>
                        <div>
                            <p><strong>Amount:</strong> ₹{amount.toFixed(2)}</p>
                            <p><strong>Type:</strong> <span className={`px-3 py-1 rounded-full text-sm ${isSale ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>{paymentType}</span></p>
                        </div>
                    </div>
                </div>

                {/* Related Info Card */}
                <div className="bg-white shadow-md border border-gray-200 rounded-lg p-5">
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                        {isSale ? "Sales Details" : "Purchase Details"}
                    </h2>

                    {isSale ? (
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p><strong>Sales ID:</strong> #{data.id}</p>
                                <p><strong>Sales Number:</strong> {data.salesNumber}</p>
                                <p><strong>Sales Type:</strong> {data.salesType}</p>
                            </div>
                            <div>
                                <p><strong>Discount:</strong> {data.discount} ({data.discountType})</p>
                                <p><strong>Delivery Charge:</strong> ₹{data.deliveryCharge}</p>
                                <p><strong>Net Total:</strong> ₹{data.netTotal.toFixed(2)}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p><strong>Purchase ID:</strong> #{data.id}</p>
                                <p><strong>Supplier ID:</strong> {data.supplierId}</p>
                                <p><strong>Purchase Date:</strong> {new Date(data.purchaseDate).toLocaleDateString("en-IN")}</p>
                            </div>
                            <div>
                                <p><strong>Discount:</strong> {data.discount} ({data.discountType})</p>
                                <p><strong>Tax:</strong> {data.tax}%</p>
                                <p><strong>Net Total:</strong> ₹{data.netTotal.toFixed(2)}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-y-auto h-[50vh]">
                <table className="min-w-full border border-gray-300 text-sm table-fixed">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Salt Name</th>
                            <th className="p-3 text-left">Brand Name</th>
                            <th className="p-3 text-left">Manufacturer</th>
                            <th className="p-3 text-left">Batch No</th>
                            <th className="p-3 text-center">Quantity</th>
                            <th className="p-3 text-center">
                                {isSale ? "Selling Price" : "Purchase Price"}
                            </th>
                            <th className="p-3 text-center">Total</th>
                            {isSale ? (
                                <th className="p-3 text-center">Discount</th>
                            ) : (
                                <>
                                    <th className="p-3 text-center">Tax</th>
                                    <th className="p-3 text-center">Profit</th>
                                </>
                            )}
                            <th className="p-3 text-center">Expiry</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(isSale ? data.items : data.purchasedItems)?.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50">
                                <td className="p-3">
                                    {isSale ? item.items?.saltName : item.medicine?.saltName || "—"}
                                </td>
                                <td className="p-3">
                                    {isSale ? item.items?.brandName : item.medicine?.brandName || "—"}
                                </td>
                                <td className="p-3">
                                    {isSale ? item.items?.manufacturer : item.medicine?.manufacturer || "—"}
                                </td>
                                <td className="p-3">{item.batchNumber}</td>
                                <td className="p-3 text-center">{item.quantity}</td>
                                <td className="p-3 text-center">
                                    ₹{(isSale ? item.sellingPrice : item.purchasePrice)?.toFixed(2)}
                                </td>
                                <td className="p-3 text-center">
                                    ₹{(isSale ? item.totalAmount : item.total)?.toFixed(2)}
                                </td>
                                {isSale ? (
                                    <td className="p-3 text-center">{item.discount || 0}%</td>
                                ) : (
                                    <>
                                        <td className="p-3 text-center">{item.tax || 0}%</td>
                                        <td className="p-3 text-center">
                                            ₹{(item.profit || 0).toFixed(2)}
                                        </td>
                                    </>
                                )}
                                <td className="p-3 text-center">
                                    {item.expiryDate
                                        ? new Date(item.expiryDate).toLocaleDateString("en-IN")
                                        : "—"}
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

export default PaymentDetails;
