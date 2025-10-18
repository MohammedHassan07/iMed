import React from 'react'
import { Pencil, Trash } from "lucide-react";

const GetTax = ({ paginatedTaxes, handleOpenModal, currentPage, setCurrentPage, totalPages }) => {
    return (
        <div className="mt-6 bg-white rounded-lg p-4">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">Tax Name</th>
                        <th className="p-3 text-left">Percentage (%)</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedTaxes.map((tax) => (
                        <tr key={tax.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">{tax.taxName}</td>
                            <td className="p-3">{tax.percentage}%</td>
                            <td className="p-3 text-center flex justify-center gap-3">
                                <Pencil
                                    className="text-blue-500 hover:text-blue-800 cursor-pointer"
                                    onClick={() => handleOpenModal("update", tax)}
                                />
                                <Trash
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                    onClick={() => handleOpenModal("delete", tax)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
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
        </div>
    )
}

export default GetTax
