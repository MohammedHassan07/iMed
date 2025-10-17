import React from 'react'

const UpdateDrug = ({ handleUpdate, handleChange, handleCloseModal, formData }) => {
    return (

        <form className="space-y-3">
            <input
                type="text"
                name="saltName"
                value={formData.saltName || ""}
                onChange={handleChange}
                placeholder="Salt Name"
                className="w-full border p-2 rounded-md outline-0 border-blue-950 focus:border-blue-950"
            />
            <input
                type="text"
                name="brandName"
                value={formData.brandName || ""}
                onChange={handleChange}
                placeholder="Brand Name"
                 className="w-full border p-2 rounded-md outline-0 border-blue-950 focus:border-blue-950"
            />
            <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer || ""}
                onChange={handleChange}
                placeholder="Manufacturer"
                 className="w-full border p-2 rounded-md outline-0 border-blue-950 focus:border-blue-950"
            />
            <input
                type="number"
                name="packageQuantity"
                value={formData.packageQuantity || ""}
                onChange={handleChange}
                placeholder="Package Quantity"
                 className="w-full border p-2 rounded-md outline-0 border-blue-950 focus:border-blue-950"
            />
            <input
                type="text"
                name="productForm"
                value={formData.productForm || ""}
                onChange={handleChange}
                placeholder="Product Form"
                 className="w-full border p-2 rounded-md outline-0 border-blue-950 focus:border-blue-950"
            />

            <div className="flex justify-end space-x-2 mt-4">
                <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 text-sm cursor-pointer bg-gray-300 rounded-md hover:bg-gray-400"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleUpdate}
                    className="px-4 py-2text-sm  bg-blue-900 cursor-pointer text-white rounded-md hover:bg-blue-950"
                >
                    Update
                </button>
            </div>
        </form>

    )
}

export default UpdateDrug
