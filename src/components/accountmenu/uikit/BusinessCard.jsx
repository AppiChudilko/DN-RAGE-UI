import React from 'react'
import '../css/property.css'
import ButtonGps from './ButtonGps'

const BusinessCard = ({ type, name, price, address, doors, title }) => {
    return (
        <div className="accountmenu__content__cards__business">
            <div className="accountmenu__content__cards__business__img__container" style={{backgroundImage: `url(https://sun9-29.userapi.com/MI39cq7ufrkPh8WX12Y7D9PB81MgFxeszWm9pQ/JhtY99iL4R8.jpg)`}}>
                <div className={type === 0 ? "accountmenu__content__cards__business__img__bg" : "accountmenu__content__cards__business__img__bg_btype"}>
                    <img 
                        src={require(type === 0 ? "../icons/company.svg" : "../icons/briefcase.svg")}
                        className="accountmenu__content__cards__business__img"
                    />
                </div>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__type">
                    {title}
                </span>
                <span className="accountmenu__content__cards__business__gprice">
                    ГОС. цена
                </span>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__name">
                    {name}
                </span>
                <span className="accountmenu__content__cards__business__gprice__text">
                    {`$ ${price.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                </span>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__address">
                    Адрес
                </span>
                <span className="accountmenu__content__cards__business__doors">
                    Двери
                </span>
            </div>
            <div className="accountmenu__content__cards__business__info__container">
                <span className="accountmenu__content__cards__business__address__text">
                    {address}
                </span>
                <span className="accountmenu__content__cards__business__doors__text">
                    {doors}
                </span>
            </div>
            <ButtonGps filled={true} position="left" />
        </div>
    )
}

export default BusinessCard