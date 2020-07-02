import React from 'react'
import '../css/faq.css'
import LineData from '../uikit/LineData'
import StatContainer from '../uikit/StatContainer'
import InfoBlock from '../uikit/InfoBlock'
import ProgressBar from '../uikit/ProgressBar'
import ProgressBarCircle from '../uikit/ProgressBarCircle'
import Card from '../uikit/Card'
import ButtonGps from '../uikit/ButtonGps'
import BigButton from '../uikit/BigButton'
import BusinessCard from '../uikit/BusinessCard'
import CarCard from '../uikit/CarCard'
import Question from '../uikit/Question'
import { useState } from 'react'

const Faq = ({  }) => {

    const questions = [
        {text: "как играть?", answer: `
        <p class="accountmenu__content__cards__answer__text">
            Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений.\n
            Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании систем массового участия.Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений.\n
            Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании систем массового участия.
        </p>
        <ol>
        <li class="accountmenu__content__cards__answer__li">Бизнес</li>
        <li class="accountmenu__content__cards__answer__li">Дом</li>
        <li class="accountmenu__content__cards__answer__li">Офис</li>
        </ol>
        `
        },
        {text: "как прокачать скилл хакерства?", answer: `
        <p class="accountmenu__content__cards__answer__text">
            Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений.\n
            Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании систем массового участия.Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке дальнейших направлений развития. Разнообразный и богатый опыт реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений.\n
            Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании систем массового участия.
        </p>
        <ol>
        <li class="accountmenu__content__cards__answer__li">Бизнес</li>
        <li class="accountmenu__content__cards__answer__li">Дом</li>
        <li class="accountmenu__content__cards__answer__li">Офис</li>
        </ol>
        `
        }
    ]

    const [active, setActive] = useState(0)

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item question accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <span className="accountmenu__content__cards__header__name">
                        FAQ
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    <span className="accountmenu__content__cards__title">
                        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                    </span>
                    <div className="accountmenu__cards__question__container">
                        {questions.map((item, index) => (
                            <Question
                                text={item.text}
                                key={index.toString()}
                                index={index}
                                active={active}
                                setActive={() => setActive(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__bitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__container answer">
                    <div
                        className="accountmenu__content__cards__answer__img"
                        style={{backgroundImage: `url('${require('../img/question-bg.png')}')`}}
                    />
                    <div className="accountmenu__cards__question__icon__container__active">
                        <img src={require('../icons/help.svg')} className="accountmenu__cards__question__icon__active" />
                    </div>
                    <div className="accountmenu__content__cards__answer__title__container">
                        <span className="accountmenu__content__cards__answer__title">
                            {questions[active].text}
                        </span>
                    </div>
                    <div
                        className="accountmenu__content__cards__answer__text__container" 
                        dangerouslySetInnerHTML={{__html: questions[active].answer}}
                    />
                </div>
            </div>
            <div className="accountmenu__content__cards__sitem accountmenu__scrollable">
                <div className="accountmenu__content__cards__container">
                    <span className="accountmenu__content__cards__title">
                        Не нашли ответ на свой вопрос?
                    </span>
                    <div className="accountmenu__content__cards__ptext__container">
                        <span className="accountmenu__content__cards__ptext">
                            Задайте его нашим администраторам
                        </span>
                    </div>
                    <BigButton
                        text="задать вопрос"
                    />
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Faq