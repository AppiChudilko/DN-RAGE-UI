import React from 'react'
import '../css/faq.css'

const BigButton = ({ text, onPress }) => {
    return (
        <div onClick={onPress} className="accountmenu__content__cards__bigbutton">
            <span className="accountmenu__content__cards__bigbutton__text">{text}</span>
        </div>
    )
}

export default BigButton