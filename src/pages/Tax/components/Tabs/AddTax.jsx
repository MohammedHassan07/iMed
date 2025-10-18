import React from 'react'
import AddButton from '../../../../components/AddButton'

const AddTax = ({handleAddTax, formData, handleChange}) => {
    return (
        <form
            onSubmit={handleAddTax}
            className="bg-white rounded-lg p-6 max-w-lg"
        >
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Tax Name</label>
                <input
                    type="text"
                    name="taxName"
                    value={formData.taxName}
                    onChange={handleChange}
                    className="border rounded w-full px-3 py-2 outline-none"
                    placeholder="e.g. GST, VAT"
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
                    placeholder="e.g. 18"
                    min="0"
                    max="100"
                />
            </div>

            <AddButton label={'Submit'} />
        </form>
    )
}

export default AddTax
