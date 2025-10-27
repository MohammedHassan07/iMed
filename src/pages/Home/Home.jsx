import { useEffect, useState } from "react";
import NearToExpire from "./components/NearToExpire";
import Revenue from "./components/Revenue";
import SalesAndPurchase from "./components/SalesAndPurchase";
import SummaryCard from "./components/SummaryCard";

const Home = () => {

    const [summary, setSummary] = useState({
        totalRevenue: 0,
        totalSales: 0,
        totalPurchase: 0,
    });


    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await window.electronAPI.getSummaryStats();
                console.log(response)
                if (response.status === "failed") throw new Error("Fetch failed");
                setSummary(response.data);
            } catch (error) {
                console.error(error);
                showToast("Failed to load summary", "error");
            }
        };

        fetchSummary();
    }, [])

    return (
        <div className="space-y-8 py-2 px-7 bg-gray-50">

            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">

                <SummaryCard
                    label="Total Revenue"
                    amount={summary.totalRevenue.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                    })}
                    duration={`${summary.revenueGrowth}% from last month`}
                />

                <SummaryCard
                    label="Total Sales"
                    amount={summary.totalSales.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                    })}
                    duration={`${summary.salesGrowth}% from last month`}
                />

                <SummaryCard
                    label="Total Purchase"
                    amount={summary.totalPurchase.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                    })}
                    duration={`${summary.purchaseGrowth}% from last month`}
                />

                <SummaryCard
                    label="Near Expiry"
                    amount={summary.totalPurchase.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                    })}
                    duration={`${summary.purchaseGrowth}% from last month`}
                />


            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 w-full">
                {/* Revenue Chart */}
                <Revenue />

                {/* Sales vs Purchase Chart */}
                <SalesAndPurchase />

                {/* Near Expiry Medicines */}
                <NearToExpire label={'Near-to-Expiry Medicines'} />


                {/* Expired Medicines */}
                <NearToExpire label={'Expired Medicines'} />

            </div>
        </div>
    );
};

export default Home;
