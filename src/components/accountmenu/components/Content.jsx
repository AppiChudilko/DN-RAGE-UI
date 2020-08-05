import React from 'react'
import '../css/content.css'
import NavigationPanel from '../uikit/NavigationPanel'
import Cards from '../uikit/Cards'

const Content = ({ initValueReports, setActivePage, activeIndex, panels, page, onChangePage, handleKeyPress, generalList, generalData, propertyHouse, propertyBusiness, propertyCars, reportData, questData , settingsData, settingsActive }) => {
    
    return (
        <div className="accountmenu__content">
            <NavigationPanel
                panels={panels}
                activePage={activeIndex}
                onChangePage={onChangePage}
                handleKeyPress={handleKeyPress}
            />
            <Cards
                initValueReports={initValueReports}
                page={page}
                setActivePage={setActivePage}
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