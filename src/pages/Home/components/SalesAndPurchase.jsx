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
import { useState, useEffect } from "react";

const SalesAndPurchase = () => {
    const [filter, setFilter] = useState("monthly");
    const [data, setData] = useState([]);
    const [customRange, setCustomRange] = useState({ start: "", end: "" });

    const fetchSalesAndPurchaseData = async () => {
        try {
            const params = { filter };
            if (filter === "custom") {
                params.startDate = customRange.start;
                params.endDate = customRange.end;
            }

            const response = await window.electronAPI.getSalesAndPurchaseData(params);
            console.log(response);

            if (response.status === "success") {
                setData(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch Sales vs Purchase data:", error);
        }
    };

    useEffect(() => {
        if (filter !== "custom" || (customRange.start && customRange.end)) {
            fetchSalesAndPurchaseData();
        }
    }, [filter, customRange]);

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-gray-200 w-full">
            {/* Header and Filters */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700">
                    Sales vs Purchase Overview
                </h2>

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

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="Sales"
                        fill="oklch(87.2% 0.01 258.338)"
                        barSize={25}
                        radius={[8, 8, 0, 0]}
                    />
                    <Bar
                        dataKey="Purchase"
                        fill="oklch(28.2% 0.091 267.935)"
                        barSize={25}
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesAndPurchase;
