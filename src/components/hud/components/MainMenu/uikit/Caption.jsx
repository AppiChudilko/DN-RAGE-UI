import React from 'react'

const styles = {
    container: {
        display: 'flex',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingBottom: '2%',
        paddingTop: '2%',
        alignItems: 'center'
    },
    listitem: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '1.4rem',
        marginRight: 'auto',
    },
    icon: {
        color: '#fff'
    }
    
}

export default class Caption extends React.Component {
    
    render() {
      return (
        <div style={styles.container}>
          <input style={{opacity: 0, height: "0px", width: "0px", position: 'absolute'}} autoFocus={true} />
          <label style={styles.listitem}>
            {this.props.data.data.title}
          </label>
          {this.props.data.data.divider ? <ion-icon name="chevron-forward-circle" style={styles.icon} size="medium" /> : <></>}
         </div>
      );
    }
  }