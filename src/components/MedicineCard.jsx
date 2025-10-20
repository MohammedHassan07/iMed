import React from 'react'
import tablet from '../assets/tablet.png'
import syrup from '../assets/syrup.jpg'
import ointment from '../assets/ointment.png'

const MedicineCard = ({ med, handleAddMedicine }) => {

    const getImage = (imageType) => {
        const imageSrc = {
            tablet: tablet,
            ointment: ointment,
            syrup: syrup
        }
        return imageSrc[imageType] || tablet
    }

    return (
        <button
            key={med.id}
            className="cursor-pointer border border-gray-300 rounded-lg overflow-hidden flex flex-col items-center justify-between w-32 bg-white shadow-sm hover:shadow-md transition relative"
            onClick={() => handleAddMedicine(med)}
        >
            {/* Quantity */}
            <span className="bg-blue-950 text-white border-b border-r border-gray-200 rounded-lg text-xs px-2 py-1 absolute top-0 left-0">
                230
            </span>

            {/* Image Section */}
            <div className="w-full h-32 flex items-center justify-center bg-gray-50">
                <img
                    src={getImage(med.productForm)}
                    alt={med.brandName}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-start items-start w-full px-2 py-2">
                <span className="text-sm font-medium text-blue-950">{med.brandName}</span>
                <span className="text-xs text-gray-600">{med.saltName}</span>
            </div>
        </button>
    )
}

export default MedicineCard
