import React from 'react'
import '../css/car.css'

const Car = ({ name, price, btnbg, sale }) => {
    return (
        <div className="carrent__content__list__item">
            <div className="carrent__content__list__img__container">
                <img alt="" src={`https://dednet.ru/client/images/carssm/${name}_1.jpg`} className="carrent__content__list__img__item" />
                <div className="carrent__content__list__img__container__data">
                    <span style={{backgroundColor: btnbg}} className="carrent__content__list__item__name">{name}</span>
                    {sale > 0 && (<span className="carrent__content__list__item__sale">{`- ${sale}%`}</span>)}
                </div>
            </div>
            <div className="carrent__content__list__item__info">
                <span className="carrent__content__list__item__info__price">
                    {`$${price}`}
                </span>
                <div className="carrent__content__list__item__info__rent">
                    <span className="carrent__content__list__item__info__rentbtn">
                        Арендовать по карте
                    </span>
                    <span className="carrent__content__list__item__info__rentbtn">
                        Арендовать за наличные
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Car