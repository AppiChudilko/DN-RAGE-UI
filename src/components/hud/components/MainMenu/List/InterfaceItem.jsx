import React from 'react'
import Checkbox from '../uikit/Checkbox'
import ListMenu from '../uikit/ListMenu'
import Caption from '../uikit/Caption'

const uikit = {
    checkbox: Checkbox,
    listmenu: ListMenu,
    caption: Caption
}

export default function InterfaceItem(item) {

    const TypeComponent = uikit[item.data.type.toLowerCase()]
    
    return (
        <TypeComponent selected={item.selected} data={item} key={item.id.toString()} />
    )
}