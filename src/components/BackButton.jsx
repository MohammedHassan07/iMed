import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const BackButton = ({ url }) => {
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate(url)
    }

    return (
        <button
            onClick={handleBackClick}
            className="text-sm cursor-pointer flex items-center gap-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
            <ArrowLeft size={18} />
            Back
        </button>
    )
}

export default BackButton
