import React from 'react';

class Calls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Calls.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}

export default Calls;
