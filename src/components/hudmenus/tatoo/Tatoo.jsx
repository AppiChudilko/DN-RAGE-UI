import React from 'react'
import './css/main.css'
import Header from './components/Header';
import CatalogItem from './components/CatalogItem'
import FlatButton from '../gunshop/uikit/FlatButton'

class Tatoo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            bgcolor: '#252525',
            type: 1,
            selected: -1,
            items: [
                {name: 'Прическа', price: 111},
                {name: 'Борода', price: 1123},
                {name: 'Линзы', price: 12312},
                {name: 'Брови', price: 1112},
                {name: 'Прическа', price: 111},
                {name: 'Борода', price: 1123},
                {name: 'Линзы', price: 12312},
                {name: 'Брови', price: 1112},
                {name: 'Прическа', price: 111},
                {name: 'Борода', price: 1123},
                {name: 'Линзы', price: 12312},
                {name: 'Брови', price: 1112},
                {name: 'Прическа', price: 111},
                {name: 'Борода', price: 1123},
                {name: 'Линзы', price: 12312},
                {name: 'Брови', price: 1112},
                {name: 'Прическа', price: 111},
                {name: 'Борода', price: 1123},
                {name: 'Линзы', price: 12312},
                {name: 'Брови', price: 1112},
            ]
        }
    }

    setSelected = (value) => {
        this.setState({
            selected: value
        })
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="tatoo__container">
                <div className="tatoo__content" style={{backgroundColor: this.state.bgcolor}}>
                    <Header
                        banner="bs_hair"
                        title="Добро пожаловать"
                        subtitle="Выберите услугу"
                    />
                    <div className="tatoo__content__list">
                        {this.state.items.map((item, index) => (
                            <CatalogItem
                                key={`tatoo__content__list-${index}`}
                                name={item.name}
                                setSelected={() => this.setSelected(index)}
                            />
                        ))}
                    </div>
                    <div className="tatoo__content__exitbtn__container">
                        <span className="tatoo__content__exitbtn" onClick={() => this.setState({show: false})}>
                            Назад
                        </span>
                    </div>
                </div>
                {(this.state.type === 1 && this.state.selected !== -1) && (
                <div className="tatoo__payment">
                    <span className="tatoo__payment__price">
                        {`Цена: ${this.state.items[this.state.selected].price} $`}
                    </span>
                    <FlatButton text="Оплатить наличкой" btncolor="#252525" customStyle={{paddingLeft: '1rem', paddingRight: '1rem', border: `0px`}} />
                    <FlatButton text="Оплатить картой" btncolor="#252525" customStyle={{paddingLeft: '1rem', paddingRight: '1rem', border: `0px`}} />
                </div>
                )}
            </div>
        )
    }
}

export default Tatoo