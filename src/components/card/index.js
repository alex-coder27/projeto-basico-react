import React from 'react'
import './style.css'

const Card = ({ label, color }) => {
    return (
        <p className='card' style={{ color: color }}>
            { label.toUpperCase()}
        </p>
    )
}

Card.defaultProps = {
    color: 'black',
    label: 'string'
}

export default Card