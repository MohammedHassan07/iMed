import React from 'react'

const UpdateTax = ({formData, handleChange, handleCloseModal, handleUpdate}) => {

    return (

        <>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Tax Name
                </label>
                <input
                    type="text"
                    name="taxName"
                    value={formData.taxName}
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2 outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                    Percentage (%)
                </label>
                <input
                    type="number"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2 outline-none"
                />
            </div>
            <div className="flex justify-end gap-2">
                <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-200 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpdate}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Update
                </button>
            </div>
        </>
    )
}

export default UpdateTax
