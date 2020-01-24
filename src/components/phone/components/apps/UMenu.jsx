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
                    <UMenuContainer
                        data={this.props.data}
                    />
                </div>
                {/* <div className="m_keys_bar">
                    <Link to="/phone/android/defaultpage"><div className="m-trngl-bar" onClick={() => this.props.clickBack()}></div></Link>
                    <Link to="/phone/android/defaultpage"><div className="m-crl-bar" onClick={() => this.props.clickBack()}></div></Link>
                    <div className="m-sqr-bar" onClick={() => this.props.rotateAndroid()}></div>
                </div> */}
            </React.Fragment>
        )
    }
}
export default UMenu;
