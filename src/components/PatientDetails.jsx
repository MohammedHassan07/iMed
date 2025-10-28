import React, { useEffect, useState } from 'react'
import { Search } from "lucide-react";

const PatientDetails = () => {

    const [searchPatient, setSearchPatient] = useState("");
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);

    useEffect(() => {
        const results = patients.filter((p) =>
            p.name.toLowerCase().includes(searchPatient.toLowerCase())
        );
        setFilteredPatients(results);
    }, [searchPatient]);


    const handleSelectPatient = (patient) => {
        setSelectedPatient(patient);
    };

    const patients = [
        { id: 1, name: "Harry Potter", age: 17, gender: "Male", contact: "9876543210", address: "Godric's Hollow" },
        { id: 2, name: "Hermione Granger", age: 17, gender: "Female", contact: "9821456732", address: "London" },
        { id: 3, name: "Ron Weasley", age: 17, gender: "Male", contact: "9812345678", address: "The Burrow" },
        { id: 4, name: "Luna Lovegood", age: 16, gender: "Female", contact: "9765432198", address: "Ottery St Catchpole" },
    ];

    return (
        <div className="p-4 bg-gray-200 rounded-xl mb-4 border border-gray-200">
            <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                <div>
                    <h2 className="text-lg font-semibold">Patient Details</h2>
                </div>

                {/* Patient Search Input */}
                <div className="relative w-full">
                    <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                    <input
                        type="text"
                        placeholder="Search Patient..."
                        value={searchPatient}
                        onChange={(e) => setSearchPatient(e.target.value)}
                        onBlur={() => setTimeout(() => setSearchPatient(""), 150)}
                        className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                    />

                    {/* Suggestions dropdown */}
                    {searchPatient && filteredPatients.length > 0 && (
                        <ul className="absolute bg-gray-300 border border-gray-300 rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                            {filteredPatients.map((patient) => (
                                <li
                                    key={patient.id}
                                    onClick={() => {
                                        handleSelectPatient(patient);
                                        setSearchPatient(""); // 👈 Close dropdown after selecting
                                    }}
                                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                    {patient.name} — {patient.contact}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Show selected patient */}
            {selectedPatient ? (
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Name:</span>
                        <span className="text-gray-600">{selectedPatient.name}</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Age:</span>
                        <span className="text-gray-600">{selectedPatient.age}</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Gender:</span>
                        <span className="text-gray-600">{selectedPatient.gender}</span>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-700">Contact:</span>
                        <span className="text-gray-600">{selectedPatient.contact}</span>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <span className="font-semibold text-gray-700">Address:</span>
                        <span className="text-gray-600">{selectedPatient.address}</span>
                    </div>

                    <div className="col-span-2 text-right">
                        <button
                            onClick={() => setSelectedPatient(null)}
                            className="text-sm text-red-600 hover:underline"
                        >
                            Remove Patient
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 text-sm">No patient selected.</p>
            )}
        </div>
    )
}

export default PatientDetails
