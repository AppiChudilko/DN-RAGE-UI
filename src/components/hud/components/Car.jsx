import React from 'react';
import EventManager from "../../../EventManager";

import Draggable from '../Draggable'

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            isShowSmall: true,
            light: false,
            door: false,
            engine: false,
            fuel: 100,
            fuelType: 'L',
            max_fuel: 100,// Максимальная вместимость топливного бака
            speed: 0,
            speedLabel: 'MP/H',

            deg: -45,
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Car.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {

        EventManager.addHandler('hudc', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({show: value.isShow});
                this.setState({isShowSmall: value.isShowSmall});
                this.setState({light: value.light});
                this.setState({door: value.door});
                this.setState({engine: value.engine});
                this.setState({fuel: value.fuel});
                this.setState({fuelType: value.fuelType});
                this.setState({max_fuel: value.max_fuel});
                this.setState({speed: value.speed});
                this.setState({speedLabel: value.speedLabel});
                this.setState({background: value.background});
            } else return;
        })

        this.speed();
    }

    componentWillUnmount() {

        EventManager.removeHandler('hudc');

    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.speed !== prevState.speed) {
            this.speed();
        }
    }

    speed() { // Чуть позже добавлю перерисованный спидометр, ибо текущий с погрешностью

        let speedProcent = this.state.speed / 400 * 100;
        let deg = 180 * (speedProcent / 100);
        this.setState({deg: deg - 45});
    }

    render() {
        let fuel_liner = (this.state.fuel * 100) / this.state.max_fuel;
        const speed_score = {
            transform: `rotate(${this.state.deg}deg)`,
            borderBottomColor: this.state.color,
            borderLeftColor: this.state.color
        };

        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <Draggable id="car-speedbox" isShowSmall={this.state.isShowSmall}>
                    <div className={this.state.isShowSmall ? 'hide' : 'speedbox-main-small'}>
                        <div className="speedbox">
                            <div className="speedbox-score" style={speed_score}></div>
                            <div className="speedbox-groove"></div>
                        </div>
                        <div className="backg-speed">
                            <div className="speed-txt">{this.state.speed}</div>
                        </div>
                    </div>
                </Draggable>
                <Draggable id="car-speedbox-small" isShowSmall={this.state.isShowSmall}>
                    <div className={this.state.isShowSmall ? 'speedbox-small' : 'hide'}>
                        <div className="speed-txt">{this.state.speed}</div>
                        {this.state.speedLabel}
                    </div>
                </Draggable>
                <div className="car-hud">
                    <Draggable id="car-elements">
                        <div className="elements-auto"
                            style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className={this.state.light ? 'light-auto use-mic' : 'light-auto'}></div>
                            <div className={this.state.door ? 'on-door-auto' : 'off-door-auto'}></div>
                            <div className={this.state.engine ? 'key-auto use-mic' : 'key-auto'}></div>
                        </div>
                    </Draggable>
                    <Draggable id="car-fuel">
                        <div className="bak-oil" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                            <div className="oil-text">
                                <div className="oil-tt">Топливо</div>
                                <div className="oil-num">{this.state.fuel} {this.state.fuelType}</div>
                            </div>
                            <div className="oil-liner">
                                <div className="full-liner"
                                    style={{width: fuel_liner + '%', background: this.state.color}}></div>
                            </div>
                        </div>
                    </Draggable>
                </div>

            </React.Fragment>
        )
    }
}

export default Car;
