import React from 'react'

export const InputField = ({label, type, onchange, value}) => {
  return (
    <div className="input_container">
    <label className="input_label"><span className="label_text">{label}</span>
    <input
    type={type}
    onChange={onchange}
    value={value}
    />
    </label>
 </div>
  )
}
