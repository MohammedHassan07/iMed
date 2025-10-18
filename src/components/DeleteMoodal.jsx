import React from "react";

const DeleteModal = ({
    selectedItem,
    itemLabel = "name",
    title = "Confirm Deletion",
    message,
    handleDelete,
    handleCloseModal,
}) => {
    const displayValue = selectedItem?.[itemLabel] || "this item";

    return (
        <div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="mb-4 text-gray-700">
                {message
                    ? message
                    : (
                        <>
                            Are you sure you want to delete{" "}
                            <span className="font-semibold">{displayValue}</span>?
                        </>
                    )}
            </p>

            <div className="flex justify-end space-x-2">
                <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 cursor-pointer bg-gray-400 rounded-md hover:bg-gray-500 text-sm"
                >
                    Cancel
                </button>
                <button
                    onClick={handleDelete}
                    className="text-sm px-4 py-2 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteModal;
