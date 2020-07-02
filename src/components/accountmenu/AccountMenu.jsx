import React from 'react';
import './css/main.css'
import Header from './components/Header';
import Content from './components/Content'

class AccountMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            activePage: 3
        }
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
                    activePage: 5
                })
            } else {
                this.setState((state) => (
                    {activePage: state.activePage - 1}
                ))
            }
        }
        else if (key === 69) {
            if (this.state.activePage === 5) {
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
            <div className="accountmenu">
                <Header
                    accountId={20000}
                    donateBalance={1337}
                    nick="Qwertyuiop"
                />
                <Content
                    page={this.state.activePage}
                    onChangePage={this.onChangePage}
                    handleKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}

export default AccountMenu;
