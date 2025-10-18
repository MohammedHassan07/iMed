import React from 'react'

const AddButton = ({ label }) => {
    return (
        <button
            type="submit"
            className="bg-blue-950 text-sm text-white px-6 py-2 rounded-md hover:bg-blue-900 cursor-pointer"
        >
            {label}
        </button>
    )
}

export default AddButton
