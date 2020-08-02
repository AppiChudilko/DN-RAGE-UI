import React from 'react'
import Header from '../accountmenu/components/Header'
import Content from '../accountmenu/components/Content'
import './css/main.css'

class GovMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            panels: [
                {name: 'Информация', id: 'govmenu-info'},
                {name: 'Имущество', id: 'govmenu-property'},
                {name: 'Работы', id: 'govmenu-jobs'},
                {name: 'Лицензии', id: 'govmenu-license'}
            ],
            activePage: 0
        }
    }

    setHide = () => {
        this.setState({
            show: false
        })
    }

    onChangePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    handleKeyPress = (key) => {
        if (key === 81) {
            if (this.state.activePage === 0) {
                this.setState({
                    activePage: this.state.panels.length - 1
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage - 1}
                ))
            }
        }
        else if (key === 69) {
            if (this.state.activePage === this.state.panels.length - 1) {
                this.setState({
                    activePage: 0
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage + 1}
                ))
            }
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="govmenu">
                <Header
                    setHide={this.setHide}
                />
                <Content
                    page={this.state.panels[this.state.activePage]}
                    /*
                        ИМЯ PANEL - АЙДИШНИК, ПЕРЕПИСАТЬ ПОД НАЗВАНИЕ РОУТЕР В КОНТЕНТЕ
                    */
                    activeIndex={this.state.activePage}
                    onChangePage={this.onChangePage}
                    handleKeyPress={this.handleKeyPress}
                    panels={this.state.panels}
                />
            </div>
        )
    }
}

export default GovMenu