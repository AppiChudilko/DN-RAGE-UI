import React from 'react'
import '../css/content.css'
import NavigationPanel from '../uikit/NavigationPanel'
import Cards from '../uikit/Cards'

const Content = ({ page, onChangePage, handleKeyPress }) => {
    return (
        <div className="accountmenu__content">
            <NavigationPanel
                activePage={page}
                onChangePage={onChangePage}
                handleKeyPress={handleKeyPress}
            />
            <Cards page={page} onChangePage={onChangePage} />
        </div>
    )
}

export default Content