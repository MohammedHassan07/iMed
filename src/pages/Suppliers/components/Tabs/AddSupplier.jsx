import React, { useState } from "react";

const AddSupplier = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Supplier added:", form);
    // API call to add supplier goes here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        placeholder="Supplier Name"
        value={form.name}
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
  );
};

export default AddSupplier;
