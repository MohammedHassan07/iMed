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
import { useState, useEffect } from "react";

const Revenue = () => {
    const [filter, setFilter] = useState("monthly");
    const [data, setData] = useState([]);
    const [customRange, setCustomRange] = useState({ start: "", end: "" });

    const fetchRevenueData = async () => {
        try {
            const params = { filter };
            if (filter === "custom") {
                params.startDate = customRange.start;
                params.endDate = customRange.end;
            }

            const response = await window.electronAPI.getRevenueGraphData(params);
            console.log(response);

            if (response.status === "success") {
                // Flatten data if nested (safety check)
                setData(response.data.data || response.data);
            }
        } catch (err) {
            console.error("Failed to load revenue data:", err);
        }
    };

    useEffect(() => {
        if (filter !== "custom" || (customRange.start && customRange.end)) {
            fetchRevenueData();
        }
    }, [filter, customRange]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">Revenue Overview</h2>

                <div className="flex items-center gap-3">
                    <select
                        className="border rounded-md px-3 py-1 text-gray-700"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="custom">Custom</option>
                    </select>

                    {filter === "custom" && (
                        <div className="flex gap-2">
                            <input
                                type="date"
                                className="border rounded-md px-2 py-1"
                                value={customRange.start}
                                onChange={(e) =>
                                    setCustomRange({ ...customRange, start: e.target.value })
                                }
                            />
                            <input
                                type="date"
                                className="border rounded-md px-2 py-1"
                                value={customRange.end}
                                onChange={(e) =>
                                    setCustomRange({ ...customRange, end: e.target.value })
                                }
                            />
                        </div>
                    )}
                </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: "#374151" }}
                        angle={-25}
                        textAnchor="end"
                        interval={0} // ensures all labels (Jan, Feb, etc.) are shown
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: "#374151" }}
                        tickFormatter={(value) => `₹${value / 1000}k`}
                    />
                    <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="oklch(28.2% 0.091 267.935)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Revenue"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Revenue;
