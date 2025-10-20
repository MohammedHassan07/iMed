import React, { useState } from "react";
import MedicineCard from "../../components/MedicineCard";
import { Search, Trash } from "lucide-react";

const AddInventory = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedTax, setSelectedTax] = useState(5);
    const [form, setForm] = useState({
        actionType: "add",
        reason: "",
        handledBy: "",
        notes: "",
        medicine: "",
        batch: "",
        currentStock: "",
        quantityChange: "",
        updatedStock: "",
        expiryDate: "",
        location: "",
    });
   const [medicines] = useState([
        {
            id: 1,
            saltName: "Paracetamol",
            brandName: "Calpol 500",
            productForm: "tablet",
            availableQty: 50,
            purchasePrice: 12,
            sellingPrice: 20,
            packageQuantity: 10,
            batchNumber: 'BTC-97452',
            quantity: 20
        },
        {
            id: 2,
            saltName: "Amoxicillin",
            brandName: "Amoxil 250",
            productForm: "capsule",
            availableQty: 30,
            purchasePrice: 18,
            sellingPrice: 28,
            packageQuantity: 50,
            batchNumber: 'BTC-12452',
            quantity: 210
        },
        {
            id: 3,
            saltName: "Cetirizine",
            brandName: "Cetzine",
            productForm: "tablet",
            availableQty: 40,
            purchasePrice: 8,
            sellingPrice: 15,
            packageQuantity: 20,
            batchNumber: 'BTC-1287',
            quantity: 26
        },
    ]);

    // PER ITEM TOTAL (with tax)
    const getItemTotal = (item) => {
        const qty = Number(item.quantity) || 0;
        const price = Number(item.purchasePrice) || 0;
        const tax = Number(item.tax) || 0;
        const totalWithoutTax = qty * price;
        const taxAmount = (totalWithoutTax * tax) / 100;
        return totalWithoutTax + taxAmount;
    };

    const getItemProfit = (item) => {
        const sellingPrice = item.sellingPrice * item.packageQuantity // TODO: multiply with package qunatity
        const purchasePrice = item.purchasePrice
        const profit = (sellingPrice - purchasePrice) * item.quantity
        return profit
    }

    // Add medicine to purchase list
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
                return [
                    ...prev,
                    { ...med, quantity: med.quantity,  tax: selectedTax },
                ];
            }
        });
    };

    // Input change handler
    const handleInputChange = (id, field, value) => {
        setSelectedItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setSelectedItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

        // Auto-update stock preview
        if (e.target.name === "quantityChange" || e.target.name === "currentStock") {
            const qty = Number(form.quantityChange || 0);
            const current = Number(form.currentStock || 0);
            const updated =
                form.actionType === "add" ? current + qty : current - qty;
            setForm((prev) => ({ ...prev, updatedStock: updated }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Inventory Updated:", form);
    };

    const clearForm = () => {
        setForm({
            actionType: "add",
            reason: "",
            handledBy: "",
            notes: "",
            medicine: "",
            batch: "",
            currentStock: "",
            quantityChange: "",
            updatedStock: "",
            expiryDate: "",
            location: "",
        });
    };

    return (
        <div className="p-6 bg-gray-50 rounded-lg min-h-screen">

            {/* Adjustment reason */}
            <div className="mb-6 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-[#172554]">
                    Adjustment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                        name="actionType"
                        value={form.actionType}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    >
                        <option value="add">Add Stock</option>
                        <option value="deduct">Deduct Stock</option>
                    </select>
                    <select
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    >
                        <option value="">Select Reason</option>
                        <option value="Physical Adjustment">Physical Adjustment</option>
                        <option value="Expiry">Expired Medicine</option>
                        <option value="Damage">Damaged Stock</option>
                        <option value="Free Sample">Free Sample</option>
                        <option value="Transfer">Branch Transfer</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        name="handledBy"
                        placeholder="Handled By"
                        value={form.handledBy}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                    />
                    <textarea
                        name="notes"
                        placeholder="Notes"
                        value={form.notes}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full col-span-3"
                    />
                </div>
            </div>

            {/* Medicine Details */}
            <div className="grid grid-cols-[8fr_4fr]  gap-3">

                {/* stocks */}
                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300">

                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center ">No medicines added yet.</p>
                    ) : (
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">
                          
                            <table className="min-w-full border border-gray-200 text-sm table-fixed mt-5">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                        <th className="py-2 px-3 text-left font-semibold">Salt Name</th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Quantity
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Batch Number
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Purchase Price
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Selling Price
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Expiry Date
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">Tax</th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Total (₹)
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Profit (₹)
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="py-2 px-3 truncate">{item.brandName}</td>
                                            <td className="py-2 px-3 truncate w-32 flex flex-col justify-center ">
                                                <span className="">
                                                    {item.saltName}
                                                </span>
                                                <span className="text-xs ">
                                                    ({item.packageQuantity})
                                                </span>
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "quantity",
                                                            parseInt(e.target.value) || 1
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-16 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                {item.batchNumber}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    value={item.purchasePrice}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "purchasePrice",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-24 text-center"
                                                />
                                            </td>

                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="number"
                                                    value={item.sellingPrice}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "sellingPrice",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-24 text-center"
                                                />
                                            </td>

                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="date"
                                                    value={item.expiryDate}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "expiryDate",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-32 text-center"
                                                />
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <select
                                                    value={item.tax}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "tax",
                                                            parseFloat(e.target.value)
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-20 text-center"
                                                >
                                                    <option value="0">0%</option>
                                                    <option value="5">5%</option>
                                                    <option value="12">12%</option>
                                                    <option value="18">18%</option>
                                                    <option value="28">28%</option>
                                                </select>
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                ₹{getItemTotal(item).toFixed(2)}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                ₹{getItemProfit(item).toFixed(2)}
                                            </td>
                                            <td className="py-2 px-3 text-center">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                                >
                                                    <Trash size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>


                {/* search stock using medicine */}
                <div className="w-full bg-gray-50 shadow-md rounded-xl p-4 border border-gray-300 overflow-auto h-[80vh]">
                    <div className="relative mb-5">
                        <Search className="absolute left-3 top-2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search medicines..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-3 border rounded-md py-1 px-2 border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                        />
                    </div>
                    <div className="flex flex-wrap justify-start gap-3 max-h-[450px] overflow-y-auto">
                        {medicines
                            .filter(
                                (m) =>
                                    m.saltName
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    m.brandName
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    m.productForm
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                            )
                            .map((med) => (
                                <MedicineCard
                                    key={med.id}
                                    med={med}
                                    handleAddMedicine={handleAddMedicine}
                                />
                            ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddInventory;
