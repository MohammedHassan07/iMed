import React, { useState, useEffect, useRef } from "react";
import DeleteTax from "./components/Modal/DeleteTax";
import UpdateTax from "./components/Modal/UpdateTax";
import TabButton from '../../components/TabButton'
import AddTax from "./components/Tabs/AddTax";
import GetTax from "./components/Tabs/GetTax";


const TaxSettings = () => {
  const [activeTab, setActiveTab] = useState("get");
  const [taxes, setTaxes] = useState([]);
  const [formData, setFormData] = useState({ taxName: "", percentage: "" });
  const [selectedTax, setSelectedTax] = useState(null);
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);


  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const taxesPerPage = 5;
  const totalPages = Math.ceil(taxes.length / taxesPerPage);
  const paginatedTaxes = taxes.slice(
    (currentPage - 1) * taxesPerPage,
    currentPage * taxesPerPage
  );

  useEffect(() => {
    // Dummy data
    setTaxes([
      { id: 1, taxName: "GST", percentage: 18 },
      { id: 2, taxName: "CGST", percentage: 9 },
      { id: 3, taxName: "SGST", percentage: 9 },
    ]);
  }, []);

  // Handle Form Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add Tax
  const handleAddTax = (e) => {
    e.preventDefault();
    if (!formData.taxName || !formData.percentage) return;
    setTaxes([
      ...taxes,
      {
        id: taxes.length + 1,
        taxName: formData.taxName,
        percentage: parseFloat(formData.percentage),
      },
    ]);
    setFormData({ taxName: "", percentage: "" });
    alert("Tax added successfully!");
  };

  // Edit/Delete Modal
  const handleOpenModal = (type, tax) => {
    setModalType(type);
    setSelectedTax(tax);
    setFormData(tax || {});
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTax(null);
  };

  // Outside click to close modal
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  // Update Tax
  const handleUpdate = () => {
    setTaxes(
      taxes.map((tax) =>
        tax.id === selectedTax.id ? { ...formData, id: tax.id } : tax
      )
    );
    handleCloseModal();
  };

  // Delete Tax
  const handleDelete = () => {
    setTaxes(taxes.filter((tax) => tax.id !== selectedTax.id));
    handleCloseModal();
  };

  return (
    <div className="p-6">

      {/* Tabs */}
      <TabButton
        tabs={[
          { label: 'Get Tax', value: 'get' },
          { label: 'Add Tax', value: 'add' },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabType={''} />

      {/* Add Tax Form */}
      {activeTab === "add" && (
        <AddTax
          handleAddTax={handleAddTax}
          formData={formData}
          handleChange={handleChange} />
      )}

      {/* Get Tax Table */}
      {activeTab === "get" && (
        <GetTax
          paginatedTaxes={paginatedTaxes}
          handleOpenModal={handleOpenModal}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages} />
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
          >
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {modalType === "update" ? "Edit Tax" : "Delete Tax"}
            </h3>

            {modalType === "update" ? (
              <UpdateTax
                formData={formData}
                handleChange={handleChange}
                handleCloseModal={handleCloseModal}
                handleUpdate={handleUpdate} />
            ) : (
              <DeleteTax
                handleCloseModal={handleCloseModal}
                handleDelete={handleDelete}
                selectedTax={selectedTax} />
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default TaxSettings;
