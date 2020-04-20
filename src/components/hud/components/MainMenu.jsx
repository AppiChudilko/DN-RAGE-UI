import React from 'react';
import EventManager from "../../../EventManager";

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showAmmo: false,
            ammoCount: 0,
            ammoMode: 'auto',
            date: '01.01',
            time: '12:00',
            online: '0',
            max_player: '1000',
            id: '0',
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'MainMenu.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        EventManager.addHandler('hudm', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({date: value.date});
                this.setState({time: value.time});
                this.setState({online: value.online});
                this.setState({max_player: value.max_player});
                this.setState({id: value.id});
                this.setState({showAmmo: value.showAmmo});
                this.setState({ammoCount: value.ammoCount});
                this.setState({ammoMode: value.ammoMode});
                this.setState({background: value.background});
            } else return;
        })
    }

    componentWillUnmount() {
        EventManager.removeHandler('hudm');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="menu_native">
                    <div className="head">Name</div>
                    <div className="body">
                        <div className="subtitle">
                            <div className="name">Название</div>
                            <div>10/50</div>
                        </div>
                        <div className="content_list">
                            <div className="content_item active">
                                <div className="text">Название</div>
                                <div className="checkbox">
                                    <input type="checkbox" id="checkbox_1" />
                                    <label htmlFor="checkbox_1"></label>
                                </div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                                <div className="list">
                                    <div className="prev"></div>
                                    <div className="text">Текст</div>
                                    <div className="next"></div>
                                </div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                                <div className="list">
                                    <div className="prev"></div>
                                    <div className="text">Текст</div>
                                    <div className="next"></div>
                                </div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                                <div className="checkbox">
                                    <input type="checkbox" id="checkbox_2" />
                                    <label htmlFor="checkbox_2"></label>
                                </div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                            <div className="content_item">
                                <div className="text">Название</div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Logo;
