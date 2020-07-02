import React from 'react'
import '../css/faq.css'

const Question = ({ active, index, text, setActive }) => {
    return (
        <div
            onClick={setActive}
            className={active === index ? "accountmenu__cards__question__active" : "accountmenu__cards__question"}
        >
            <div className="accountmenu__cards__question__icon__container">
                <img src={require('../icons/help.svg')} className="accountmenu__cards__question__icon" />
            </div>
            <span className="accountmenu__cards__question__text">
                {text}
            </span>
        </div>
    )
}

export default Question