import React from 'react'
import './button.css'

const Button = ({label, sayLabel}) => {
    return <button className='btn' onClick={() => sayLabel(label)}>{label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV'
}

export default Button