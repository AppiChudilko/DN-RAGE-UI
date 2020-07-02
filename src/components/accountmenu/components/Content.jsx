import React from 'react'
import '../css/content.css'
import NavigationPanel from '../uikit/NavigationPanel'
import Cards from '../uikit/Cards'

const Content = ({ page, onChangePage, handleKeyPress, generalList, generalData, propertyHouse, propertyBusiness, propertyCars }) => {
    return (
        <div className="accountmenu__content">
            <NavigationPanel
                activePage={page}
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
            />
        </div>
    )
}

export default Content