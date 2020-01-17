import React from 'react';
import UFrame from './UFrame';

class UMenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment >
        <div className="u-title">
          <div className="menu-list "></div>
          <span className="u-texttittle">{this.props.data.title}</span>
        </div>
        <div className="u-li-menu">
          {this.props.data.items.map((e, i) => {
            return (
              <UFrame
                menu={this.props.data.UUID}
                item={e}
                key={i}
                id={i}
                type={e.type}
                event={this.callback}
              />
            )
          })}
        </div>
      </React.Fragment>
    )
  }
}
export default UMenuContainer;
