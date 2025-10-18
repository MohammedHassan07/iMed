import React, { useState } from "react";
import AddButton from "../../components/AddButton";

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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Tax added:", form);
        // API call to add tax can go here
        // Example: await axios.post('/api/tax', form)
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
