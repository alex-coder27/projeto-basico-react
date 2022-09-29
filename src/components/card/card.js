import React from 'react'
import './card.css'

const Card = ({children, color}) => {
    return (
        <div className='card' style={{ color: color, textTransform: 'uppercase' }}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    color: 'black'
}

export default Card