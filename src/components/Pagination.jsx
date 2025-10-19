import React from 'react'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    return (

        <div className="flex justify-between items-center p-4" >
            <p className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
            </p>
            <div className="space-x-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                >
                    Prev
                </button>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div >
    )
}

export default Pagination
