import React from 'react'
import '../css/property.css'

const ButtonGps = ({ filled, position }) => {
    return (
        <div
            className={filled ? "accountmenu__cards__btngps_filled" : "accountmenu__cards__btngps_nonfilled"}
            style={{marginLeft: position === 'right' ? 'auto' : '', marginRight: position === 'left' ? 'auto' : ''}}
        >
            <img src={require('../icons/location.svg')} className="accountmenu__cards__btngps__icon" alt="" />
            <span className="accountmenu__cards__btngps__text">
                Найти по GPS
            </span>
        </div>
    )
}

export default ButtonGps