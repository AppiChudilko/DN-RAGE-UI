import React, {Component} from 'react'

const styles = {
    container: {
        display: 'flex',
        paddingLeft: '15%',
        paddingRight: '15%',
        marginBottom: '4%',
        marginTop: '4%',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '1.4rem',
        marginRight: 'auto',
        maxWidth: '80%',
        overflow: 'hidden',
        textWrap: 'wrap'
    },
    checkbox: {
        cursor: 'pointer',
    },
    checkmark: {
    }
}

export default class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }

    handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.toggleChange()
      }
    }

    render() {
      return (
          <label tabIndex="1" onKeyDown={(e) => this.handleKeyDown(e)} className="checkbox-container" style={styles.container}>
                <label htmlFor={this.props.menuList.data.title} style={styles.title}>
                    {this.props.menuList.data.title}
                </label>
                <input type="checkbox"
                    autoFocus={true}
                    checked={this.state.isChecked}
                    onChange={this.toggleChange}
                    className="checkbox"
                    id={this.props.menuList.data.title}
                    style={styles.checkbox}
                />
                <label htmlFor={this.props.menuList.data.title} className="checkmark" style={styles.checkmark} />
          </label>
      );
    }
  }