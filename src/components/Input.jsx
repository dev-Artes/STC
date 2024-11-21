import React from 'react'

const Input = ({ id, name, checked, type, placeholder, value, handleChange }) => {
  return ( 
    <input
        className="border rounded p-2 w-full mb-4"
        type = { type }
        name = { name }
        id = { id }
        checked = { checked }
        placeholder = { placeholder }
        value = { value }
        onChange = { handleChange }
        required
    />
  )
}

export default Input
