import React from 'react'
import '../css/cards.css'
import General from '../components/General'
import Property from '../components/Property'
import Faq from '../components/Faq'
import Quests from '../components/Quests'
import Settings from '../components/Settings'
import Reports from '../components/Reports'

const Cards = ({ page }) => {
    return (
        <div className="accountmenu__content__cards">
            {page === 0 && (
                <General />
            )}
            {page === 1 && (
                <Property />
            )}
            {page === 2 && (
                <Faq />
            )}
            {page === 3 && (
                <Reports />
            )}
            {page === 4 && (
                <Settings />
            )}
            {page === 5 && (
                <Quests />
            )}
        </div>
    )
}

export default Cards