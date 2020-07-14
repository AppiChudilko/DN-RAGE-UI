import React from 'react'
import '../css/car.css'

const Car = ({ name, price, btnbg }) => {
    return (
        <div className="carrent__content__list__item">
            <div className="carrent__content__list__img__container" style={{backgroundImage: `url('https://dednet.ru/client/images/carssm/${name}_1.jpg')`}}>
                <span style={{backgroundColor: btnbg}} className="carrent__content__list__item__name">{name}</span>
            </div>
            <div className="carrent__content__list__item__info">
                <span className="carrent__content__list__item__info__price">
                    {`$${price}`}
                </span>
                <span className="carrent__content__list__item__info__rentbtn">
                    Арендовать
                </span>
            </div>
        </div>
    )
}

export default Car