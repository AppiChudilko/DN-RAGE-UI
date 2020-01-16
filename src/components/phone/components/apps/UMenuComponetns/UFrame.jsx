import React from 'react';
import UMenuRight from './UMenuRight';

class UFrame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  callback = (action, ...args) => {
    console.log(action, this.props.menu, this.props.id, ...args)
}
  render() {
    return (
      <React.Fragment >
        <div className="u-menu-l">
          <div className="l-title">
            <div className="txt-title">{this.props.item.title}</div>
            <div className="txt-lasttitle">{this.props.item.text}</div>
          </div>
          <UMenuRight type={this.props.item.right} event={this.callback} />
        </div>
      </React.Fragment>
    )
  }
}
export default UFrame;
