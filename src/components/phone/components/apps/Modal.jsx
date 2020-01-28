import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    callback = (action, ...args) => {
        console.log(action, args)
        try {
            mp.trigger('client:phone:callBack', action, ...args); // eslint-disable-line
        }
        catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!this.props.data.show) {
            return null;
        }
        return (
            <React.Fragment >
                <div className="u-scrollable">
                    <div className="u-scrool-box">
                        <div className="u-scroll-title">{this.props.data.title}</div>
                        <div className="u-scroll-text">{this.props.data.text}</div>
                        <div className="u-select-input">
                            <div className="u-btn-w" onClick={this.props.closeModal}>{this.props.data.buttons[0]}</div>
                            <div className="u-btn-w" onClick={() => {this.props.closeModal(); this.callback('modal', this.props.data.params)}}>{this.props.data.buttons[1]}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Modal;
