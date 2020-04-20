import React from 'react';
import EventManager from "../../../EventManager";
import Header from './MainMenu/Header/Header.jsx'
import Desc from './MainMenu/uikit/Desc.jsx'
import InterfaceItem from './MainMenu/List/InterfaceItem.jsx'

class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state = {
            show: true,
            selected: 1,
            header: true,
            opacity: 0.88,
            headerText: 'headerTex',
            headerDesc: 'header desc',
            menuList: [
                {
                    id: 1,
                    type: 'caption',
                    title: 'TEST',
                    subtitle: '~r~TEST2~s~Dfsdfdsf~y~sdfsdfsdf',
                    icon: 'test',
                    iconr: 'test',

                    rl: '~r~Test2~r~',

                    params: {},
                    items: [],
                    divider: false
                },
                {
                    id: 2,
                    type: 'caption',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 3,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 4,
                    type: 'listmenu',
                    title: 'YOUR FRACTION',
                    items: [
                        'PD',
                        'FIB',
                        'TEST',
                        'TEST14'
                    ]
                },
                {
                    id: 5,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 6,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 7,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 8,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 9,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 10,
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    id: 11,
                    type: 'checkbox',
                    title: 'TEST2',
                    subtitle: '~r~TEST2~s~Dfsdfdsf~y~sdfsdfsdf',
                    items: [],
                    divider: false
                },
            ]
        };
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
                    return {selected: state.selected - 1}
                })
            }
        } else if (e.deltaY > 0) {
            if (this.state.menuList.length === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected + 1}
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
                    return {selected: state.selected - 1}
                })
            }
        } else if (e.keyCode === 40) {
            if (this.state.menuList.length === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected + 1}
                })
            }
        }
    }

    render() {

        if (!this.state.show)
            return null;

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
                paddingBottom: '2%',
                outline: 'none',
            },
            menuContainer: {
                overflow: 'hidden',
                overflowY: 'scroll',
                maxHeight: '350px'
            }
        }

        return (
            <div className="menu-box" onWheel={(e) => this.handleWheel(e)} tabIndex="1" onKeyDown={(e) => this.handleKeyDown(e)}>
                {this.state.header ? <Header headerText={this.state.headerText} headerDesc={this.state.headerDesc} /> : <></>}
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
