import React from 'react'

// Sample Expiry Data
const expiryMedicines = [
    { name: "Paracetamol", expiry: "2025-10-22", stock: 45 },
    { name: "Amoxicillin", expiry: "2025-11-02", stock: 30 },
    { name: "Cetrizine", expiry: "2025-11-15", stock: 22 },
];

const NearToExpire = ({label}) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md  border-2 border-gray-200 w-full">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                {label}
            </h2>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-blue-50 text-gray-700">
                        <th className="py-2 px-4">Medicine Name</th>
                        <th className="py-2 px-4">Expiry Date</th>
                        <th className="py-2 px-4">Stock Left</th>
                    </tr>
                </thead>
                <tbody>
                    {expiryMedicines.map((med) => (
                        <tr key={med.name} className="border-b border-gray-300 hover:bg-blue-50">
                            <td className="py-2 px-4">{med.name}</td>
                            <td className="py-2 px-4">{med.expiry}</td>
                            <td className="py-2 px-4">{med.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NearToExpire
