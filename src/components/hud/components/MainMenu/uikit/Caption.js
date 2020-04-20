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
          <input style={{opacity: 0, height: "0px", width: "0px"}} autoFocus={true} />
          <label style={styles.listitem}>
            {this.props.menuList.data.title}
          </label>
          {this.props.menuList.data.divider ? <ion-icon name="chevron-forward-circle" style={styles.icon} size="medium" /> : <></>}
         </div>
      );
    }
  }