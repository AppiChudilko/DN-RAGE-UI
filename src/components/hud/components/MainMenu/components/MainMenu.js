import React from 'react'
import Header from './Header/Header'
import Desc from './uikit/Desc'
import InterfaceItem from './List/InterfaceItem'
import { THEME } from '../consts'

export default class MainMenu extends React.Component {

    constructor(props) {
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state = {
          selected: 1
        }
        this.selectedElement = React.createRef();
      }

      resetVal(type) {
        type === 'max' ?
        this.setState((state) => {
          return {selected: 1}
        }) :
        this.setState((state) => {
          return {selected: this.props.data.length}
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
            if (this.props.data.length === this.state.selected) {
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
            if (this.props.data.length === this.state.selected) {
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
                backgroundColor: THEME.bgColor,
                flexDirection: 'column',
                opacity: this.props.opacity,
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
                {this.props.header ? <Header headerText={this.props.headerText} /> : <></>}
                <div className="menuContainer" style={styles.menuContainer}>
                    {this.props.data.map(item => {
                        return <InterfaceItem data={item} selected={item.id === this.state.selected ? true : false} key={item.id.toString()}/>
                    })}
                </div>
                {this.props.data[this.state.selected - 1].subtitle ? <Desc desc={this.props.data[this.state.selected - 1].subtitle} /> : <></>}
            </div>
        )
    }
}