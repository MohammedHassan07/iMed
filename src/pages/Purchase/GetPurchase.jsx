import React, { useState, useEffect, useRef } from "react";
import EditDelete from "../../components/EditDelete";
import DynamicForm from "../../components/DynamicForm";
import DeleteModal from "../../components/DeleteMoodal";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import ViewDetailsButton from "../../components/ViewDetailsButton";
import debounce from "../../utils/debounce";
import showToast from "../../utils/Toast";


const GetPurchase = () => {
    const [purchases, setPurchases] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // update or delete
    const [selectedPurchase, setSelectedPurchase] = useState(null);
    const [formData, setFormData] = useState({});
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 20;

    const modalRef = useRef(null);
    const navigate = useNavigate()

    // Define dynamic form fields
    const fields = [
        { name: "supplier", label: "Supplier Name", type: "text", placeholder: "Enter supplier name" },
        { name: "purchaseDate", label: "Purchase Date", type: "date", placeholder: "Select purchase date" },
    ];

    // Modal Handlers
    const handleOpenModal = (type, item) => {
        setModalType(type);
        setSelectedPurchase(item);
        setFormData(item || {});
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPurchase(null);
    };

    // Outside click to close modal
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        };
        if (showModal) document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [showModal]);

    // Form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Update Purchase
    const handleUpdate = () => {
        setPurchases((prev) =>
            prev.map((p) => (p.id === formData.id ? formData : p))
        );
        handleCloseModal();
    };

    // Delete Purchase
    const handleDelete = () => {
        setPurchases((prev) => prev.filter((p) => p.id !== selectedPurchase.id));
        handleCloseModal();
    };

    const handlePurchaseDetails = (purchaseData) => {

        navigate('/purchase/purchase-details/', { state: purchaseData })
    }

    const fetchPurchase = async () => {

        try {

            const response = await window.electronAPI.getPurchase({
                page: currentPage,
                limit: itemsPerPage,
                search: search.trim(),
            });

            console.log("purchase Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setPurchases([]);
                return;
            }

            setPurchases(response.data || []);
        } catch (error) {
            console.log(error)
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    }
    debounce(fetchPurchase, currentPage, search)

    return (
        <div className="p-6">
            <div className="grid grid-cols-[2fr_10fr] items-center">
                <h2 className="text-2xl font-semibold">All Purchases</h2>
                <div className="border border-blue-950 rounded w-full">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-0 w-full py-1 px-2"
                        type="text"
                        placeholder="Search by Salt Name, Brand Name, Supplier"
                    />
                </div>
            </div>

            {/* Pagination */}
            <Pagination currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage} />

            {/* Table */}
            <div className="overflow-x-auto bg-white mt-5 rounded-lg border border-gray-300">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Supplier</th>
                            <th className="p-3 text-left">Purchase Date</th>
                            <th className="p-3 text-left">Total Items</th>
                            <th className="p-3 text-left">Net Total</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchases.map((purchase) => (
                            <tr
                                key={purchase.id}
                                className="hover:bg-gray-50 border-t border-gray-200 transition"
                            >
                                <td className="p-3">Supplier #{purchase.supplierId}</td>
                                <td className="p-3">
                                    {new Date(purchase.purchaseDate).toLocaleDateString("en-IN")}
                                </td>
                                <td className="p-3">{purchase.purchasedItems?.length || 0}</td>
                                <td className="p-3">₹{purchase.netTotal.toFixed(2)}</td>
                                <td className="p-3 text-center flex justify-center items-center gap-5">
                                    <EditDelete
                                        handleOpenModal={handleOpenModal}
                                        item={purchase}
                                        isDelete={false}
                                    />

                                    <ViewDetailsButton
                                        hadnleDetailClick={handlePurchaseDetails}
                                        data={purchase}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/55 backdrop-blur-none flex items-center justify-center z-50">
                    <div
                        ref={modalRef}
                        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
                    >
                        {modalType === "update" ? (
                            <DynamicForm
                                title="Update Purchase Details"
                                fields={fields}
                                formData={formData}
                                handleChange={handleChange}
                                handleSubmit={handleUpdate}
                                handleCancel={handleCloseModal}
                            />
                        ) : (
                            <DeleteModal
                                selectedItem={selectedPurchase}
                                itemLabel={"brandName"}
                                handleDelete={handleDelete}
                                handleCloseModal={handleCloseModal}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetPurchase;
