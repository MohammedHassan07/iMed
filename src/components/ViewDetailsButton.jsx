import { Eye } from 'lucide-react'

const ViewDetailsButton = ({ hadnleDetailClick, data }) => {
    return (
        <button>
            <Eye onClick={() => hadnleDetailClick(data)} size={18} className="text-yellow-600 cursor-pointer" />
        </button>
    )
}

export default ViewDetailsButton
