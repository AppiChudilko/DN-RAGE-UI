import React from 'react'
import Icon from './Icon'

const styles = {
    container: {
        display: 'flex',
        padding: '5px 20px',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '1rem',
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
                {this.props.data.data.icon ? <Icon name={this.props.data.data.icon} /> : <></>}
                <label htmlFor={this.props.data.data.id} style={styles.title}>
                    {this.props.data.data.title}
                </label>
                <input type="checkbox"
                    autoFocus={true}
                    checked={this.state.isChecked}
                    onChange={this.toggleChange}
                    className="checkbox"
                    id={this.props.data.data.id}
                    style={styles.checkbox}
                />
                <label htmlFor={this.props.data.data.id} className="checkmark" style={styles.checkmark} />
          </label>
      );
    }
  }