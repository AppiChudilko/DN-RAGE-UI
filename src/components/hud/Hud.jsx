import React from 'react';
import './css/hud.css'
import './css/main.css'
import './css/checkbox.css'
import './css/menu.css'
import Player from './components/Player';
import Car from './components/Car';
import Gps from './components/Gps';
import Watch from './components/Watch';
import Logo from './components/Logo';
import MainMenu from './components/MainMenu';
import EventManager from "../../EventManager";
import Chat from './components/Chat';

class Hud extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        try {
            mp.trigger('client:ui:debug', 'Hud.jsx', error, errorInfo); // eslint-disable-line
        }
        catch (e) {

        }
    }

    componentDidMount() {
        EventManager.addHandler('hud', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hud');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="hud-main">
                <div className='hud-position-leftop'>
                        <Chat/>
                    </div>
                    <div className='hud-position-righttop'>
                        <Logo/>
                        <MainMenu/>
                    </div>
                    <div className='hud-position-leftbottom'>
                        <Watch/>
                        <Gps/>
                    </div>
                    <div className="hud-position-rightbottom">
                        <Car/>
                        <Player/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Hud;
