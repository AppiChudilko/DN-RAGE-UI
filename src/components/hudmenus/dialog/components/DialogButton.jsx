import React from 'react'
import '../css/main.css'

const DialogButton = ({ text, bgcolor }) => {
    return (
        <span className="dialog__content__buttons__item" style={{backgroundColor: bgcolor}}>
            {text}
        </span>
    )
}

export default DialogButton