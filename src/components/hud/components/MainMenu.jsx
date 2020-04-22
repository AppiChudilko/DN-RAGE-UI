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
            show: false,
            selected: 1,
            header: true,
            opacity: 0.80,
            headerText: '',
            headerDesc: '',
            banner: '',
            menuName: '',
            menuList: [
                {
                    type: 2,
                    title: 'TEST',
                    subtitle: '~green~TEST2~yellow~Dfsdfdsf~br~qwerty~blue~sdfsdfsdf~green~djasdnajksnd',
                    icon: 'test__icon__inverted',
                    rl: '~blue~RIGHT LABEL',
                    params: {},
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: '~red~Бизнес',
                    subtitle: 'default text',
                    iconr: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: '~green~TEST2',
                    icon: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 1,
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
                    type: 0,
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 0,
                    title: 'TEST2',
                    icon: 'test__icon__inverted',
                    items: [],
                    divider: false
                },
                {
                    type: 0,
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 0,
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 0,
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'TEST1',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'TEST3',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'TEST1',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'TEST2',
                    items: [],
                    divider: false
                },
                {
                    type: 2,
                    title: 'TEST3',
                    items: [],
                    divider: false
                }
            ]
        };
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'MainMenu.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        try {
            this.itemRefs[1].focus();
        }
        catch (e) {}
        EventManager.addHandler('hudm', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'switch') {
                this.setState({show: !this.state.show})
            } else if (value.type === 'updateInfo') {
                this.setState({show: true});
                this.setState({header: value.header});
                this.setState({opacity: value.opacity});
                this.setState({selected: value.selected});
                this.setState({headerText: value.headerText});
                this.setState({headerDesc: value.headerDesc});
                this.setState({banner: value.banner});
                this.setState({menuList: value.menuList});
                this.setState({menuName: value.menuName});

                try {
                    this.itemRefs[value.selected].focus();
                }
                catch (e) {}
            } else return;
        })
    }

    resetVal(type) {
        if (type === 'max') {
            this.setState((state) => {
                return {selected: 1}
            })
            setTimeout(
                function() {
                    this.itemRefs[1].focus()
                }
                .bind(this),
                100
            )
            console.log(1);
        } else {
            this.setState((state) => {
                return {selected: this.state.menuList.length}
            })
            setTimeout(
                function() {
                    this.itemRefs[this.state.menuList.length].focus()
                }
                .bind(this),
                100
            )
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
            setTimeout(
                function() {
                    this.itemRefs[this.state.menuList.length - 1].focus()
                }
                .bind(this),
                120
            )
            return null
        }

        if ((this.state.selected === 1) && (type === 'down')) {
            setTimeout(
                function() {
                    this.itemRefs[2].focus()
                }
                .bind(this),
                120
            )
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
        });
    }

    onChangeSelectedSelected(id) {
        console.log(id);
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
                {this.state.header ? <Header headerData={`${this.state.selected} / ${this.state.menuList.length}`} headerText={this.state.headerText} headerDesc={this.state.headerDesc} banner={this.state.banner} /> : <></>}
                <div className="menuContainer" style={styles.menuContainer}>
                    {this.state.menuList.map((item, index) => {
                        return (
                            <div id={index + 1} tabIndex="-1" ref={el => (this.itemRefs[index + 1] = el)} onClick={() => this.toggleSelected(index + 1)} key={(index + 1).toString()} className={index + 1 === this.state.selected ? 'menu-item-inverted' : 'menu-item'}>
                                <InterfaceItem id={index + 1} menuName={this.state.menuName} data={item} selected={index + 1 === this.state.selected ? true : false} />
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
