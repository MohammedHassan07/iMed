import React from 'react'

// Sample Sales vs Purchase Data
const salesData = [
    { name: "Jan", Sales: 40000, Purchase: 25000 },
    { name: "Feb", Sales: 38000, Purchase: 28000 },
    { name: "Mar", Sales: 46000, Purchase: 30000 },
    { name: "Apr", Sales: 52000, Purchase: 35000 },
];
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

const SalesAndPurchase = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 w-full ">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Sales vs Purchase (Last 4 Months)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sales" fill="oklch(87.2% 0.01 258.338)" barSize={20} />
                    <Bar dataKey="Purchase" fill="oklch(28.2% 0.091 267.935)" barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SalesAndPurchase
