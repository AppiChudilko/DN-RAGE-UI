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
        this.state = { selectedListIndex : 0 };
    }

    resetVal(type) {

        if (type === 'max') {
            this.setState((state) => {
                return {selectedListIndex: 0}
            })
        }
        else {
            this.setState((state) => {
                return {selectedListIndex: this.props.data.data.items.length - 1}
            })
        }
    }

    nextVal() {
        if (this.state.selectedListIndex + 2 > this.props.data.data.items.length) {
            this.resetVal('max')
        } else {
            this.setState((state) => {
                return {selectedListIndex: state.selectedListIndex + 1}
            });
            try {
                mp.trigger('client:menuList:callBack:list', this.props.data.menuName, this.props.data.id, JSON.stringify(this.props.data.data.params), this.state.selectedListIndex + 1); // eslint-disable-line
            }
            catch (e) {}
        }
    }

    prevVal() {
        if (this.state.selectedListIndex === 0) {
            this.resetVal('min')
        } else {
            this.setState((state) => {
                return {selectedListIndex: state.selectedListIndex - 1}
            });
            try {
                mp.trigger('client:menuList:callBack:list', this.props.data.menuName, this.props.data.id, JSON.stringify(this.props.data.data.params), this.state.selectedListIndex - 1); // eslint-disable-line
            }
            catch (e) {}
        }
    }

    handleKeyDown(e) {
        if (e.keyCode === 37) {
            this.prevVal()
        } else if (e.keyCode === 39) {
            this.nextVal()
        }
    }

    componentDidMount() {
        if (this.props.data.data.initValue) {
            this.setState({
                selectedListIndex: this.props.data.data.index,
            })
        }
    }

    render() {

        return (
            <div style={styles.container} tabIndex="2" onKeyDown={(e) => this.handleKeyDown(e)}>
                {this.props.data.data.icon ? <Icon name={this.props.data.data.icon} /> : <></>}
                <input style={{opacity: 0, height: "0px", width: "0px", position: 'absolute'}} autoFocus={true} />
                <label style={styles.listitem} dangerouslySetInnerHTML={{__html: parseText(this.props.data.data.title)}}>
                </label>
                <div style={styles.carousel}>
                    <div style={styles.icon} onClick={this.prevVal.bind(this)}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_left" />
                    </div>
                    <div style={styles.itemCarousel} value={this.props.data.data.items[this.state.selectedListIndex]} onClick={this.nextVal.bind(this)} >
                        {this.props.data.data.items[this.state.selectedListIndex]}
                    </div>
                    <div style={styles.icon} onClick={this.nextVal.bind(this)}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_right" />
                    </div>
                </div>
            </div>
        );
    }
}