import React from 'react'
import NavigationPanel from './components/NavigationPanel.jsx'
import CatalogPanel from './components/CatalogPanel.jsx'
import StatsPanel from './components/StatsPanel.jsx'
import './css/main.css'

export default class GunShop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            selected: 0,
            selectedCatalog: -1,
            banner: '',
            catalog: [
                {
                    title: 'Оружие',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'url картинки',
                            menu: [], //доп меню, но с ним позже
                            count: 1, //С этим тоже позже
                            price: 1111,
                            params: {},
                            sale: 24
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пиротехническая установка',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'url картинки',
                            menu: [], //доп меню, но с ним позже
                            count: 1, //С этим тоже позже
                            price: 2222,
                            params: {},
                            sale: 20
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'url картинки',
                            menu: [], //доп меню, но с ним позже
                            count: 1, //С этим тоже позже
                            price: 3333,
                            params: {},
                            sale: 11
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'url картинки',
                            menu: [], //доп меню, но с ним позже
                            count: 1, //С этим тоже позже
                            price: 4444,
                            params: {},
                            sale: 0
                        },
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'url картинки',
                            menu: [], //доп меню, но с ним позже
                            count: 1, //С этим тоже позже
                            price: 5555,
                            params: {},
                            sale: 1
                        }
                    ]
                },
                {
                    title: 'Боеприпасы',
                    items: [
                        { //Если кликаем сюда, то открывается меню справа (Там где покупка)
                            title: 'Пистолет',
                            desc: 'Описание',
                            descFull: 'Полное описание~br~Полное описание',
                            img: 'url картинки',
                            menu: [], //доп меню, но с ним позже
                            count: 1, //С этим тоже позже
                            price: 5000,
                            params: {},
                            sale: 24
                        }
                    ]
                }
            
            ]
        }
    }

    setHide = () => {
        this.setState({
            show: false
        })
    }

    setActive = (value) => {
        this.setState({
            selected: value,
            selectedCatalog: -1
        })
    }

    setActiveCatalog = (value) => {
        this.setState({
            selectedCatalog: value
        })
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="hmenu__container">
                <div className="hmenu__gunshop">
                    <NavigationPanel 
                        selected={this.state.selected}
                        bgcolor="#252525"
                        activecolor="#000"
                        catalog={this.state.catalog}
                        setHide={this.setHide}
                        banner="bs_hair"
                        setActive={this.setActive}
                    />
                    <CatalogPanel 
                        selected={this.state.selected}
                        catalog={this.state.catalog}
                        selectedCatalog={this.state.selectedCatalog}
                        setActiveCatalog={this.setActiveCatalog}
                    />
                    <StatsPanel 
                        selected={this.state.selected}
                        catalog={this.state.catalog}
                        selectedCatalog={this.state.selectedCatalog}
                        btncolor="#252525"
                    />
                </div>
            </div>
        )
    }
}