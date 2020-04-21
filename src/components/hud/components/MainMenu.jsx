import React from 'react';
import EventManager from "../../../EventManager";
import Header from './MainMenu/Header/Header.jsx'
import Desc from './MainMenu/uikit/Desc.jsx'
import InterfaceItem from './MainMenu/List/InterfaceItem.jsx'

class MainMenu extends React.Component {
    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.itemRefs = {}
        this.state = {
            show: true,
            selected: 1,
            header: true,
            opacity: 0.88,
            headerText: 'headerTex',
            headerDesc: 'qweeqweq',
            menuList: [
                {
                    type: 'caption',
                    title: 'TEST',
                    subtitle: '~red~TEST2~yellow~Dfsdfdsf~br~qwerty~blue~sdfsdfsdf~green~djasdnajksnd',
                    icon: 'test__icon__inverted',
                    rl: '~blue~RIGHT LABEL',
                    params: {},
                    items: [],
                    divider: false
                },
                {
                    type: 'caption',
                    title: 'Бизнес',
                    subtitle: 'default text',
                    iconr: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 'caption',
                    title: '~green~TEST2',
                    icon: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 'listmenu',
                    title: 'YOUR FRACTION',
                    icon: 'test__icon__inverted',
                    items: [
                        'PD',
                        'FIB',
                        'TEST',
                        'TESTDNASK JBDKAJSB KNASDANSDJKABNSDKJBASK14'
                    ]
                },
                {
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 'checkbox',
                    title: 'TEST2',
                    icon: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 'checkbox',
                    title: 'TEST2',
                    items: [],
                    divider: false
                }
            ]
        };
    }

    resetVal(type) {
        if (type === 'max') {
            this.setState((state) => {
                return {selected: 1}
            })
            this.itemRefs[1].focus()
        } else {
            this.setState((state) => {
                return {selected: this.state.menuList.length}
            })
            this.itemRefs[this.state.menuList.length].focus()
        }
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
                this.scrollMenu('up')
            }
        } else if (e.keyCode === 40) {
            if (this.state.menuList.length === this.state.selected) {
                this.resetVal('max')
            } else {
                this.setState((state) => {
                    return {selected: state.selected + 1}
                })
                this.scrollMenu('down')
            }
        }
    }

    scrollMenu(type) {
        if ((this.state.selected === this.state.menuList.length) && (type === 'up')) {
            this.itemRefs[this.state.menuList.length - 1].focus()
            return null
        }

        if ((this.state.selected === 1) && (type === 'down')) {
            this.itemRefs[2].focus()
            return null
        }

        if (type === 'up') {
            this.itemRefs[this.state.selected + 1].focus()
        }
        if (type === 'down') {
            this.itemRefs[this.state.selected - 1].focus()
        }
    }

    toggleSelected(id) {
        this.setState((state) => {
            return {selected: id}
        })
    }

    componentDidMount() {
        this.itemRefs[1].focus()
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
                {this.state.header ? <Header headerData={`${this.state.selected} / ${this.state.menuList.length}`} headerText={this.state.headerText} headerDesc={this.state.headerDesc} /> : <></>}
                <div className="menuContainer" style={styles.menuContainer}>
                    {this.state.menuList.map((item, index) => {
                        return (
                            <div id={index + 1} tabIndex="-1" ref={el => (this.itemRefs[index + 1] = el)} onClick={() => this.toggleSelected(index + 1)} key={(index + 1).toString()} className={index + 1 === this.state.selected ? 'menu-item-inverted' : 'menu-item'}>
                                <InterfaceItem id={index + 1} data={item} selected={index + 1 === this.state.selected ? true : false} />
                            </div>
                        )
                    })}
                </div>
                {this.state.menuList[this.state.selected - 1].subtitle ? <Desc desc={this.state.menuList[this.state.selected - 1].subtitle} /> : <></>}
            </div>
        )
    }
}

export default MainMenu;
