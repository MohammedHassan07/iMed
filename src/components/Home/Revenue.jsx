import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  
} from "recharts";

import { useState } from "react";

// Sample Revenue Data
const revenueData = {
    monthly: [
        { name: "Jan", revenue: 45000 },
        { name: "Feb", revenue: 52000 },
        { name: "Mar", revenue: 48000 },
        { name: "Apr", revenue: 61000 },
        { name: "May", revenue: 70000 },
        { name: "Jun", revenue: 66000 },
    ],
    yearly: [
        { name: "2021", revenue: 550000 },
        { name: "2022", revenue: 720000 },
        { name: "2023", revenue: 950000 },
        { name: "2024", revenue: 1080000 },
    ],
};

const Revenue = () => {

    const [filter, setFilter] = useState("monthly");

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Revenue Overview</h2>
                <select
                    className="border rounded-md px-3 py-1 text-gray-700"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="custom">Custom</option>
                </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData[filter]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="oklch(62.7% 0.194 149.214)" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Revenue
