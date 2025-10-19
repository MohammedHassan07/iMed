import React, { useState } from "react";
import { Search, Trash } from "lucide-react";
import MedicineCard from "../../components/MedicineCard";

const Purchase = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [medicines, setMedicines] = useState([
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            productForm: "tablet",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Amoxil 250",
            productForm: "capsule",
            availableQty: 30,
            purchasePrice: 18,
            sellingPrice: 28,
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            productForm: "tablet",
            availableQty: 40,
            purchasePrice: 8,
            sellingPrice: 15,
        },
        {
            id: 4,
            saltName: "Azithromycin",
            brandName: "Azithral 500",
            productForm: "tablet",
            availableQty: 25,
            purchasePrice: 40,
            sellingPrice: 60,
        },
        {
            id: 5,
            saltName: "Cough Syrup",
            brandName: "Benadryl",
            productForm: "syrup",
            availableQty: 20,
            purchasePrice: 55,
            sellingPrice: 75,
        },
        {
            id: 6,
            saltName: "Diclofenac",
            brandName: "Voveran Gel",
            productForm: "ointment",
            availableQty: 15,
            purchasePrice: 35,
            sellingPrice: 50,
        },
        {
            id: 7,
            saltName: "Ibuprofen",
            brandName: "Brufen 400",
            productForm: "tablet",
            availableQty: 60,
            purchasePrice: 10,
            sellingPrice: 18,
        },
        {
            id: 8,
            saltName: "Pantoprazole",
            brandName: "Pantocid 40",
            productForm: "tablet",
            availableQty: 45,
            purchasePrice: 25,
            sellingPrice: 38,
        },
        {
            id: 9,
            saltName: "Metformin",
            brandName: "Glyciphage 500",
            productForm: "tablet",
            availableQty: 70,
            purchasePrice: 22,
            sellingPrice: 30,
        },
        {
            id: 10,
            saltName: "Loratadine",
            brandName: "Claritin",
            productForm: "tablet",
            availableQty: 35,
            purchasePrice: 12,
            sellingPrice: 20,
        },
        {
            id: 11,
            saltName: "Ofloxacin",
            brandName: "Oflox",
            productForm: "tablet",
            availableQty: 20,
            purchasePrice: 28,
            sellingPrice: 40,
        },
        {
            id: 12,
            saltName: "Dextromethorphan",
            brandName: "Corex DX",
            productForm: "syrup",
            availableQty: 18,
            purchasePrice: 60,
            sellingPrice: 80,
        },
        {
            id: 13,
            saltName: "Neomycin + Bacitracin",
            brandName: "Neosporin",
            productForm: "ointment",
            availableQty: 25,
            purchasePrice: 45,
            sellingPrice: 65,
        },
        {
            id: 14,
            saltName: "Cefixime",
            brandName: "Taxim-O 200",
            productForm: "tablet",
            availableQty: 30,
            purchasePrice: 55,
            sellingPrice: 75,
        },
        {
            id: 15,
            saltName: "Chlorpheniramine",
            brandName: "Polaramine",
            productForm: "syrup",
            availableQty: 22,
            purchasePrice: 32,
            sellingPrice: 50,
        },
    ]
    );
    const [searchSupplier, setSearchSupplier] = useState('')
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const [suppliers] = useState([
        {
            id: 1,
            name: "Draco Malfoy",
            company: "Malfoy Potions Ltd.",
            contact: "9876543210",
            email: "draco@malfoypotions.com",
            address: "Malfoy Manor, Wiltshire, England",
        },
        {
            id: 2,
            name: "Severus Snape",
            company: "Snape’s Advanced Elixirs",
            contact: "9823456712",
            email: "snape@hogwardz.edu",
            address: "Hogwardz Dungeon, Scotland",
        },
        {
            id: 3,
            name: "Pansy Parkinson",
            company: "Parkinson Pharmaceuticals",
            contact: "9934567890",
            email: "pansy@parkinsonpharma.com",
            address: "12 Silver Crescent, London",
        },
        {
            id: 4,
            name: "Blaise Zabini",
            company: "Zabini Imports & Elixirs",
            contact: "9845032109",
            email: "blaise@zabiniimports.com",
            address: "Via Roma 42, Venice, Italy",
        },
        {
            id: 5,
            name: "Theodore Nott",
            company: "Nott Magical Supplies",
            contact: "9998877665",
            email: "theodore@nottmagicals.com",
            address: "Knockturn Alley, London",
        },
    ]);

    // Filter suppliers dynamically
    const filteredSuppliers = suppliers.filter(
        (supplier) =>
            supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle supplier selection
    const handleSelectSupplier = (supplier) => {
        setSelectedSupplier(supplier);
        setSearchTerm(""); // clear search after selection
    };


    const handleAddMedicine = (med) => {
        setSelectedItems((prev) => {
            const exists = prev.find((i) => i.id === med.id);
            if (exists) {

                return prev.map((item) =>
                    item.id === med.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new item with quantity 1
                return [...prev, { ...med, quantity: 1, batchNumber: "" }];
            }
        });
    };

    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setSelectedItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };


    // Billing Calculations
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.purchasePrice * cur.quantity,
        0
    );
    const tax = subTotal * 0.05;
    const netTotal = subTotal + tax;

    return (
        <>
            {/* Supplier Details */}
            <div className="p-4 bg-gray-300 rounded-xl mb-4 border border-gray-200">
                <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                    <div>
                        <h2 className="text-lg font-semibold">Supplier Details</h2>
                    </div>

                    {/* Supplier Search Input */}
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                        <input
                            type="text"
                            placeholder="Search Supplier..."
                            value={searchSupplier}
                            onChange={(e) => setSearchSupplier(e.target.value)}
                            onBlur={() => setTimeout(() => setSearchSupplier(""), 150)}
                            className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                        />

                        {/* Suggestions dropdown */}
                        {searchSupplier && filteredSuppliers.length > 0 && (
                            <ul className="absolute bg-gray-300 border border-gray-300 rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                                {filteredSuppliers.map((supplier) => (
                                    <li
                                        key={supplier.id}
                                        onClick={() => {
                                            handleSelectSupplier(supplier)
                                            setSearchSupplier("");
                                        }}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {supplier.name} — {supplier.company}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Show selected supplier */}
                {selectedSupplier ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Name:</span>
                            <span className="text-gray-600">{selectedSupplier.name}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Company:</span>
                            <span className="text-gray-600">{selectedSupplier.company}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Contact:</span>
                            <span className="text-gray-600">{selectedSupplier.contact}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Email:</span>
                            <span className="text-gray-600">{selectedSupplier.email}</span>
                        </div>

                        <div className="col-span-2 flex flex-col">
                            <span className="font-semibold text-gray-700">Address:</span>
                            <span className="text-gray-600">{selectedSupplier.address}</span>
                        </div>

                        <div className="col-span-2 text-right">
                            <button
                                onClick={() => setSelectedSupplier(null)}
                                className="text-sm text-red-600 hover:underline"
                            >
                                Remove Supplier
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">No supplier selected.</p>
                )}
            </div>


            <div className="grid grid-cols-[8fr_4fr] p-3 gap-3">

                {/* Purchase Details */}
                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300 ">
                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center">No medicines added yet.</p>
                    ) : (
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">

                            <table className="min-w-full border border-gray-200 text-sm table-fixed">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                        <th className="py-2 px-3 text-left font-semibold whitespace-nowrap">Salt Name</th>
                                        <th className="py-2 px-3 text-center font-semibold">Quantity</th>
                                        <th className="py-2 px-3 text-center font-semibold">Batch No.</th>
                                        <th className="py-2 px-3 text-center font-semibold">Purchase Price</th>
                                        <th className="py-2 px-3 text-center font-semibold">Selling Price</th>
                                        <th className="py-2 px-3 text-center font-semibold">Purchase Date</th>
                                        <th className="py-2 px-3 text-center font-semibold">Expiry Date</th>
                                        <th className="py-2 px-3 text-center font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="py-2 px-3 truncate">{item.brandName}</td>
                                            <td className="py-2 px-3 text-gray-600 text-xs truncate whitespace-nowrap">{item.saltName}</td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleInputChange(item.id, "quantity", parseInt(e.target.value) || 1)
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-16 text-center bg-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="text"
                                                    placeholder="Batch No."
                                                    value={item.batchNumber}
                                                    onChange={(e) =>
                                                        handleInputChange(item.id, "batchNumber", e.target.value)
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-28 text-center bg-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    placeholder="₹0.00"
                                                    value={item.purchasePrice}
                                                    onChange={(e) =>
                                                        handleInputChange(item.id, "purchasePrice", parseFloat(e.target.value))
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-24 text-center bg-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    placeholder="₹0.00"
                                                    value={item.sellingPrice}
                                                    onChange={(e) =>
                                                        handleInputChange(item.id, "sellingPrice", parseFloat(e.target.value))
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-24 text-center bg-white"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="date"
                                                    value={item.purchaseDate || ""}
                                                    onChange={(e) =>
                                                        handleInputChange(item.id, "purchaseDate", e.target.value)
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md bg-white w-36 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="date"
                                                    value={item.expiryDate || ""}
                                                    onChange={(e) =>
                                                        handleInputChange(item.id, "expiryDate", e.target.value)
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md bg-white w-36 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center flex justify-center items-center cursor-pointer mt-1">
                                                <button className="flex items-center justify-center" onClick={() => handleRemoveItem(item.id)}>
                                                    <Trash size={20} className="text-red-600 hover:text-red-800" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Billing Section */}
                    {selectedItems.length > 0 && (
                        <div className="mt-6 border-t pt-4">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">Subtotal</span>
                                <span>₹{subTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">Tax (5%)</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-semibold mb-4">
                                <span>Net Total</span>
                                <span>₹{netTotal.toFixed(2)}</span>
                            </div>
                            <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                Purchase
                            </button>
                        </div>
                    )}
                </div>


                {/*  Search Medicines */}
                <div className="w-full  bg-gray-50 shadow-md rounded-xl p-4 border-1 border-gray-300 overflow-auto h-[80vh]">
                    <div className="relative mb-5">
                        <Search className="absolute left-3 top-2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Salt Name, Brand Name, Poduct Form"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-3 border rounded-md py-1 px-2 border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-100"
                        />
                    </div>

                    <div className="flex flex-wrap justify-start items-start gap-3 max-h-[450px] ">
                        {medicines.map((med, index) => (

                            <MedicineCard key={index} med={med} handleAddMedicine={handleAddMedicine} />
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Purchase;
