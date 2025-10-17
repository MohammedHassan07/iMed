import React from 'react'

const MedicineCard = ({ med, handleAddMedicine }) => {
    return (
        <>

            {/* card */}
            <div key={med.id} className='cursor-pointer border-1 border-gray-400 rounded-lg relative w-30  flex flex-col items-center justify-center '
                onClick={() => handleAddMedicine(med)}
            >

                {/* quantity */}
                <span className='bg-blue-950 text-white rounded-lg text-xs p-1 absolute -top-0.5 left-0'>230</span>

                {/* image */}
                <div className='border-b-1 border-b-gray-300 w-full h-[50%] p-3 flex items-center justify-center'>
                    <img
                        src={med.image}
                        alt={med.brandName}
                        className=' '
                    />
                </div>

                <div className='flex flex-col justify-start items-center w-full px-2 mt-1'>

                    <span className='text-sm text-blue-950 w-full'>{med.brandName}</span>
                    <span className='text-xs text-gray-600 w-full'>{med.saltName}</span>
                </div>

            </div>

        </>
    )
}

export default MedicineCard
