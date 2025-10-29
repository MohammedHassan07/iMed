import React, { useState, useEffect, useRef } from "react";
import EditDelete from "../../components/EditDelete";
import DynamicForm from "../../components/DynamicForm";
import DeleteModal from "../../components/DeleteMoodal";
import Pagination from "../../components/Pagination";
import showToast from "../../utils/Toast";
import useDebounceEffect from "../../utils/debounce";

const GetItems = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // update or delete
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 20;

  const modalRef = useRef(null);

  // Define form fields (dynamic form)
  const fields = [
    { name: "saltName", label: "Salt Name", type: "text", placeholder: "Enter salt name" },
    { name: "brandName", label: "Brand Name", type: "text", placeholder: "Enter brand name" },
    { name: "manufacturer", label: "Manufacturer", type: "text", placeholder: "Enter manufacturer" },
    { name: "packageQuantity", label: "Package Quantity", type: "number", placeholder: "Enter quantity" },
    {
      name: "productForm",
      label: "Product Form",
      type: "select",
      options: ["Tablet", "Capsule", "Syrup", "Injection", "Cream", "Powder"],
      placeholder: "Select product form",
    },
    {
      name: "storageCondition",
      label: "Storage Condition",
      type: "select",
      options: ["Room Temperature", "Refrigerated", "Box"],
      placeholder: "Select storage condition",
    },
    {
      name: "boxNumber",
      label: "Box Number",
      type: "text",
      placeholder: "Enter box number",
      conditional: (formData) => formData.storageCondition === "Box", // 👈 Conditional logic
    },
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

  const handleUpdate = async () => {
    try {
      const requiredFields = [
        "saltName",
        "brandName",
        "manufacturer",
        "packageQuantity",
        "productForm",
        "storageCondition",
      ];

      for (let field of requiredFields) {
        if (!formData[field] || formData[field].toString().trim() === "") {
          showToast(`${field} is required`, "oklch(57.7% 0.245 27.325)");
          return;
        }
      }

      if (formData.storageCondition === "Box" && (!formData.boxNumber)
      ) {
        showToast("Box Number is required when Storage Condition is Box", "oklch(57.7% 0.245 27.325)");
        return;
      }

      const response = await window.electronAPI.updateMedicine(formData);

      if (response.status !== "success") {
        showToast(response.message || "Update failed", "oklch(57.7% 0.245 27.325)");
        return;
      }

      setItems((prev) =>
        prev.map((item) => (item.id === formData.id ? { ...item, ...formData } : item))
      );

      showToast("Item updated successfully", "oklch(67.7% 0.145 147.325)");
      handleCloseModal();
    } catch (error) {
      console.error("Update error:", error);
      showToast(error.message || "An unexpected error occurred", "oklch(57.7% 0.245 27.325)");
    }
  };

  const handleDelete = async () => {
    console.log("Deleted Item:", selectedItem)
    setItems((prev) => prev.filter((item) => item.id !== selectedItem.id))

    try {

      const response = await window.electronAPI.deleteMedicine(selectedItem.id)

      if (response.status === "success") {
        setItems((prev) => prev.filter((item) => item.id !== selectedItem.id))
        showToast("Medicine deleted successfully", "oklch(67.7% 0.145 147.325)")
        handleCloseModal();
      } else {
        showToast(response.message || "Failed to delete medicine", "oklch(57.7% 0.245 27.325)")
      }
    } catch (error) {
      console.error("Delete error:", error)
      showToast("An error occurred while deleting", "oklch(57.7% 0.245 27.325)")
    }
    handleCloseModal();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchItems = async () => {
    try {
      const response = await window.electronAPI.getMedicine({
        page: currentPage,
        limit: itemsPerPage,
        search: search.trim(),
      });

      console.log("Medicine Response:", response);

      if (response.status !== "success") {
        showToast(response.message, "oklch(57.7% 0.245 27.325)");
        setItems([]);
        return;
      }

      setItems(response.data || []);
      setTotalPages(response.totalPages || 1);
    } catch (error) {
      showToast(error.message, "oklch(57.7% 0.245 27.325)");
    }
  };
  useDebounceEffect(fetchItems, [search, currentPage])

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
              <th className="p-3 text-left">Item Code</th>
              <th className="p-3 text-left">Salt Name</th>
              <th className="p-3 text-left">Brand</th>
              <th className="p-3 text-left">Manufacturer</th>
              <th className="p-3 text-left">Package Qty</th>
              <th className="p-3 text-left">Form</th>
              <th className="p-3 text-left">Storage</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}
                className="hover:bg-gray-50 border-t border-gray-200 transition">
                <td className="p-3">{item.itemCode}</td>
                <td className="p-3">{item.saltName}</td>
                <td className="p-3">{item.brandName}</td>
                <td className="p-3">{item.manufacturer}</td>
                <td className="p-3">{item.packageQuantity}</td>
                <td className="p-3">{item.productForm}</td>
                <td className="p-3">{item.storageCondition} {item.storageCondition === 'Box' && '(' + item.boxNumber + ')'}</td>
                <td className="p-3 text-center flex justify-center items-center gap-3">
                  <EditDelete handleOpenModal={handleOpenModal} item={item} isDelete={true} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage} />

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
