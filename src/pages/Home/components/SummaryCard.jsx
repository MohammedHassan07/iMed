import React from 'react'

const SummaryCard = ({label, amount, duration}) => {
    return (
        <div className="bg-blue-200 p-4 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-gray-600">{label}</p>
            <h2 className="text-2xl font-semibold text-blue-900">{amount}</h2>
            <p className={`text-sm mt-1 ${duration[0] === '-' ? 'text-red-600': 'text-green-600'}`}>{duration}</p>
        </div>
    )
}

export default SummaryCard

