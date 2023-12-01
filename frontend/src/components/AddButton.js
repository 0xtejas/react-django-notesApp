import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";



const AddButton = () => {
  return (
    <div>
        <Link to='/note/new' className='floating-button'>
            <IoMdAdd />
        </Link>
    </div>
  )
}

export default AddButton