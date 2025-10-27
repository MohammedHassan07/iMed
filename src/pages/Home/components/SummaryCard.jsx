import React from 'react'
import { MoveUp, MoveDown } from 'lucide-react'

const SummaryCard = ({ label, amount, duration }) => {
    return (
     <div className="bg-gray-100 p-4 rounded-2xl shadow hover:shadow-lg transition border border-gray-300 cursor-default hover:bg-gray-50">

            <p className="text-gray-600">{label}</p>
            <h2 className="text-2xl font-semibold text-blue-900">{amount}</h2>
            <p className={`text-sm mt-1 flex items-center gap-1 ${duration[0] === '-' ? 'text-red-600' : 'text-green-600'
                }`}>
                {duration[0] === '-' ? <MoveDown size={15} /> : <MoveUp size={15}/>} {duration}
            </p>

        </div>
    )
}

export default SummaryCard

