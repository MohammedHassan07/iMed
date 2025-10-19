import React from 'react'
import { ArrowLeft, FileDown } from "lucide-react";

const ExportPDF = () => {
    return (
        <button className="cursor-pointer text-sm flex items-center gap-2 px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-900">
            <FileDown size={18} />
            Export PDF
        </button>
    )
}

export default ExportPDF
