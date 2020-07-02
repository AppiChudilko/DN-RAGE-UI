import React from 'react'
import '../css/property.css'
import LineData from '../uikit/LineData'
import StatContainer from '../uikit/StatContainer'
import InfoBlock from '../uikit/InfoBlock'
import ProgressBar from '../uikit/ProgressBar'
import ProgressBarCircle from '../uikit/ProgressBarCircle'
import Card from '../uikit/Card'
import ButtonGps from '../uikit/ButtonGps'
import Button from '../uikit/Button'
import BusinessCard from '../uikit/BusinessCard'
import CarCard from '../uikit/CarCard'

const Property = ({  }) => {

    const house = {
        type: 'Квартира',
        name: 'Name Apartment',
        address: 'Саут-Рокфорд-драйв,  д. 0112, кв.13',
        doors: 'Закрыто',
        roommate: 2,
        carplace: 10,
        gprice: '1522000'
    }

    const business = [
        {
            type: 0,
            price: '1250000',
            address: 'Саут-Рокфорд-драйв,  д. 0112, кв.13',
            doors: 'Закрыты'
        },
        {
            type: 1,
            price: '1777000',
            address: 'Саут-Рокфорд-драйв,  д. 0112, кв.14',
            doors: 'Открыты'
        }
    ]

    const cars = [
        {
            type: 'Автомобиль',
            name: 'Neon',
            vin: 1337,
            carclass: 'A',
            def: 'Есть',
            number: 'NUMBER'
        },
        {
            type: 'Мотоцикл',
            name: 'Neon',
            vin: 1337,
            carclass: 'A',
            def: 'Есть',
            number: 'NUMBER'
        }
    ]

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item">
                <div className="accountmenu__content__cards__item__container">
                    <div className="accountmenu__content__cards__house">
                        <span className="accountmenu__content__cards__house__type">
                            {house.type}
                        </span>
                        <span className="accountmenu__content__cards__house__name">
                            {house.name}
                        </span>
                        <div className="accountmenu__content__cards__house__address">
                            <span className="accountmenu__content__cards__house__address__text">
                                Адрес
                            </span>
                            <span className="accountmenu__content__cards__house__address__name">
                                {house.address}
                            </span>
                        </div>
                        <div style={{paddingLeft: '3.5rem', paddingRight: '3.5rem', marginLeft: 'auto', marginTop: '2%', marginBottom: '2%'}} >
                            <ButtonGps filled={false} />
                        </div>
                        <LineData
                            leftinfo="Двери"
                            rightinfo={house.doors}
                        />
                        <LineData
                            leftinfo="Сожителей"
                            rightinfo={house.roommate}
                        />
                        <LineData
                            leftinfo="Машиномест"
                            rightinfo={house.carplace}
                        />
                        <div className="accountmenu__content__cards__house__hprice">
                            <span className="accountmenu__content__cards__text">
                                Гос цена
                            </span>
                            <div className="accountmenu__content__cards__house__hprice__sell">
                                <div className="accountmenu__content__cards__house__hprice__sell__linebtn">
                                    <img src={require('../icons/money-bag.svg')} className="accountmenu__content__cards__house__hprice__sell__icon" />
                                    <span className="accountmenu__content__cards__house__hprice__sell__text">{`$ ${house.gprice.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}</span>
                                </div>
                                <Button
                                    text="Продать"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__item">
                <div className="accountmenu__list__business">
                    {business.map((item, index) => (
                    <BusinessCard
                        {...item}
                        key={`business-list-` + index}
                    />
                    ))}
                </div>
            </div>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__headerts" style={{paddingLeft: '3.5rem', paddingRight: '3.5rem', marginTop: '5%', marginBottom: '5%'}}>
                    <span className="accountmenu__content__cards__title">
                        Транспорт
                    </span>
                    <span className="accountmenu__content__cards__title__count">
                        {`кол-во: ${cars.length} / 50`}
                    </span>
                </div>
                <div className="accountmenu__content__cards__cars__list">
                    {cars.map((item, index) => (
                        <CarCard
                            {...item}
                            key={`car-list-` + index}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Property