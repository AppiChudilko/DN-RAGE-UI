import React from 'react'
import '../css/header.css'

const Header = ({ banner, title, bgcolor, setHide }) => {
    return (
        <div
            className="carrent__content__header"
            style={{
                backgroundColor: bgcolor
            }}
        >
        <img src={`https://dednet.ru/client/images/banners/${banner}.png`} className="carrent__content__header__banner" alt="" />
        <span className="carrent__content__header__title">
            {title}    
        </span>
        <span
            className="carrent__content__header__exitbtn"
            onClick={setHide}
        >
            Закрыть    
        </span>                
        </div>
    )
}

export default Header