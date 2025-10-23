import React, { useState, useEffect, useRef } from "react";
import { Pencil, Trash } from "lucide-react";
import DynamicForm from "../../components/DynamicForm";
import DeleteModal from "../../components/DeleteMoodal";
import debounce from "../../utils/debounce";
import showToast from "../../utils/Toast";

const GetTax = () => {
    const [taxes, setTaxes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // update or delete
    const [selectedItem, setSelectedItem] = useState(null);
    const [formData, setFormData] = useState({});
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1)
    const itemsPerPage = 5;

    const modalRef = useRef(null);

    // Dummy data
    useEffect(() => {
        setTaxes([
            { id: 1, taxName: "GST", percentage: 18 },
            { id: 2, taxName: "Service Tax", percentage: 5 },
            { id: 3, taxName: "Luxury Tax", percentage: 12 },
        ]);
    }, []);

    // Form fields for DynamicForm
    const fields = [
        { name: "taxName", label: "Tax Name", type: "text", placeholder: "Enter tax name" },
        { name: "percentage", label: "Percentage", type: "number", placeholder: "Enter percentage" },
    ];

    // Modal open
    const handleOpenModal = (type, item) => {
        setModalType(type);
        setSelectedItem(item);
        setFormData(item || {});
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        };
        if (showModal) {
            document.addEventListener("mousedown", handleOutsideClick);
        }
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [showModal]);

    // Handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Update tax
    const handleUpdate = () => {
        console.log("Updated Tax:", formData);
        setTaxes((prev) =>
            prev.map((tax) => (tax.id === formData.id ? formData : tax))
        );
        handleCloseModal();
    };

    // Delete tax
    const handleDelete = () => {
        console.log("Deleted Tax:", selectedItem);
        setTaxes((prev) => prev.filter((tax) => tax.id !== selectedItem.id));
        handleCloseModal();
    };

    const fetchItems = async () => {
        try {
            const response = await window.electronAPI.getTaxes({
                page: currentPage,
                limit: itemsPerPage,
                search: search.trim(),
            });

            console.log("Medicine Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setTaxes([]);
                return;
            }

            setTaxes(response.data || []);
            setTotalPages(response.totalPages || 1);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    };
    debounce(fetchItems, search, currentPage)

    return (
        <div className="p-6">

            <div className="grid grid-cols-[2fr_10fr] items-center">
                <h2 className="text-2xl font-semibold">All Taxes</h2>
                <div className="border border-blue-950 rounded w-full">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="outline-0 w-full py-1 px-2"
                        type="text"
                        placeholder="Search by Tax Name"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white mt-5">
                <table className="min-w-full border border-gray-300 text-sm table-fixed">
                    <thead className="bg-gray-100 text-left text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Tax Name</th>
                            <th className="p-3 text-left">Percentage (%)</th>
                            <th className="p-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taxes.map((tax) => (
                            <tr
                                key={tax.id}
                                className="hover:bg-gray-50 border-t border-gray-200 transition"
                            >
                                <td className="p-3">{tax.taxName}</td>
                                <td className="p-3">{tax.percentage}%</td>
                                <td className="p-3 text-center flex justify-center items-center gap-3">
                                    <Pencil
                                        className="text-blue-500 hover:text-blue-800 cursor-pointer"
                                        onClick={() => handleOpenModal("update", tax)}
                                        size={20}
                                    />
                                    <Trash
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                        onClick={() => handleOpenModal("delete", tax)}
                                        size={20}
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
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                    >
                        Prev
                    </button>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
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
                                title="Update Tax Details"
                                fields={fields}
                                formData={formData}
                                handleChange={handleChange}
                                handleSubmit={handleUpdate}
                                handleCancel={handleCloseModal}
                            />
                        ) : (
                            <DeleteModal
                                selectedItem={selectedItem}
                                itemLabel="taxName"
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

export default GetTax;
