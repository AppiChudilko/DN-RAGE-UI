import React from 'react';
import './css/circlemenu.css'
class CircleMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'CircleMenu.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="circle-menu"></div>              
            </React.Fragment>
        )
    }
}

export default CircleMenu;
