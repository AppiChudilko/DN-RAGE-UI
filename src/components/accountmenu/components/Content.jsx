import React from 'react'
import '../css/content.css'
import NavigationPanel from '../uikit/NavigationPanel'
import Cards from '../uikit/Cards'

const Content = ({ activeIndex, panels, page, onChangePage, handleKeyPress, generalList, generalData, propertyHouse, propertyBusiness, propertyCars, reportData, questData , settingsData, settingsActive }) => {
    
    return (
        <div className="accountmenu__content">
            <NavigationPanel
                panels={panels}
                activePage={activeIndex}
                onChangePage={onChangePage}
                handleKeyPress={handleKeyPress}
            />
            <Cards
                page={page}
                onChangePage={onChangePage}
                generalList={generalList}
                generalData={generalData}
                propertyHouse={propertyHouse}
                propertyBusiness={propertyBusiness}
                propertyCars={propertyCars}
                reportData={reportData}
                questData={questData}
                settingsData={settingsData}
                settingsActive={settingsActive}
            />
        </div>
    )
}

export default Content