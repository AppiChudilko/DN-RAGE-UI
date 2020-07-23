import React from 'react'
import '../css/stats.css'
import FlatButton from '../uikit/FlatButton.jsx'

const StatsPanel = ({ catalog, selected, selectedCatalog, btncolor }) => {

    return (
        <div className="hmenu__gunshop__stats">
            {selectedCatalog !== -1 && (
                <React.Fragment>
                <span className="hmenu__gunshop__stats__name">{catalog[selected].items[selectedCatalog].title}</span>
                <div className="hmenu__gunshop__stats__params">
                    <span className="hmenu__gunshop__stats__about">
                        {`${catalog[selected].items[selectedCatalog].desc}`}
                    </span>
                </div>
                <div className="hmenu__gunshop__stats__price">
                    <div className="hmenu__gunshop__stats__price__text">
                        <span className="hmenu__gunshop__stats__price__gtext">
                            Цена
                        </span>
                        <span className="hmenu__gunshop__stats__price__gprice">
                            {`${catalog[selected].items[selectedCatalog].price}`}
                        </span>
                    </div>
                    <FlatButton onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:buyCard', JSON.stringify(catalog[selected].items[selectedCatalog].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} btncolor={btncolor} text="Оплатить по карте" />
                    <FlatButton onPress={() => {
                        try {
                            mp.trigger('client:shopMenu:buyCash', JSON.stringify(catalog[selected].items[selectedCatalog].params)); // eslint-disable-line
                        } catch (e) {
                            console.log(e);
                        }
                    }} btncolor={btncolor} text="Оплатить наличными" />
                </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default StatsPanel