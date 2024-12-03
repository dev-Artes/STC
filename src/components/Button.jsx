import React from 'react'

const Button = ({ color, hoverColor, content, textColor, onClick, type }) => {
    return (
        <button 
            onClick = { onClick }
            className = {`bg-${color} hover:bg-${hoverColor} text-${textColor} font-bold py-2 px-4 rounded`}
            type={ type }
            >
            { content }
        </button>
    )
}

export default Button
