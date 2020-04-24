import React from 'react'
import Icon from './Icon'
import parseText from '../functions/parseText'

const styles = {
    container: {
        display: 'flex',
        padding: '5px 20px',
        alignItems: 'center',
        position: 'relative',
        overflow: 'auto'
    },
    listitem: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '1rem',
        marginRight: 'auto'
    },
    itemCarousel: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '1rem',
        textAlign: 'center',
        overflow: 'hidden',
        width: '100%'
    },
    carousel: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff',
        overflow: 'hidden',
        maxWidth: '40%'
    },
    icon: {
        cusor: 'pointer',
        justifyContent: 'center'
    }
}

export default class ListMenu extends React.Component {

    constructor(props) {
        super(props);
    }

   

    render() {

        return (
            <div style={styles.container} tabIndex="2">
                {this.props.data.data.icon ? <Icon name={this.props.data.data.icon} /> : <></>}
                <input style={{opacity: 0, height: "0px", width: "0px", position: 'absolute'}} autoFocus={true} />
                <label style={styles.listitem} dangerouslySetInnerHTML={{__html: parseText(this.props.data.data.title)}}>
                </label>
                <div style={styles.carousel}>
                    <div style={styles.icon} onClick={() => this.props.prevVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_left" />
                    </div>
                    <div style={styles.itemCarousel} value={this.props.data.data.items[this.props.data.data.index]} onClick={() => this.props.nextVal()} >
                        {this.props.data.data.items[this.props.data.data.index]}
                    </div>
                    <div style={styles.icon} onClick={() => this.props.nextVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_right" />
                    </div>
                </div>
            </div>
        );
    }
}