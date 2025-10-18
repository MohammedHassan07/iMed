import React, { useState, useEffect, useRef } from "react";
import EditDelete from "../../components/EditDelete";
import DynamicForm from "../../components/DynamicForm";
import DeleteModal from "../../components/DeleteMoodal";
import { useNavigate } from "react-router-dom";

const GetPurchase = ({ onOpenPurchaseDetails }) => {
    const [purchases, setPurchases] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // update or delete
    const [selectedPurchase, setSelectedPurchase] = useState(null);
    const [formData, setFormData] = useState({});
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const modalRef = useRef(null);
    const navigate = useNavigate()

    const itemsPerPage = 5;

    // Dummy data
    useEffect(() => {
        setPurchases([
            {
                id: 1,
                saltName: "Paracetamol",
                brandName: "Calpol",
                supplier: "MedPlus Distributors",
                purchaseDate: "2025-02-15",
                expiryDate: "2026-02-15",
            },
            {
                id: 2,
                saltName: "Amoxicillin",
                brandName: "Mox",
                supplier: "Apollo Pharma",
                purchaseDate: "2025-03-10",
                expiryDate: "2026-03-10",
            },
            {
                id: 3,
                saltName: "Cetrizine",
                brandName: "Okacet",
                supplier: "HealthMart Traders",
                purchaseDate: "2025-04-05",
                expiryDate: "2026-04-05",
            },
        ]);
    }, []);

    // Define dynamic form fields
    const fields = [
        { name: "supplier", label: "Supplier Name", type: "text", placeholder: "Enter supplier name" },
        { name: "purchaseDate", label: "Purchase Date", type: "date", placeholder: "Select purchase date" },
        { name: "expiryDate", label: "Expiry Date", type: "date", placeholder: "Select expiry date" },
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

    // Pagination
    const totalPages = Math.ceil(purchases.length / itemsPerPage);
    const paginatedPurchases = purchases.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Filter search
    const filteredPurchases = paginatedPurchases.filter(
        (p) =>
            p.saltName.toLowerCase().includes(search.toLowerCase()) ||
            p.brandName.toLowerCase().includes(search.toLowerCase()) ||
            p.supplier.toLowerCase().includes(search.toLowerCase())
    );

    const handlePurchaseDetails = (purchaseId) => {
        event.preventDefault()
        navigate(`/purchase/purchase-details/${purchaseId}`)
    }

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

            {/* Table */}
            <div className="overflow-x-auto bg-white mt-5 rounded-lg border border-gray-300">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Salt Name</th>
                            <th className="p-3 text-left">Brand Name</th>
                            <th className="p-3 text-left">Supplier</th>
                            <th className="p-3 text-left">Purchase Date</th>
                            <th className="p-3 text-left">Expiry Date</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPurchases.map((purchase) => (
                            <tr
                                key={purchase.id}
                                className="hover:bg-gray-50 border-t border-gray-200 transition"
                                onClick={() => handlePurchaseDetails(purchase.id)}
                            >
                                <td className="p-3">{purchase.saltName}</td>
                                <td className="p-3">{purchase.brandName}</td>
                                <td className="p-3">{purchase.supplier}</td>
                                <td className="p-3">{purchase.purchaseDate}</td>
                                <td className="p-3">{purchase.expiryDate}</td>
                                <td className="p-3 text-center flex justify-center items-center gap-3"
                                onClick={(e) => e.stopPropagation()}>
                                    <EditDelete
                                        handleOpenModal={handleOpenModal}
                                        item={purchase}
                                        isDelete={false}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4">
                <p className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages || 1}
                </p>
                <div className="space-x-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
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
