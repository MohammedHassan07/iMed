import React, { useState } from "react";
import AddButton from "../../components/AddButton";
import showToast from '../../utils/Toast.js'

const AddTax = () => {
    const [form, setForm] = useState({
        taxName: "",
        percentage: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Tax added:", form);

        for (const field in form) {
            if (form[field] === "") {
                showToast(`Please fill in the ${field.replace(/([A-Z])/g, ' $1')}`, 'oklch(57.7% 0.245 27.325)');
                return;
            }
        }

        try {

            const response = await window.electronAPI.addTax(form);
            console.log(response)

            if (response.status !== 'success') {
                return showToast(response.message || 'Something went wrong !!!', 'oklch(57.7% 0.245 27.325)');
            }

            return showToast(response.message || 'Tax Added', 'oklch(62.7% 0.194 149.214)');
        } catch (error) {
            console.log(error)
            return showToast(error.message || 'Something went wrong !!!', 'oklch(57.7% 0.245 27.325)');
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md p-6 w-full max-w-md space-y-4"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Add New Tax
                </h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tax Name
                    </label>
                    <input
                        type="text"
                        name="taxName"
                        value={form.taxName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                        placeholder="e.g. GST, VAT"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Percentage (%)
                    </label>
                    <input
                        type="number"
                        name="percentage"
                        value={form.percentage}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                        placeholder="e.g. 18"
                        min="0"
                        max="100"
                        required
                    />
                </div>

                <AddButton label="Submit" />
            </form>
        </div>
    );
};

export default AddTax;
