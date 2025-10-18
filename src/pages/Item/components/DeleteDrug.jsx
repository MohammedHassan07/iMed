
const DeleteDrug = ({handleDelete, selectedItem, handleCloseModal}) => {
    return (
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
                    className="px-4 py-2 cursor-pointer bg-gray-400 rounded-md hover:bg-gray-500 text-sm"
                >
                    Cancel
                </button>
                <button
                    onClick={handleDelete}
                    className=" text-sm px-4 py-2 cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default DeleteDrug
