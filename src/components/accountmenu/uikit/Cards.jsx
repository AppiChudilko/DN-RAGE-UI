import React from 'react'
import '../css/cards.css'
import General from '../components/General'
import Property from '../components/Property'
import Faq from '../components/Faq'
import Quests from '../components/Quests'
import Settings from '../components/Settings'
import Reports from '../components/Reports'

const Cards = ({ page, onChangePage, generalList, generalData , propertyHouse , propertyBusiness, propertyCars, reportData, questData, settingsData }) => {
    return (
        <div className="accountmenu__content__cards">
            {page === 0 && (
                <General listElements={generalList} accountData={generalData} />
            )}
            {page === 1 && (
                <Property house={propertyHouse} business={propertyBusiness} cars={propertyCars} />
            )}
            {page === 2 && (
                <Faq onChangePage={onChangePage} />
            )}
            {page === 3 && (
                <Reports data={reportData} />
            )}
            {page === 4 && (
                <Settings data={settingsData} />
            )}
            {page === 5 && (
                <Quests quests={questData} />
            )}
        </div>
    )
}

export default Cards