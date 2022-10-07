import React from 'react'
import './style.css'

const Button = ({ label= "Baixar CV"}) => {
    const sayLabel = () => {
        alert('A label desse botão é: ' + label)
    }
    return <button className='btn' onClick={() => sayLabel(label)}>{label}</button>
}


export default Button