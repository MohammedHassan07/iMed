import React, { useEffect, useState } from "react";

const NearToExpire = ({ label }) => {
    const [expiryMedicines, setExpiryMedicines] = useState([]);

    const fetchNearExpiryMedicines = async () => {
        try {
            const response = await window.electronAPI.getNearExpiryMedicines();

            if (response.status !== "success") {
              setExpiryMedicines([]);
                return;
            }

            setExpiryMedicines(response.data || []);
        } catch (error) {
            console.error("Error fetching near-expiry medicines:", error);
        }
    };

    useEffect(() => {
        fetchNearExpiryMedicines();
    }, []);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 w-full">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                {label || "Near Expiry Medicines"}
            </h2>

            {expiryMedicines.length === 0 ? (
                <p className="text-gray-500 text-center">No near-expiry medicines found.</p>
            ) : (
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-blue-50 text-gray-700">
                            <th className="py-2 px-4">Salt Name</th>
                            <th className="py-2 px-4">Brand Name</th>
                            <th className="py-2 px-4">Batch Number</th>
                            <th className="py-2 px-4">Expiry Date</th>
                            <th className="py-2 px-4">Stock Left</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expiryMedicines.map((med) => (
                            <tr
                                key={`${med.batchNumber}-${med.brandName}`}
                                className="border-b border-gray-300 hover:bg-blue-50"
                            >
                                <td className="py-2 px-4">{med.saltName}</td>
                                <td className="py-2 px-4">{med.brandName}</td>
                                <td className="py-2 px-4">{med.batchNumber}</td>
                                <td className="py-2 px-4">{med.expiryDate}</td>
                                <td className="py-2 px-4">{med.stockLeft}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default NearToExpire;
