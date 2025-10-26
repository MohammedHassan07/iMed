import React from 'react';

const TabButton = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="flex space-x-4 ">
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    className={`text-sm cursor-pointer px-4 py-2 rounded-md transition-colors
            ${activeTab === tab.value
                            ? "bg-blue-950 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    onClick={() => setActiveTab(tab.value)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabButton;
