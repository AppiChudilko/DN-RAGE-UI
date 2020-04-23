import React from 'react'
import Checkbox from '../uikit/Checkbox'
import ListMenu from '../uikit/ListMenu'
import Caption from '../uikit/Caption'

const uikit = {
    0: Checkbox,
    1: ListMenu,
    2: Caption
};

export default function InterfaceItem(item) {

    const TypeComponent = uikit[item.data.type]
    
    return (
        <TypeComponent onChangeCheckbox={item.changeCheckbox} selected={item.selected} data={item} id={item.id} key={item.id.toString()} />
    )
}