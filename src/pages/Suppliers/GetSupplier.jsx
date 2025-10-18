import React, { useState, useEffect, useRef } from "react";
import EditDelete from "../../components/EditDelete";
import DynamicForm from "../../components/DynamicForm";
import DeleteTax from "./components/Modal/DeleteTax";

const GetSupplier = () => {
  const [suppliers, setSuppliers] = useState([{
    id: 1,
    name: "Medico Pvt Ltd",
    contactPerson: 'Prof. Snape',
    contact: "9876543210",
    coutryCode: '+91',
    email: "info@medico.com",
    address: "Rajendra Nagar",
  },
  {
    id: 2,
    name: "PharmaTech",
    contactPerson: 'Malfoy',
    contact: "9988776655",
    coutryCode: '+91',
    email: "support@pharmatech.com",
    address: "Shaheen Bagh",
  },]);

  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // update or delete
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [search, setSearch] = useState("");

  const modalRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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


  // Pagination logic
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


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

  const fields = [
    { name: "name", label: "Supplier Name", type: "text", placeholder: "Enter Supplier Name" },
    { name: "contactPerson", label: "Contact Person", type: "text", placeholder: "Enter Contact Person" },
    { name: "coutryCode", label: "Country Code", type: "text", placeholder: "+91" },
    { name: "contact", label: "Contact Number", type: "number", placeholder: "9876543210" },
    { name: "email", label: "Email", type: "email", placeholder: "info@supplier.com" },
    { name: "address", label: "Address", type: "text", placeholder: "Enter Address" },
  ]

  return (
    <div className="p-6">
      <div className="grid grid-cols-[2fr_10fr] items-center">
        <h2 className="text-2xl font-semibold">All Suppliers</h2>

        <div className="border border-blue-950 rounded w-full">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="outline-0 w-full py-1 px-2"
            type="text"
            placeholder="Search by Salt Name, Brand Name, Product Form"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white mt-5">
        <table className="min-w-full border border-gray-300 text-sm table-fixed">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-4 py-3 border-b w-[25%]">Name</th>
              <th className="px-4 py-3 border-b w-[25%]">Contact Person</th>
              <th className="px-4 py-3 border-b w-[15%]">Contact</th>
              <th className="px-4 py-3 border-b w-[25%]">Email</th>
              <th className="px-4 py-3 border-b w-[20%]">Address</th>
              <th className="px-4 py-3 border-b w-[10%] text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr
                key={supplier.id}
                className="hover:bg-gray-50 border-t border-gray-200 transition"
              >
                <td className="px-4 py-3 truncate">{supplier.name}</td>
                <td className="px-4 py-3 truncate">{supplier.contactPerson}</td>
                <td className="px-4 py-3 truncate">{supplier.coutryCode + supplier.contact}</td>
                <td className="px-4 py-3 truncate">{supplier.email}</td>
                <td className="px-4 py-3 truncate">{supplier.address}</td>
                <td className="px-4 py-3 flex items-center justify-center space-x-3">

                  <EditDelete handleOpenModal={handleOpenModal} item={supplier} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {suppliers.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No suppliers found.
          </div>
        )}
      </div>

      {/* pagination */}
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
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {modalType === "update"
                ? "Update Item Details"
                : "Confirm Deletion"}
            </h3>

            {modalType === "update" ? <DynamicForm
              title="Update Supplier"
              fields={fields}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleUpdate}
              handleCancel={handleCloseModal}
            />
              :

              <DeleteTax
                handleDelete={handleDelete}
                selectedItem={selectedItem}
                handleCloseModal={handleCloseModal}
              />
              }
          </div>
        </div>
      )}
    </div>
  );
};

export default GetSupplier;
