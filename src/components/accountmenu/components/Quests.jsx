import React from 'react'
import '../css/quests.css'
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
import { useState } from 'react'
import Quest from '../uikit/Quest'
import ButtonOver from '../uikit/ButtonOver'
import ButtonDone from '../uikit/ButtonDone'

const Quests = ({ quests }) => {

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <span className="accountmenu__content__cards__header__name">
                        Квесты
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    <span className="accountmenu__content__cards__title">
                        начни выполнять задания и получай награды
                    </span>
                    <div className="accountmenu__cards__question__container">
                        {quests.map((item, index) => (
                            <Quest
                                title={item.title}
                                subtitle={item.subtitle}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__questinfo__container">
                    <img src={require("../img/quest-bg.png")} className="accountmenu__content__cards__questinfo__img__container" alt="" />
                    <div className="accountmenu__content__cards__questinfo__header">
                        <span className="accountmenu__content__cards__questinfo__header__name">
                            {quests[active].title}
                        </span>
                        <span className="accountmenu__content__cards__questinfo__header__count">
                            {quests[active].subtitle}
                        </span>
                    </div>
                    <div className="accountmenu__content__cards__questinfo__list">
                        {quests[active].tasks.map((item, index) => (
                            <div className="accountmenu__content__cards__questinfo__list__item" key={index.toString() + quests[active].title}>
                                <span className="accountmenu__content__cards__questinfo__item__name">{`${item.title}`}</span>
                                <span className="accountmenu__content__cards__questinfo__item__info">{item.text}</span>
                                <div className="accountmenu__content__cards__questinfo__item__btmdata">
                                    <span className="accountmenu__content__cards__questinfo__item__reward">{`Награда: ${item.reward}`}</span>
                                    {item.complete === 2 ? <ButtonOver text="Не доступно" /> : item.complete === 1 ? <Button onClick={() => {
                                        try {
                                            mp.trigger('client:menuList:quest:callback', item.posx, item.posy); // eslint-disable-line
                                        }
                                        catch (e) {}
                                    }} text="Проложить путь" /> : <ButtonDone text="Завершено" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Quests