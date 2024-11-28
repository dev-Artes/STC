import React from 'react'

const Button = ({ color, hoverColor, content, textColor, onClick }) => {
    return (
        <button 
            onClick = { onClick }
            className = {`bg-${color} hover:bg-${hoverColor} text-${textColor} font-bold py-2 px-4 rounded`}
            >
            { content }
        </button>
    )
}

export default Button
