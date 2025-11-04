import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import showToast from "../../utils/Toast";
import Pagination from "../../components/Pagination";
import ViewDetailsButton from "../../components/ViewDetailsButton";
import { useNavigate } from "react-router-dom";

const badgeColors = {
  SALE: "bg-green-100 text-green-800",
  PURCHASE: "bg-blue-100 text-blue-800",
  REFUND: "bg-yellow-100 text-yellow-800",
};

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const navigate = useNavigate()
  const itemsPerPage = 10;

  useEffect(() => {
    fetchPayments();
  }, [currentPage]);

  const fetchPayments = async () => {
    try {
      const response = await window.electronAPI.getAllPayments({ page: currentPage, limit: itemsPerPage, });
      if (response.status === "success") {
        setPayments(response.data);
        setTotalPages(response.totalPages || 1);
      } else {
        showToast("Failed to load payments", "error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      showToast("Error fetching payments", "error");
    }
  };

  //  debounce(fetchItems, search, currentPage)

  const handleViewDetails = (payment) => {

    navigate('/payment/payment-details/', { state: payment })
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedPayment(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">All Payments</h2>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-300 bg-white shadow-sm">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Payment Number</th>
              <th className="p-3 text-left">Payment Type</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pmt) => (
              <tr key={pmt.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{pmt.paymentNumber}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-semibold ${badgeColors[pmt.paymentType] || "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {pmt.paymentType}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(pmt.createdAt).toLocaleString()}
                </td>
                <td className="p-3 font-semibold text-gray-900">
                  ₹{pmt.amount?.toFixed(2) || "—"}
                </td>
                <td className="p-3 text-center">
                  <ViewDetailsButton
                    hadnleDetailClick={handleViewDetails}
                    data={pmt}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage} />

      {/* Payment Details Modal */}
      {showDetails && selectedPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-[600px] max-h-[90vh] rounded-xl shadow-xl overflow-y-auto p-5">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="text-lg font-semibold">
                Payment #{selectedPayment.paymentNumber}
              </h3>
              <button
                onClick={closeDetails}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <p>
                <strong>Type:</strong>{" "}
                <span className={badgeColors[selectedPayment.paymentType]}>
                  {selectedPayment.paymentType}
                </span>
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedPayment.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Amount:</strong> ₹
                {selectedPayment.amount?.toFixed(2) || "—"}
              </p>
            </div>

            <div className="mt-4 border-t pt-3">
              {selectedPayment.paymentType === "SALE" && selectedPayment.Sales && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Related Sale Details
                  </h4>
                  <p>Sales Number: {selectedPayment.Sales.salesNumber}</p>
                  <p>Patient: {selectedPayment.Sales.patientName}</p>
                  <p>Net Total: ₹{selectedPayment.Sales.netTotal}</p>
                </div>
              )}

              {selectedPayment.paymentType === "PURCHASE" &&
                selectedPayment.Purchase && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Related Purchase Details
                    </h4>
                    <p>Purchase Number: {selectedPayment.Purchase.purchaseNumber}</p>
                    <p>Supplier ID: {selectedPayment.Purchase.supplierId}</p>
                    <p>Net Total: ₹{selectedPayment.Purchase.netTotal}</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
