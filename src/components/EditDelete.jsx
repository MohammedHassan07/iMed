import React from 'react'
import { Pencil, Trash } from 'lucide-react'

const EditDelete = ({ handleOpenModal, item, isDelete }) => {

  return (
    <>
      <button className="text-blue-500 cursor-pointer  hover:text-blue-950">
        <Pencil onClick={() => handleOpenModal("update", item)} size={20} />
      </button>

      {isDelete && <button className="text-red-500 cursor-pointer  hover:text-red-700">
        <Trash onClick={() => handleOpenModal("delete", item)} size={20} />
      </button>
      }
    </>
  )
}

export default EditDelete
