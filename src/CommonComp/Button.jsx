import React from 'react'

const Button = ({onClick, label,FillAnyColor }) => {
 
    return (
                <button className={`py-2 px-6 ${FillAnyColor}`} onClick={onClick}>
                    <span >{label}</span>
                    </button>
    )
}

export default Button;
