import React from 'react'
import '../css/faq.css'

const BigButton = ({ text, onPress, disabled, type }) => {

    /*

        type - 1 (красный градиент), 0 (голубой градиент)

    */

    if (disabled) {
        type = -1
    }

    let btnClass = ''
    
    switch (type) {
        case -1:
            btnClass = 'accountmenu__content__cards__bigbutton_disabled'
            break;
        case 0:
            btnClass = 'accountmenu__content__cards__bigbutton_blue'
            break;
        case 1:
            btnClass = 'accountmenu__content__cards__bigbutton_red'
            break;
        default:
            btnClass = 'accountmenu__content__cards__bigbutton_blue'
            break;
    }
    return (
        <div onClick={disabled ? null : onPress} className={btnClass}>
            <span className="accountmenu__content__cards__bigbutton__text">{text}</span>
        </div>
    )
}

export default BigButton