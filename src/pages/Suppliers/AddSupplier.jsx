import React, { useState } from "react";
import showToast from "../../utils/Toast";

const AddSupplier = () => {
  const [form, setForm] = useState({
    companyName: '',
    contactPerson: "",
    contact: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const field in form) {
      if ((field !== "description" && field !== "boxNumber") && form[field] === "") {
        showToast(`Please fill in the ${field.replace(/([A-Z])/g, ' $1')}`, 'oklch(57.7% 0.245 27.325)');
        return;
      }
    }

    try {

      const response = await window.electronAPI.addSupplier(form);
      console.log(response)

      if (response.status !== 'success') {
        return showToast(response.message || 'Something went wrong !!!', 'oklch(57.7% 0.245 27.325)');
      }

      return showToast('Supplier Added', 'oklch(62.7% 0.194 149.214)');
    } catch (error) {
      console.log(error)
      return showToast(error.message || 'Something went wrong !!!', 'oklch(57.7% 0.245 27.325)');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center items-start">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="companyName"
          placeholder="company Name"
          value={form.companyName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          name="contactPerson"
          placeholder="Contact Person Name"
          value={form.contactPerson}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-900"
        >
          Add Supplier
        </button>
      </form>
    </div>
  );
};

export default AddSupplier;
