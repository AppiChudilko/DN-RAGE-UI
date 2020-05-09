import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '4rem',
        fontWeight: 400,
        padding: '20px 20px',
        textAlign: 'center',
        minHeight: '65px'
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

    /*if (props.banner)
    {
        styles.header.backgroundImage = `url(${require('../img/banners/' + props.banner + '.png')})`;
        styles.header.backgroundPosition = 'center';
    }*/
    
   console.log(props.banner)
    return (
        <div>
            <div style={{backgroundImage: props.banner ? props.banner : '', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <h1 className="header" style={styles.header}>{props.headerText}</h1>
            </div>
            <div style={styles.headerDataContainer}>
                <div style={styles.headerDesc} dangerouslySetInnerHTML={{__html: parseText(props.headerDesc)}}></div>
                <div style={styles.headerDescCount}>{props.headerData}</div>
            </div>
        </div>
    )
}