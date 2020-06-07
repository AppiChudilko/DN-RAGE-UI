import React from 'react'
import '../css/component.css'

const styles = {
    contentContainer: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.67)',
        paddingTop: '5%',
        paddingBottom: '5%'
    }
}

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={styles.contentContainer}>
                <span style={{fontFamily: 'TTSupermolotNeue-Regular', fontSize: 12, textAlign: 'center'}} className="notification-content-text">
                    {this.props.text.toUpperCase()}
                </span>
            </div>
        )
    }
}

export default Content