import React from 'react'

const Button = ({ bgColor, color, size, text, icon, customFunc, borderRadius }) => {
  return (
    <button 
    type="button"
    onClick={customFunc}
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    icon={icon}
    >
      {text}
    </button>
  )
}

export default Button