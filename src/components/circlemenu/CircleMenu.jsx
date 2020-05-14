import React from 'react';
import './css/circlemenu.css'
import PieMenu from './PieMenu'
import Slice from './PieMenu/Slice'
import Icon from '../hud/components/MainMenu/uikit/Icon'
import ReactDOM from 'react-dom'

const MOUSE_RIGHT_CODE = 3;

class CircleMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showMenu: true,
            selected: 0,
            selectedType: 0,
            menuData: [
              [ // оружие
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '-1',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'рукопашное',
                      circleInfoMiddle: 'кулак',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  // 54 - 69
                  // 65 - кастет, можно и лучше
                  selected: 0,
                  data: [
                    {
                      itemId: '67',
                      imgStyle: {
                        transform: "rotate(-120deg)"
                      },
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'холодное',
                      circleInfoMiddle: 'нож',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  // 85 - 93
                  selected: 0,
                  data: [
                    {
                      itemId: '93',
                      imgStyle: {
                        transform: "scale(-1, 1) rotate(60deg)"
                      },
                      spanStyle: {
                        position: 'absolute',
                        marginTop: '65px',
                        paddingRight: '40px'
                      },
                      ammount: '10', // то что пишется в кругу под иконкой
                      circleInfoTop: 'дробовик',
                      circleInfoMiddle: 'Heavy Shotgun',
                      circleInfoBottom: 'дробь',
                    }
                  ]
                },
                {
                  // 70 - 84
                  // 80, 81 - не очень, но вроде норм?
                  selected: 0,
                  data: [
                    {
                      itemId: '73',
                      spanStyle: {
                        position: 'absolute',
                        paddingTop: '58px'
                      },
                      imgStyle: {
                        marginBottom: '-10px'
                      },
                      ammount: '20', // то что пишется в кругу под иконкой
                      circleInfoTop: 'пистолет',
                      circleInfoMiddle: 'Heavy Pistol',
                      circleInfoBottom: '9',
                    }
                  ]
                },
                {
                  // 94 - 126
                  // перепроверить, а так вроде норм все
                  selected: 0,
                  data: [
                    {
                      itemId: '126',
                      imgStyle: {
                        transform: "rotate(60deg)",
                        maxWidth: '70%'
                      },
                      spanStyle: {
                        position: 'absolute',
                        marginTop: '65px',
                        paddingLeft: '40px'
                      },
                      ammount: '30', // то что пишется в кругу под иконкой
                      circleInfoTop: 'основное',
                      circleInfoMiddle: 'AK-102',
                      circleInfoBottom: '7.65',
                    }
                  ]
                },
                {
                  // 127 - 136
                  selected: 0,
                  data: [
                    {
                      itemId: '136',
                      imgStyle: {
                        transform: "rotate(-60deg)"
                      },
                      spanStyle: {
                        marginTop: '55px',
                        position: 'absolute',
                        marginLeft: '-10px'
                      },
                      ammount: '2', // то что пишется в кругу под иконкой
                      circleInfoTop: 'метательное',
                      circleInfoMiddle: 'C4',
                      circleInfoBottom: '',
                    }
                  ]
                }
              ],
              [ // предметы
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '165',
                      ammount: '5', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Еда',
                      circleInfoMiddle: 'Бургер',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '12',
                      ammount: '5', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Еда',
                      circleInfoMiddle: 'Кола',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '13',
                      ammount: '5', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Еда',
                      circleInfoMiddle: 'Жвачка',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '14',
                      ammount: '5', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Еда',
                      circleInfoMiddle: 'Пицца',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '20',
                      ammount: '2', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Напитки',
                      circleInfoMiddle: 'Вода',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '21',
                      ammount: '3', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Напитки',
                      circleInfoMiddle: 'Пиво',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '22',
                      ammount: '4', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Напитки',
                      circleInfoMiddle: 'Водка',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '165',
                      ammount: '7', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Алкоголь',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '166',
                      ammount: '9', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Табак',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '158',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Медикаменты',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '10',
                      ammount: '9', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Инструменты',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                }
              ],
              [ // анимации
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '40',
                      ammount: '9', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Танцевальные',
                      circleInfoMiddle: 'Танец 1',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '41',
                      ammount: '9', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Танцевальные',
                      circleInfoMiddle: 'Танец 2',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '42',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Танцевальные',
                      circleInfoMiddle: 'Танец 3',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '43',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Танцевальные',
                      circleInfoMiddle: 'Танец 4',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '45',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Важные',
                      circleInfoMiddle: 'Поднять руки',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '46',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Важные',
                      circleInfoMiddle: 'Пожать руку',
                      circleInfoBottom: '',
                    },
                    {
                      itemId: '47',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Важные',
                      circleInfoMiddle: 'Лечь',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '48',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Социальные',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '49',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Спортивные',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '50',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Взаимодействия',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                },
                {
                  selected: 0,
                  data: [
                    {
                      itemId: '51',
                      ammount: '', // то что пишется в кругу под иконкой
                      circleInfoTop: 'Нецензурные',
                      circleInfoMiddle: '',
                      circleInfoBottom: '',
                    }
                  ]
                }
              ]
            ]
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'CircleMenu.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
      if (this.state.show && this.state.showMenu) {
        this.focusDiv()
      }
    }
    
      onContextMenu = e => {
        e.preventDefault();
      }

      handleKeyPress = (event) => {
        if (event.which === 81 && this.state.menuData[this.state.selectedType][this.state.selected].data.length > 1) {
          this.prevVal()
        }
        if (event.which === 69 && this.state.menuData[this.state.selectedType][this.state.selected].data.length > 1) {
          this.nextVal()
        }
        if (event.which === 82) {
          if (this.state.selectedType === 2) {
            this.setState({ selectedType: 0 })
          }
          else {
            this.setState((state) => {
              return {selectedType: state.selectedType + 1}
          })
          }
        }
      }
    
      onMouseDown = e => {
        if (e.nativeEvent.which === MOUSE_RIGHT_CODE) {
          this.setState({
            mouseX: `${e.pageX}px`,
            mouseY: `${e.pageY}px`,
            showMenu: true,
          });
        }
      }
      
      toggleSelect = (type) => {
        this.setState({
          selectedType: type,
          selected: 0
        });
      }
    
      onMouseUp = e => {
        if (e.nativeEvent.which === MOUSE_RIGHT_CODE) {
          this.setState({ showMenu: false });
          e.preventDefault();
        }
      }

      nextVal = () => {
        if (this.state.menuData[this.state.selectedType][this.state.selected].data.length === this.state.menuData[this.state.selectedType][this.state.selected].selected + 1) {
          let menuListNew = [...this.state.menuData]
          menuListNew[this.state.selectedType][this.state.selected].selected = 0
          this.setState((state) => {
              return {menuData: menuListNew}
          })
        } else {
          let menuListNew = [...this.state.menuData]
          menuListNew[this.state.selectedType][this.state.selected].selected = menuListNew[this.state.selectedType][this.state.selected].selected + 1
          this.setState((state) => {
              return {menuData: menuListNew}
          })
        }
      }

      prevVal = () => {
        if (this.state.menuData[this.state.selectedType][this.state.selected].selected === 0) {
          let menuListNew = [...this.state.menuData]
          menuListNew[this.state.selectedType][this.state.selected].selected = this.state.menuData[this.state.selectedType][this.state.selected].data.length - 1
          this.setState((state) => {
              return {menuData: menuListNew}
          })
        } else {
          let menuListNew = [...this.state.menuData]
          menuListNew[this.state.selectedType][this.state.selected].selected = menuListNew[this.state.selectedType][this.state.selected].selected - 1
          this.setState((state) => {
              return {menuData: menuListNew}
          })
        }
      }

    focusDiv() {
      ReactDOM.findDOMNode(this.refs.circle).focus()
      // автофокусится на круг для навигации кнопками
    }


    fixWeaponStyles= (arr) => {

      arr[0].map((item, index) => {
        let styles = {}
        switch(item.data[0].itemId) {
          case '99':
            styles = {
              marginBottom: '-15px'
            }
            break;
          case '102':
            styles = {
              marginBottom: '-15px',
              maxWidth: '60%'
            }
            break;
          case '104':
            styles = {
              marginBottom: '-15px',
              maxWidth: '60%'
            }
            break;
          case '112':
            styles = {
              marginBottom: '-15px',
              maxWidth: '60%'
            }
            break;
          case '120':
            styles = {
              marginBottom: '-15px',
              maxWidth: '60%'
            }
            break;
          case '128':
            styles = {
              marginTop: '-15px',
              transform: 'rotate(30deg)'
            }
            break;
          case '130':
            styles = { 
              marginTop: '-15px',
              transform: 'rotate(30deg)'
            }
            break;
          case '131':
            styles = {
              marginTop: '-15px',
              transform: 'rotate(75deg)'
            }
            break;
          case '136':
            styles = {
              marginTop: '-15px',
              transform: 'rotate(30deg)'
            }
            break;
          case '55':
            styles = {
              marginTop: '10px'
            }
            break;
          case '59':
            styles = {
              marginTop: '10px'
            }
            break;
          case '60':
            styles = {
              marginTop: '10px',
              maxWidth: '80%'
            }
            break;
          case '63':
            styles = {
              marginTop: '10px'
            }
            break;
          case '65':
            styles = {
              marginTop: '10px'
            }
            break;
          case '67':
            styles = {
              marginTop: '10px',
              maxWidth: '70%'
            }
            break;
          case '68':
            styles = {
              marginTop: '10px',
              maxWidth: '80%'
            }
            break;
          case '89':
            styles = {
              marginBottom: '10px',
              maxWidth: '80%'
            }
            break;
          case '88':
            styles = {
              maxWidth: '80%'
            }
            break;
          case '90':
            styles = {
              maxWidth: '80%'
            }
            break;
          case '91':
            styles = {
              maxWidth: '80%'
            }
            break;
          case '93':
            styles = {
              marginBottom: '-15px'
            }
            break;
          case '108':
            styles = {
              marginBottom: '-10px'
            }
            break;
          case '109':
            styles = {
              marginBottom: '-10px'
            }
            break;
          case '121':
            styles = {
              marginBottom: '10px'
            }
            break;
          case '126':
            styles = {
              marginBottom: '10px'
            }
            break;
          case '129':
            styles = {
              marginTop: '10px'
            }
            break;
          default:
            break;
        }
        item.data[0].imgStyle = ({
          ...item.data[0].imgStyle,
          ...styles
        })
      })
    }


    render() {
        if (!this.state.show) {
            return null;
        }
        const { showMenu } = this.state;
        this.fixWeaponStyles(this.state.menuData)
        return (
            <React.Fragment>
                <div
                    role="presentation"
                    className="circle-menu"
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}
                    onContextMenu={this.onContextMenu}
                    onKeyDown={this.handleKeyPress}
                    tabIndex="1"
                    ref="circle"
                    style={{transform: `scale(${document.documentElement.clientHeight / 652})`}}
                >
                {showMenu && (
                <div className="circle-menu-type">
                  <div className="circle-menu-type-button">
                    <span>R</span>
                  </div>
                  <div className="circle-menu-type-selector">
                    <div onClick={() => this.toggleSelect(0)} className={this.state.selectedType === 0 ? "menu-type-selected" : "menu-type-default"}>
                      <span>ОРУЖИЕ</span>
                    </div>
                    <div onClick={() => this.toggleSelect(1)} className={this.state.selectedType === 1 ? "menu-type-selected" : "menu-type-default"}>
                      <span>ПРЕДМЕТЫ</span>
                    </div>
                    <div onClick={() => this.toggleSelect(2)} className={this.state.selectedType === 2 ? "menu-type-selected" : "menu-type-default"}>
                      <span>АНИМАЦИИ</span>
                    </div>
                  </div>
                </div>
                )}
                <div className="circle-content">
                <canvas style={{width: '100%', height: '100%', position: 'absolute'}} ref={ref => { this.canvas = ref; }} />
                {showMenu && (
                    <PieMenu
                        className="circle-menu-main"
                        radius={`200px`} // 200px {`${document.documentElement.clientHeight / 3.2}px`}
                        centerRadius={`120px`} // 120px {`${document.documentElement.clientHeight / 5.4}px`}
                        centerX={0}
                        centerY={0}
                        attrs={this.state.menuData[this.state.selectedType]}
                        selected={this.state.selected}
                    > 
                      {
                        this.state.menuData[this.state.selectedType].map((item, indexItem) => {
                          return (
                            <Slice
                              key={item.data[item.selected].itemId}
                              onMouseOver={() => {
                                this.setState((state) => {
                                  return {selected: indexItem}
                                })
                              }}
                              onSelect={() => console.log(`Использую ${this.state.menuData[this.state.selectedType][this.state.selected].data[this.state.menuData[this.state.selectedType][this.state.selected].selected].circleInfoMiddle}`)}
                            >
                              {item.data.length > 0 && (
                              <div
                               className="circle-container-content"
                              >
                                <div
                                  className="circle-container-data"
                                >
                                {(item.data.length > 1 && this.state.selected === indexItem) && (
                                <div style={{marginRight: '5px'}} onClick={(event) => {
                                    event.stopPropagation();
                                    event.nativeEvent.stopImmediatePropagation()
                                    this.prevVal()
                                  }}>
                                  <div className="circle-menu-container-tumbler">
                                    <span>Q</span>
                                  </div>
                                </div>
                                )}
                                <img
                                  src={require(`../inventory/img/all-items/Item_${item.data[item.selected].itemId}.png`)}
                                  className={this.state.selectedType === 0 ? "circle-weapon-img" : "circle-weapon-img circle-item-img"}
                                  style={
                                    (item.data.length === 1) ? item.data[item.selected].imgStyle : {maxWidth: this.state.selected === indexItem ? '35%' : '60%'}
                                  }
                                />
                                {(item.data.length > 1 && this.state.selected === indexItem) && (
                                <div style={{marginLeft: '5px'}} onClick={(event) => {
                                    event.stopPropagation();
                                    event.nativeEvent.stopImmediatePropagation()
                                    this.nextVal()
                                  }}>
                                  <div className="circle-menu-container-tumbler">
                                    <span>E</span>
                                  </div>
                                </div>
                                )}
                                </div>
                                <span
                                  style={item.data[item.selected].spanStyle}
                                  className={this.state.selectedType != 0 ? "ammo-info-item" : "ammo-info"}
                                >
                                {item.data[item.selected].ammount}
                                </span>
                              </div>
                              )}
                            </Slice>
                        )
                        })
                      }
                    </PieMenu>  
                )}
                </div>
                </div>     
            </React.Fragment>
        )
    }
}

export default CircleMenu;
