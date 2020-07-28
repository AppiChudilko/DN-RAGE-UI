import React from 'react'
import '../css/item.css'

const CatalogItem = ({ name, setSelected, sale }) => (
    <div className="tatoo__content__list__item" onClick={setSelected}>
        <span className="tatoo__content__list__item__name">
            {name}
        </span>
        {sale > 0 && (
        <span className="tatoo__content__list__item__sale">
            {`- ${sale}%`}
        </span>
        )}
    </div>
)

export default CatalogItem