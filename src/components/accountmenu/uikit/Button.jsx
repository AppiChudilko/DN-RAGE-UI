import React from 'react'
import '../css/property.css'

const Button = ({ text, onPress }) => {
    return (
        <div className="accountmenu__content__cards__button" onClick={onPress}>
            <span className="accountmenu__content__cards__button__text">{text}</span>
        </div>
    )
}

export default Button