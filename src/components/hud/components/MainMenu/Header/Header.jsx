import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '4.2rem',
        fontWeight: 400,
        padding: '20px 20px',
        textAlign: 'center'
    },
    headerDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px 20px',
        background: '#000',
        fontFamily: 'Roboto',
        color: '#64B5F6',
        fontWeight: 400,
        alignItems: 'center'
    },
    headerDesc: {
        marginRight: 'auto',
        width: '80%'
    },
    headerDescCount: {
    }
}

export default function Header(props) {
   
    return (
        <div style={{backgroundImage: props.banner ? `url(${require('../img/banners/' + props.banner + '.png')})` : ''}}>
            <h1 className="header" style={styles.header}>{props.headerText}</h1>
            <div style={styles.headerDataContainer}>
                <div style={styles.headerDesc} dangerouslySetInnerHTML={{__html: parseText(props.headerDesc)}}></div>
                <div style={styles.headerDescCount}>{props.headerData}</div>
            </div>
        </div>
    )
}