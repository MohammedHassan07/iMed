import React from "react";

const DynamicForm = ({ fields = [], formData, handleChange, handleSubmit, handleCancel }) => {
    return (
        <form className="space-y-3">
 
            {fields.map((field, index) => (
                <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label}
                    </label>
                    <input
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        placeholder={field.placeholder || ""}
                        className="w-full border p-2 rounded-md outline-0 border-blue-950 focus:border-blue-950"
                    />
                </div>
            ))}

            <div className="flex justify-end space-x-2 mt-4">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 text-sm cursor-pointer bg-gray-300 rounded-md hover:bg-gray-400"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 text-sm bg-blue-900 cursor-pointer text-white rounded-md hover:bg-blue-950"
                >
                    Save
                </button>
            </div>
        </form>
    );
};

export default DynamicForm;
