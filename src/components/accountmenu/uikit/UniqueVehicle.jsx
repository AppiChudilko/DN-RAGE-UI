import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'

const UniqueVehicle = ( props ) => {

    const [active, setActive] = useState(0)


    return (
        <div className="accountmenu__donation__kit__kitcontainer">
            <div className="accountmenu__donation__kit__kititem">
                                <div className="accountmenu__donation__kit__kititem__info">
                                    <React.Fragment>
                                        <div className="accountmenu__donation__kit__kititem__info__wrapper">
                                            <span className="accountmenu__donation__kit__kititem__name">{props.name}</span>
                                            <ol>
                                                {props.list.map((item, index) => (
                                                    <li key={`${item}-${index}`} className="accountmenu__content__cards__answer__li">{item}</li>
                                                ))}
                                            </ol>
                                        </div>
                                        <div className="accountmenu__donation__kit__kititem__img__wrapper">
                                            <img src={props.carchoice[0].img} className="accountmenu__donation__kit__kititem__img"  />
                                            <div className="accountmenu__donation__kit__kititem__img__wrapper__content">
                                                
                                                <div 
                                                    className="accountmenu__donation__kit__kititem__img__wrapper__name"
                                                >
                                                    {props.carchoice[0].name}
                                                </div>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </div>
                                <BigButton text={`Купить за ${props.price} DC`} />
                            </div>
        </div>
    )
}

export default UniqueVehicle