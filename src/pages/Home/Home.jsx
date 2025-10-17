import NearToExpire from "./components/NearToExpire";
import Revenue from "./components/Revenue";
import SalesAndPurchase from "./components/SalesAndPurchase";
import SummaryCard from "./components/SummaryCard";

const Home = () => {


    return (
        <div className="space-y-8 py-2 px-7 bg-gray-50">
            {/* Header */}

            {/* Top Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3">

                <SummaryCard
                    label={'Total Revenue'}
                    amount={Number(70000).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    })}
                    duration={'This Month'}
                />

                <SummaryCard
                    label={'Total Sales'}
                    amount={Number(45000).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    })
                    }
                    duration={'+5% from last month'}
                />

                <SummaryCard
                    label={'Total Purchase'}
                    amount={Number(30000).toLocaleString('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    })}
                    duration={'-2% from last month'}
                />

                <SummaryCard label={'Near Expiry'} amount={'3 Medicine'} duration={'Within 30 days'} />

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
