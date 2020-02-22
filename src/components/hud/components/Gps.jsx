import React from 'react';
import EventManager from "../../../EventManager";

class Gps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            district: 'Район',
            street: 'Международная станция Якитики',
            showGang: false,
            att: 0,
            def: 0,
            timer: 0,
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Gps.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('hudg', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({show: value.isShow});
                this.setState({district: value.district});
                this.setState({street: value.street});
                this.setState({background: value.background});
            }
            else if (value.type === 'updateGangInfo') {
                this.setState({att: value.top1});
                this.setState({def: value.top2});
                this.setState({timer: value.timerCounter});
            }
            else if (value.type === 'showGangInfo') {
                this.setState({showGang: true});
            }
            else if (value.type === 'hideGangInfo') {
                this.setState({showGang: false});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hudg');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="gps-main" style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                    <div className="gps-title" style={this.state}>{this.state.district}</div>
                    <div className="gps-txt">{this.state.street}</div>
                </div>
                <div className={this.state.showGang ? 'gang-war-info' : 'hide'} style={{backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')'}}>
                    <div className="war-att" style={this.state}>Война за территорию</div>
                    <div className="war-att">Атака: {this.state.att}</div>
                    <div className="war-def">Оборона: {this.state.def}</div>
                    <div className="war-timer">Таймер: {this.state.timer} сек</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Gps;
