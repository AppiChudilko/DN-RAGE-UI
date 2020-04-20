import React from 'react'

const styles = {
    container: {
        display: 'flex',
        padding: '5px 20px',
        alignItems: 'center',
        position: 'relative',
        overflow: 'auto'
    },
    listitem: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '1rem',
        marginRight: 'auto',
        minWidth: '80%'
    },
    itemCarousel: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '1rem',
        width: '100%',
        textAlign: 'center',
        overflow: 'hidden'
    },
    carousel: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff',
        overflow: 'hidden'
    },
    icon: {
      fontSize: '1.4rem',
      cusor: 'pointer'
    }
}

export default class ListMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectedListIndex : 0 };
}

  resetVal(type) {
    type === 'max' ?
    this.setState((state) => {
      return {selectedListIndex: 0}
    }) :
    this.setState((state) => {
      return {selectedListIndex: this.props.data.data.items.length - 1}
    })
  }

  nextVal() {
    if (this.state.selectedListIndex + 2 > this.props.data.data.items.length) {
      this.resetVal('max')
    } else {
      this.setState((state) => {
        return {selectedListIndex: state.selectedListIndex + 1}
      });
      console.log(this.state.selectedListIndex)
    }
  }

  prevVal() {
    if (this.state.selectedListIndex === 0) {
      this.resetVal('min')
    } else {
      this.setState((state) => {
        return {selectedListIndex: state.selectedListIndex - 1}
      });
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 37) {
        this.prevVal()
    } else if (e.keyCode === 39) {
        this.nextVal()
    }
  }


    render() {
      return (
        <div style={styles.container} tabIndex="2" onKeyDown={(e) => this.handleKeyDown(e)}>
          <input style={{opacity: 0, height: "0px", width: "0px", position: 'absolute'}} autoFocus={true} />
          <label style={styles.listitem}>
            {this.props.data.data.title}
          </label>
          <div style={styles.carousel}>
            <ion-icon onClick={this.prevVal.bind(this)} style={styles.icon} name="caret-back-outline"></ion-icon>
            <div style={styles.itemCarousel} value={this.props.data.data.items[this.state.selectedListIndex]} onClick={this.nextVal.bind(this)} >
              {this.props.data.data.items[this.state.selectedListIndex]}
            </div>
            <ion-icon onClick={this.nextVal.bind(this)} style={styles.icon} name="caret-forward-outline"></ion-icon>
          </div>
         </div>
      );
    }
  }