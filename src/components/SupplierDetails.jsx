import React, { useState, useEffect } from 'react';
import useDebounceEffect from '../utils/debounce';
import { Search } from "lucide-react";

const SupplierDetails = ({ selectedSupplier, setSelectedSupplier }) => {

    const [suppliers, setSuppliers] = useState([]);
    const [searchSupplier, setSearchSupplier] = useState("");

    const handleSelectSupplier = (supplier) => {
        setSelectedSupplier(supplier);
        setSearchSupplier("");
    };

    const fetchSuppliers = async () => {
        try {
            if (searchSupplier === "") return;
            const response = await window.electronAPI.getSuppliersOnTyping({
                search: searchSupplier.trim(),
            });

            console.log("Supplier Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setSuppliers([]);
                return;
            }

            setSuppliers(response.data || []);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    };

    useDebounceEffect(() => {
        fetchSuppliers();
    }, [searchSupplier]);

    return (
        <div className="p-4 bg-gray-200 rounded-xl mb-4 border border-gray-200">
            <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                <div>
                    <h2 className="text-lg font-semibold">Supplier Details</h2>
                </div>

                <div className="relative w-full">
                    <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                    <input
                        type="text"
                        placeholder="Search Supplier..."
                        value={searchSupplier}
                        onChange={(e) => setSearchSupplier(e.target.value)}
                        className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                    />

                    {searchSupplier && suppliers.length > 0 && (
                        <ul className="absolute bg-gray-300 border border-gray-300 rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                            {suppliers.map((supplier) => (
                                <li
                                    key={supplier.id}
                                    onClick={() => handleSelectSupplier(supplier)}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                    {supplier.contactPerson} — {supplier.companyName}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {selectedSupplier ? (
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Name:</span>
                        <span className="text-gray-600">{selectedSupplier.contactPerson}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Company:</span>
                        <span className="text-gray-600">{selectedSupplier.companyName}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Contact:</span>
                        <span className="text-gray-600">{selectedSupplier.contact}</span>
                    </div>
                    <div className="col-span-2 text-right">
                        <button
                            onClick={() => setSelectedSupplier(null)}
                            className="text-sm text-red-600 hover:underline"
                        >
                            Remove Supplier
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 text-sm">No supplier selected.</p>
            )}
        </div>
    );
};

export default SupplierDetails;
