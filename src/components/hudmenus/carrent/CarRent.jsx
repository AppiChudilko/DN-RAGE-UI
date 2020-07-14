import React from 'react'
import './css/main.css'
import Header from './components/Header';
import Car from './components/Car';

class CarRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            banner: 'bs_hair',
            bgcolor: '#252525',
            cars: [
                {
                    img: '',
                    price: 200,
                    name: 'Taxi'
                },
                {
                    img: '',
                    price: 444,
                    name: 'Bus'
                },
                {
                    img: '',
                    price: 200,
                    name: 'Taxi'
                },
                {
                    img: '',
                    price: 444,
                    name: 'Bus'
                },
                {
                    img: '',
                    price: 200,
                    name: 'Taxi'
                },
                {
                    img: '',
                    price: 444,
                    name: 'Bus'
                },
                {
                    img: '',
                    price: 200,
                    name: 'Taxi'
                },
                {
                    img: '',
                    price: 444,
                    name: 'Bus'
                }
            ]
        }
    }

    setHide = () => {
        this.setState({
            show: false
        })
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="carrent__container">
                <div className="carrent__content">
                    <Header
                        bgcolor={this.state.bgcolor}
                        banner={this.state.banner}
                        title="Бери любую машину по вкусу"
                        setHide={this.setHide}
                    />
                    <div className="carrent__content__list__container">
                        <div className="carrent__content__list">
                        {this.state.cars.map((item, index) => (
                            <Car
                                price={item.price}
                                name={item.name}
                                img={item.img}
                                key={`carrent__content__list__item-${index}`}
                                btnbg="#000"
                            />
                        ))}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CarRent