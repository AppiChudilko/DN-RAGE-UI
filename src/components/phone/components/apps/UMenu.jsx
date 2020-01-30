import React from 'react';
import UMenuContainer from './UMenuComponetns/UMenuContainer';
import { Link } from 'react-router-dom';

class UMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment >
                <div className="uni-menu">
                    <UMenuContainer data={this.props.data} openScrollbar={this.props.openScrollbar} openModal={this.props.openModal} openInputModal={this.props.openInputModal}/>
                </div>
            </React.Fragment>
        )
    }
}
export default UMenu;
