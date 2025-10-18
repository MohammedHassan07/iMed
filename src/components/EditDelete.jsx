import React from 'react'
import { Pencil, Trash } from 'lucide-react'

const EditDelete = ({handleOpenModal, item}) => {

  return (
    <>
      <span className="text-blue-500 cursor-pointer  hover:text-blue-950">
        <Pencil onClick={() => handleOpenModal("update", item)} size={20} />
      </span>

      <span className="text-red-500 cursor-pointer  hover:text-red-700">
        <Trash onClick={() => handleOpenModal("delete", item)} size={20} />
      </span>
    </>
  )
}

export default EditDelete
