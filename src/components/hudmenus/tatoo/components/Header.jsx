import React from 'react'
import '../css/header.css'

const Header = ({ banner, title, subtitle }) => (
    <div className="tatoo__content__header">
        <img src={`https://dednet.ru/client/images/banners/${banner}.png`} className="tatoo__content__header__img" />
        <span className="tatoo__content__header__title">
            {title}
        </span>
        <span className="tatoo__content__header__subtitle">
            {subtitle}
        </span>
    </div>
)

export default Header