import React from 'react';
// import '../js/main.js'
class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Chat.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div id="chat" style={{ opacity: 1, fontWeight: 400 + 'px'}} class="ui_element">
                    <ul id="chat_messages"></ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Chat;
