import React, { useState } from "react";
import { Eye, Search, Calendar } from "lucide-react";
import SalesDetails from "./SalesDetails";
import Pagination from "../../components/Pagination";

const GetSales = () => {
    const [selectedSale, setSelectedSale] = useState(null);
    const [search, setSearch] = useState("");
    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const [sales] = useState([
        {
            id: 1,
            invoiceNumber: "INV-1001",
            customerName: "Harry Potter",
            date: "2025-02-15",
            paymentMode: "Cash",
            totalAmount: 1250,
        },
        {
            id: 2,
            invoiceNumber: "INV-1002",
            customerName: "Hermione Granger",
            date: "2025-02-16",
            paymentMode: "UPI",
            totalAmount: 875,
        },
        {
            id: 3,
            invoiceNumber: "INV-1003",
            customerName: "Ron Weasley",
            date: "2025-02-17",
            paymentMode: "Card",
            totalAmount: 2310,
        },
        {
            id: 4,
            invoiceNumber: "INV-1004",
            customerName: "Luna Lovegood",
            date: "2025-02-18",
            paymentMode: "Cash",
            totalAmount: 1900,
        },
        {
            id: 5,
            invoiceNumber: "INV-1005",
            customerName: "Neville Longbottom",
            date: "2025-02-18",
            paymentMode: "UPI",
            totalAmount: 2300,
        },
        {
            id: 6,
            invoiceNumber: "INV-1006",
            customerName: "Ginny Weasley",
            date: "2025-02-19",
            paymentMode: "Card",
            totalAmount: 1575,
        },
    ]);


    // Filter Logic
    const filteredSales = sales.filter((sale) => {
        const searchMatch = sale.customerName
            .toLowerCase()
            .includes(search.toLowerCase());
        const startOk =
            !dateRange.start || new Date(sale.date) >= new Date(dateRange.start);
        const endOk =
            !dateRange.end || new Date(sale.date) <= new Date(dateRange.end);
        return searchMatch && startOk && endOk;
    });

    // Pagination
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentSales = filteredSales.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(filteredSales.length / itemsPerPage);

    if (selectedSale) {
        return (
            <SalesDetails
                selectedSale={selectedSale}
                onBack={() => setSelectedSale(null)}
            />
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">
                Sales Records
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-5 items-end">
                <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <Search className="text-gray-500 mr-2" size={18} />
                    <input
                        type="text"
                        placeholder="Search Customer..."
                        className="outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <Calendar className="text-gray-500 mr-2" size={18} />
                    <input
                        type="date"
                        className="outline-none"
                        value={dateRange.start}
                        onChange={(e) =>
                            setDateRange({ ...dateRange, start: e.target.value })
                        }
                    />
                </div>

                <span className="text-gray-500">to</span>

                <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
                    <Calendar className="text-gray-500 mr-2" size={18} />
                    <input
                        type="date"
                        className="outline-none"
                        value={dateRange.end}
                        onChange={(e) =>
                            setDateRange({ ...dateRange, end: e.target.value })
                        }
                    />
                </div>
            </div>

            {/* Sales Table */}
            <div className="overflow-x-auto overflow-y-auto h-[80vh] bg-white shadow-md rounded-lg border border-gray-200">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 text-left">Invoice No</th>
                            <th className="p-3 text-left">Customer</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Payment Mode</th>
                            <th className="p-3 text-left">Total (₹)</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSales.map((sale) => (
                            <tr
                                key={sale.id}
                                className="border-t hover:bg-gray-50 cursor-pointer"
                                onClick={() => setSelectedSale(sale)}
                            >
                                <td className="p-3">{sale.invoiceNumber}</td>
                                <td className="p-3">{sale.customerName}</td>
                                <td className="p-3">{sale.date}</td>
                                <td className="p-3 text-left">{sale.paymentMode}</td>
                                <td className="p-3 text-left">{sale.totalAmount}</td>
                                <td className="p-3 text-center">
                                    <buttton className="flex items-center justify-center">

                                        <Eye size={18} className="text-blue-600" />
                                    </buttton>
                                </td>
                            </tr>
                        ))}

                        {currentSales.length === 0 && (
                            <tr>
                                <td
                                    colSpan="6"
                                    className="p-4 text-center text-gray-500 italic"
                                >
                                    No matching sales found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <Pagination currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default GetSales;
