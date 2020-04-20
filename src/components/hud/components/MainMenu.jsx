import React from 'react';
import EventManager from "../../../EventManager";
import Header from './MainMenu/Header/Header'
import Desc from './MainMenu/uikit/Desc'
import InterfaceItem from './MainMenu/List/InterfaceItem'

class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state = {
            selected: 1,
            header: true,
            opacity: 0.8,
            headerText: 'headerText',
            menuList: [
                {
                    id: 1,
                    type: 'caption',
                    title: 'TEST',
                    subtitle: 'TEST2',
                    items: [],
                    divider: false
                }
            ]
        };
        this.selectedElement = React.createRef();
    }

    resetVal(type) {
        type === 'max' ?
            this.setState((state) => {
                return {selected: 1}
            }) :
            this.setState((state) => {
                return {selected: this.state.menuList.length}
            })
    }

    handleWheel(e) {
        if (e.deltaY < 0) {
            if (this.state.selected - 1 === 0) {
                this.resetVal('min')
            } else {
                this.setState((state) => {
                    return {selected: state.selected--}
                })
            }
        } else if (e.deltaY > 0) {
            if (this.state.menuList.length === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected++}
                })
            }
        }
    }

    handleKeyDown(e) {
        if (e.keyCode === 38) {
            if (this.state.selected - 1 === 0) {
                this.resetVal('min')
            } else {
                this.setState((state) => {
                    return {selected: state.selected--}
                })
            }
        } else if (e.keyCode === 40) {
            if (this.state.menuList.length === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected++}
                })
            }
        }
    }

    render() {

        const styles = {
            container: {
                display: 'flex',
                flex: 1,
                marginTop: '10%',
                marginBottom: '10%',
                marginLeft: '30%',
                marginRight: '30%',
                height: '100%',
                backgroundColor: '#0c0c0c',
                flexDirection: 'column',
                opacity: this.state.opacity,
                paddingBottom: '2%'
            },
            menuContainer: {
                overflow: 'hidden',
                overflowY: 'scroll',
                maxHeight: '16rem'

            }
        }

        return (
            <div style={styles.container} onWheel={(e) => this.handleWheel(e)} tabIndex="1" onKeyDown={(e) => this.handleKeyDown(e)}>
                {this.state.header ? <Header headerText={this.state.headerText} /> : <></>}
                <div className="menuContainer" style={styles.menuContainer}>
                    {this.state.menuList.map(item => {
                        return <InterfaceItem data={item} selected={item.id === this.state.selected ? true : false} key={item.id.toString()}/>
                    })}
                </div>
                {this.state.menuList[this.state.selected - 1].subtitle ? <Desc desc={this.state.menuList[this.state.selected - 1].subtitle} /> : <></>}
            </div>
        )
    }
}

export default MainMenu;
