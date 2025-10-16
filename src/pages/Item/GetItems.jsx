import React, { useState, useEffect, useRef } from "react";
import { Pencil, Trash } from 'lucide-react'

const GetItems = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'update' or 'delete'
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const modalRef = useRef(null);

  useEffect(() => {
    // Dummy data for demo
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
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  const handleUpdate = () => {
    console.log("Updated Item:", formData);
    handleCloseModal();
  };

  const handleDelete = () => {
    console.log("Deleted Item:", selectedItem);
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">All Medicines</h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
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
            {paginatedItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.saltName}</td>
                <td className="p-3">{item.brandName}</td>
                <td className="p-3">{item.manufacturer}</td>
                <td className="p-3">{item.packageQuantity}</td>
                <td className="p-3">{item.productForm}</td>
                <td className="p-3">{item.expiryDate}</td>
                <td className="p-3 text-center space-x-2 flex justify-center items-center gap-3">
                  <span className="text-blue-500 cursor-pointer  hover:text-blue-700">
                    <Pencil onClick={() => handleOpenModal("update", item)} size={20}/>
                  </span>

                  <span className="text-red-500 cursor-pointer  hover:text-red-700">
                    <Trash onClick={() => handleOpenModal("delete", item)} size={20} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}

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
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {modalType === "update"
                ? "Update Item Details"
                : "Confirm Deletion"}
            </h3>

            {modalType === "update" ? (
              <form className="space-y-3">
                <input
                  type="text"
                  name="saltName"
                  value={formData.saltName || ""}
                  onChange={handleChange}
                  placeholder="Salt Name"
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName || ""}
                  onChange={handleChange}
                  placeholder="Brand Name"
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="manufacturer"
                  value={formData.manufacturer || ""}
                  onChange={handleChange}
                  placeholder="Manufacturer"
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="number"
                  name="packageQuantity"
                  value={formData.packageQuantity || ""}
                  onChange={handleChange}
                  placeholder="Package Quantity"
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="text"
                  name="productForm"
                  value={formData.productForm || ""}
                  onChange={handleChange}
                  placeholder="Product Form"
                  className="w-full border p-2 rounded-md"
                />

                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleUpdate}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <p className="mb-4 text-gray-700">
                  Are you sure you want to delete{" "}
                  <span className="font-semibold">
                    {selectedItem?.brandName}
                  </span>
                  ?
                </p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetItems;