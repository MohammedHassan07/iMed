import React, { useState, useEffect } from "react";
import { Pencil, Trash } from "lucide-react";

const GetSupplier = () => {
  const [suppliers, setSuppliers] = useState([{
    id: 1,
    name: "Medico Pvt Ltd",
    contactPerson: 'Prof. Snape',
    contact: "9876543210",
    email: "info@medico.com",
    address: "Rajendra Nagar",
  },
  {
    id: 2,
    name: "PharmaTech",
    contactPerson: 'Malfoy',
    contact: "9988776655",
    email: "support@pharmatech.com",
    address: "Andheri East",
  },]);

  
  const handleEdit = (supplier) => {
    console.log("Edit supplier:", supplier);
  };

  const handleDelete = (supplier) => {
    console.log("Delete supplier:", supplier);
  };

  return (
    <div className="p-6 bg-white rounded-xl ">
      
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg text-sm table-fixed">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-4 py-3 border-b w-[25%]">Name</th>
              <th className="px-4 py-3 border-b w-[25%]">Contact Person</th>
              <th className="px-4 py-3 border-b w-[15%]">Contact</th>
              <th className="px-4 py-3 border-b w-[25%]">Email</th>
              <th className="px-4 py-3 border-b w-[20%]">Address</th>
              <th className="px-4 py-3 border-b w-[10%] text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr
                key={supplier.id}
                className="hover:bg-gray-50 border-t border-gray-200 transition"
              >
                <td className="px-4 py-3 truncate">{supplier.name}</td>
                <td className="px-4 py-3 truncate">{supplier.contactPerson}</td>
                <td className="px-4 py-3 truncate">{supplier.contact}</td>
                <td className="px-4 py-3 truncate">{supplier.email}</td>
                <td className="px-4 py-3 truncate">{supplier.address}</td>
                <td className="px-4 py-3 flex items-center justify-center space-x-3">
                  <button
                    onClick={() => handleEdit(supplier)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit Supplier"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(supplier)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete Supplier"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {suppliers.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No suppliers found.
          </div>
        )}
      </div>
    </div>
  );
};

export default GetSupplier;
