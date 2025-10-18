import React, { useState, useEffect, useRef } from "react";
import EditDelete from "../../components/EditDelete";
import DynamicForm from "../../components/DynamicForm";
import DeleteModal from "../../components/DeleteMoodal";

const GetItems = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // update or delete
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const modalRef = useRef(null);

  // Dummy data
  useEffect(() => {
    setItems([
      {
        id: 1,
        saltName: "Paracetamol",
        brandName: "Calpol",
        manufacturer: "GSK",
        packageQuantity: 10,
        productForm: "Tablet",
        expiryDate: "2026-01-15",
      },
      {
        id: 2,
        saltName: "Amoxicillin",
        brandName: "Mox",
        manufacturer: "Sun Pharma",
        packageQuantity: 20,
        productForm: "Capsule",
        expiryDate: "2025-08-20",
      },
    ]);
  }, []);

  // Define form fields (dynamic form)
  const fields = [
    { name: "saltName", label: "Salt Name", type: "text", placeholder: "Enter salt name" },
    { name: "brandName", label: "Brand Name", type: "text", placeholder: "Enter brand name" },
    { name: "manufacturer", label: "Manufacturer", type: "text", placeholder: "Enter manufacturer" },
    { name: "packageQuantity", label: "Package Quantity", type: "number", placeholder: "Enter quantity" },
    { name: "productForm", label: "Product Form", type: "text", placeholder: "Enter product form" },
    { name: "expiryDate", label: "Expiry Date", type: "date", placeholder: "Select expiry date" },
  ];

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

  const handleUpdate = () => {
    console.log("Updated Item:", formData);
    // Example update logic (you can replace with API call)
    setItems((prev) =>
      prev.map((item) => (item.id === formData.id ? formData : item))
    );
    handleCloseModal();
  };

  const handleDelete = () => {
    console.log("Deleted Item:", selectedItem);
    setItems((prev) => prev.filter((item) => item.id !== selectedItem.id));
    handleCloseModal();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Pagination logic
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Filter search results
  const filteredItems = paginatedItems.filter(
    (item) =>
      item.saltName.toLowerCase().includes(search.toLowerCase()) ||
      item.brandName.toLowerCase().includes(search.toLowerCase()) ||
      item.productForm.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="grid grid-cols-[2fr_10fr] items-center">
        <h2 className="text-2xl font-semibold">All Medicines</h2>
        <div className="border border-blue-950 rounded w-full">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="outline-0 w-full py-1 px-2"
            type="text"
            placeholder="Search by Salt Name, Brand Name, Product Form"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white mt-5">
        <table className="min-w-full border border-gray-300 text-sm table-fixed">
          <thead className="bg-gray-100 text-left text-gray-700">
            <tr>
              <th className="p-3 text-left">Salt Name</th>
              <th className="p-3 text-left">Brand</th>
              <th className="p-3 text-left">Manufacturer</th>
              <th className="p-3 text-left">Package Qty</th>
              <th className="p-3 text-left">Form</th>
              <th className="p-3 text-left">Expiry</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}
                className="hover:bg-gray-50 border-t border-gray-200 transition">
                <td className="p-3">{item.saltName}</td>
                <td className="p-3">{item.brandName}</td>
                <td className="p-3">{item.manufacturer}</td>
                <td className="p-3">{item.packageQuantity}</td>
                <td className="p-3">{item.productForm}</td>
                <td className="p-3">{item.expiryDate}</td>
                <td className="p-3 text-center flex justify-center items-center gap-3">
                  <EditDelete handleOpenModal={handleOpenModal} item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
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
                title="Update Item Details"
                fields={fields}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleUpdate}
                handleCancel={handleCloseModal}
              />
            ) : (
              <DeleteModal
                selectedItem={selectedItem}
                itemLabel={'brandName'}
                handleDelete={handleDelete}
                handleCloseModal={handleCloseModal} />

            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetItems;
