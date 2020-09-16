import React from 'react'
import '../css/donation.css'
import BigButton from './BigButton'
import { useState } from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'
import ServiceItem from './ServiceItem'

const ServicesDonate = ( props ) => {
    console.log(props)
    return (
        <div className="accountmenu__donation__about">
            <div className="govmenu__worker__info about__donation">
                {props[0].map((item, index) => (
                    <ServiceItem {...item} />
                ))}
            </div>
        </div>
    )
}

export default ServicesDonate