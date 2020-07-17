import React from 'react'
import '../css/item.css'

const CatalogItem = ({ name, setSelected }) => (
    <span className="tatoo__content__list__item" onClick={setSelected}>
        {name}
    </span>
)

export default CatalogItem