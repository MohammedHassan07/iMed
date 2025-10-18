import React, { useState, useRef, useEffect } from "react";
import TabButton from "../../components/TabButton"; // adjust path as needed
import AddSupplier from "./components/Tabs/AddSupplier";
import GetSupplier from "./components/Tabs/GetSupplier";

const Supplier = () => {
    const [activeTab, setActiveTab] = useState("get");
    const modalRef = useRef(null);

    const [showModal, setShowModal] = useState(false);

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

    return (
        <div className="p-6">

            {/* Tabs */}
            <TabButton
                tabs={[
                    { label: "Get Supplier", value: "get" },
                    { label: "Add Supplier", value: "add" },
                ]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <div className="mt-6">
                {activeTab === "add" && <AddSupplier />}
                {activeTab === "get" && <GetSupplier />}
            </div>


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

export default Supplier;
