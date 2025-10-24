import React, { useState, useEffect } from "react";
import { Search, Trash } from "lucide-react";
import MedicineCard from "../../components/MedicineCard";
import showToast from "../../utils/Toast";
import debounce from '../../utils/debounce.js'

const Purchase = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [selectedTax, setSelectedTax] = useState(0);
    const [searchSupplier, setSearchSupplier] = useState("");
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [discountType, setDiscountType] = useState("percentage"); // 'percentage' | 'fixed'
    const [purchaseDate, setPurchaseDate] = useState('')
    const [notes, setNotes] = useState('')
    const [taxes, setTaxes] = useState([])
    const [medicines, setMedicines] = useState([]);

    const [suppliers, setSuppliers] = useState([]);


    // Select supplier
    const handleSelectSupplier = (supplier) => {
        setSelectedSupplier(supplier);
        setSearchSupplier("");
    };

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
                    {
                        ...med, quantity: 1,
                        batchNumber: "",
                        tax: parseFloat(selectedTax),
                        mrp: med.mrp || 0,
                        scheme: 0
                    },
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

    // PER ITEM TOTAL (with tax)
    // total (with tax)
    const getItemTotal = (item) => {
        const qty = Number(item.quantity) || 0;
        const price = Number(item.purchasePrice) || 0;
        const tax = Number(item.tax) || 0;
        const totalWithoutTax = qty * price;
        const taxAmount = (totalWithoutTax * tax) / 100;
        return totalWithoutTax + taxAmount;
    };

    // profit (excluding tax)
    const getItemProfit = (item) => {


        const qty = Number(item.quantity) || 0;
        const scheme = Number(item.scheme) || 0;
        const purchasePrice = Number(item.purchasePrice) || 0;
        const itemTotalPrice = Number(getItemTotal(item))
    
        const sellingPrice = Number(item.sellingPrice) || 0;

        const totalStrips = qty + scheme;
        const totalPurchaseCost = itemTotalPrice;
        const effectivePurchasePrice = totalPurchaseCost / totalStrips;

        const profitPerStrip = sellingPrice - effectivePurchasePrice;
        const totalProfit = profitPerStrip * totalStrips;

        return totalProfit;
    };


    // BILL TOTALS
    const subTotal = selectedItems.reduce(
        (acc, cur) => acc + cur.purchasePrice * cur.quantity,
        0
    );

    const itemTaxAmount = selectedItems.reduce(
        (acc, cur) =>
            acc + (cur.purchasePrice * cur.quantity * (Number(cur.tax) || 0)) / 100,
        0
    );


    const discountValue = Number(discount) || 0;
    const discountAmount =
        discountType === "percentage"
            ? (subTotal * discountValue) / 100
            : discountValue;

    const overallTaxRate = selectedTax;

    const overallTaxAmount =
        ((subTotal - discountAmount) + itemTaxAmount) * overallTaxRate / 100;

    const netTotal = subTotal - discountAmount + itemTaxAmount + overallTaxAmount;

    // purchase click
    const handlePurchaseClick = async () => {

        if (!selectedSupplier) {

            showToast("Please select a supplier before purchasing.", "oklch(57.7% 0.245 27.325)");
            return;
        }

        if (selectedItems.length === 0) {
            showToast("Please add at least one medicine to purchase.", "oklch(57.7% 0.245 27.325)");
            return;
        }

        // Check for missing fields in medicines
        for (const item of selectedItems) {
            if (!item.batchNumber?.trim()) {
                showToast(`Batch number missing for ${item.brandName}`, "oklch(57.7% 0.245 27.325)");
                return;
            }
            if (!item.expiryDate) {
                showToast(`Expiry date missing for ${item.brandName}`, "oklch(57.7% 0.245 27.325)");
                return;
            }
            if (!item.purchasePrice || item.purchasePrice <= 0) {
                showToast(`Purchase price missing or invalid for ${item.brandName}`, "oklch(57.7% 0.245 27.325)");
                return;
            }
            if (!item.sellingPrice || item.sellingPrice <= 0) {
                showToast(`Selling price missing or invalid for ${item.brandName}`, "oklch(57.7% 0.245 27.325)");
                return;
            }
        }

        if (!purchaseDate) {
            showToast("Please select a purchase date.", "oklch(57.7% 0.245 27.325)");
            return;
        }

        // Prepare payload for backend
        const purchaseData = {
            supplierId: selectedSupplier.id,
            purchaseDate,
            notes: notes,
            discountType,
            discount,
            tax: parseFloat(selectedTax),
            subTotal,
            // totalTax: overallTaxAmount,
            netTotal,
            medicines: selectedItems.map((item) => ({
                medicineId: item.id,
                batchNumber: item.batchNumber,
                expiryDate: item.expiryDate,
                purchasePrice: item.purchasePrice,
                sellingPrice: item.sellingPrice,
                quantity: item.quantity,
                tax: parseFloat(item.tax),
                total: getItemTotal(item),
                profit: getItemProfit(item),
                mrp: item.mrp,
                scheme: item.scheme || 0,
                packageQuantity: item.packageQuantity
            })),
        };

        console.log(" Purchase Data:", purchaseData);

        try {

            const response = await window.electronAPI.addPurchase(purchaseData);

            if (response.status === "success") {

                setSelectedItems([]);
                setSelectedSupplier(null);
                setDiscount(0);
                setSearchSupplier("");
                return showToast(' Purchase recorded successfully!', 'oklch(62.7% 0.194 149.214)');
            } else {
                showToast(` ${response.message || "Failed to record purchase"}`, "oklch(57.7% 0.245 27.325)");
            }
        } catch (error) {
            console.error("Purchase Error:", error);
            showToast(` ${response.message || "Failed to record purchase"}`, "oklch(57.7% 0.245 27.325)");
        }
    };

    const fetchItems = async () => {

        try {

            const response = await window.electronAPI.getMedicineOnTyping({
                search: searchTerm.trim(),
            });

            console.log("Medicine Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                // setItems([]);
                return;
            }

            setMedicines(response.data || []);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    }

    const fetchSuppliers = async () => {
        try {

            if (searchSupplier === "") return
            const response = await window.electronAPI.getSuppliersOnTyping({
                search: searchSupplier.trim(),
            });

            console.log("Medicine Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setSuppliers([]);
                return;
            }

            setSuppliers(response.data || []);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    }

    const fetchTaxes = async () => {

        try {

            const response = await window.electronAPI.getAllTaxes();

            console.log("Medicine Response:", response);

            if (response.status !== "success") {
                showToast(response.message, "oklch(57.7% 0.245 27.325)");
                setTaxes([]);
                return;
            }

            setTaxes(response.data || []);
        } catch (error) {
            showToast(error.message, "oklch(57.7% 0.245 27.325)");
        }
    }

    debounce(fetchSuppliers, searchSupplier)
    debounce(fetchItems, searchTerm)
    debounce(fetchTaxes)

    return (
        <>
            {/* Supplier Section */}
            <div className="p-4 bg-gray-200 rounded-xl mb-4 border border-gray-200">

                <div className="grid grid-cols-[2fr_10fr] items-center mb-4 border-b border-gray-300 pb-3">
                    <div>
                        <h2 className="text-lg font-semibold">Supplier Details</h2>
                    </div>

                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2 text-blue-950" size={18} />
                        <input
                            type="text"
                            placeholder="Search Supplier..."
                            value={searchSupplier}
                            onChange={(e) => setSearchSupplier(e.target.value)}
                            className="border border-blue-950 rounded-lg pl-10 pr-3 py-1 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
                        />

                        {searchSupplier && suppliers.length > 0 && (
                            <ul className="absolute bg-gray-300 border border-gray-300 rounded-md mt-1 shadow-md z-10 w-full max-h-48 overflow-auto">
                                {suppliers.map((supplier) => (
                                    <li
                                        key={supplier.id}
                                        onClick={() => handleSelectSupplier(supplier)}
                                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {supplier.contactPerson} — {supplier.companyName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {selectedSupplier ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Name:</span>
                            <span className="text-gray-600">{selectedSupplier.contactPerson}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Company:</span>
                            <span className="text-gray-600">{selectedSupplier.companyName}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-gray-700">Contact:</span>
                            <span className="text-gray-600">{selectedSupplier.contact}</span>
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

            {/* Purchase Details */}
            <div className="grid grid-cols-[7.5fr_4.5fr] p-3 gap-3">

                <div className="min-w-0 w-full bg-gray-50 rounded-xl p-4 border border-gray-300">

                    {selectedItems.length === 0 ? (
                        <p className="text-gray-500 text-center ">No medicines added yet.</p>
                    ) : (
                        <div className="overflow-x-auto max-h-[400px] overflow-y-auto rounded-lg">
                            <div className="flex items-center justify-start space-x-4">
                                <div className="flex flex-col">
                                    <label htmlFor="">Purchase date</label>
                                    <input
                                        className="border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950 transition-all duration-100"
                                        type="date"
                                        placeholder="Purchase Date"
                                        onChange={(e) => { setPurchaseDate(e.target.value) }}
                                        value={purchaseDate}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Notes</label>
                                    <input
                                        type="text"
                                        className="outline-0 border rounded-md py-1 px-2 focus:outline-none focus:ring-1 focus:ring-blue-950"
                                        rows="2"
                                        placeholder="Enter Notes"
                                        onChange={(e) => { setNotes(e.target.value) }}
                                        value={notes}
                                    />
                                </div>
                            </div>
                            <table className="min-w-full border border-gray-200 text-sm table-fixed mt-5">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="py-2 px-3 text-left font-semibold">Brand Name</th>
                                        <th className="py-2 px-3 text-left font-semibold">Salt Name</th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Quantity
                                        </th>
                                        <th className="py-2 px-3 text-center font-semibold">
                                            Scheme
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
                                            MRP
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
                                                <input
                                                    type="number"
                                                    min="0"
                                                    value={item.scheme}
                                                    onChange={(e) => handleInputChange(item.id, "scheme", parseInt(e.target.value) || 0)}
                                                    className="border border-gray-300 p-1 rounded-md w-16 text-center"
                                                />
                                            </td>

                                            <td className="py-2 px-3 text-center">
                                                <input
                                                    type="text"
                                                    value={item.batchNumber}
                                                    placeholder="Batch Number"
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            item.id,
                                                            "batchNumber",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-20 text-center"
                                                />
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
                                                    type="number"
                                                    min="0"
                                                    value={item.mrp}
                                                    onChange={(e) => handleInputChange(item.id, "mrp", parseFloat(e.target.value) || 0)}
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
                                                            e.target.value
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
                                                            e.target.value
                                                        )
                                                    }
                                                    className="border border-gray-300 p-1 rounded-md w-32 text-right"
                                                >
                                                    <option value={0}>0%</option>
                                                    {taxes.map((tax) => (
                                                        <option key={tax.id} value={parseFloat(tax.percentage)}>
                                                            {tax.taxName} ({tax.percentage}%)
                                                        </option>
                                                    ))}
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

                    {/* Billing Section */}
                    {selectedItems.length > 0 && (
                        <div className="mt-6 border-t pt-4 space-y-3">
                            <div className="mt-6 border-t pt-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Subtotal:</span>
                                    <span>₹{subTotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Discount:</span>
                                    <div className="flex items-center gap-2">

                                        <select
                                            value={discountType}
                                            onChange={(e) => setDiscountType(e.target.value)}
                                            className="border border-gray-300 p-2 rounded-md w-35 text-center"
                                        >
                                            <option value="percentage">Percentage (%)</option>
                                            <option value="fixed">Fixed (₹)</option>
                                        </select>

                                        <input
                                            type="number"
                                            value={discount}
                                            onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                                            className="border border-gray-300 p-1 rounded-md w-20 text-right"
                                        />

                                    </div>
                                </div>


                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Overall Tax (%):</span>
                                    <select
                                        value={selectedTax}
                                        onChange={(e) =>
                                            setSelectedTax(parseFloat(e.target.value))
                                        }
                                        className="border border-gray-300 p-1 rounded-md w-32 text-right"
                                    >
                                        <option value="0">0%</option>
                                        {taxes.map((tax) => (
                                            <option key={tax.id} value={parseFloat(tax.percentage)}>
                                                {tax.taxName} ({tax.percentage}%)
                                            </option>
                                        ))}
                                    </select>
                                </div>


                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Overall Tax ({selectedTax}%):</span>
                                    <span>₹{overallTaxAmount.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between text-lg font-semibold border-t pt-2">
                                    <span>Net Total:</span>
                                    <span>₹{netTotal.toFixed(2)}</span>
                                </div>

                                <button onClick={handlePurchaseClick} className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                    Purchase
                                </button>
                            </div>

                        </div>
                    )}
                </div>

                {/* Medicine List */}
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
                    <div className="flex flex-wrap justify-start gap-4 ">
                        {medicines.map((med) => (
                            <MedicineCard
                                key={med.id}
                                med={med}
                                handleAddMedicine={handleAddMedicine}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;
