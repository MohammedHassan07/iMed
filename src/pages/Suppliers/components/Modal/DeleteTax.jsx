import React from 'react'

const DeleteTax = ({handleCloseModal, handleDelete, selectedTax}) => {
    return (
        <>
            <p className="mb-4">
                Are you sure you want to delete{" "}
                <strong>{selectedTax.taxName}</strong>?
            </p>
            <div className="flex justify-end gap-2">
                <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-gray-200 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-600 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </>
    )
}

export default DeleteTax
