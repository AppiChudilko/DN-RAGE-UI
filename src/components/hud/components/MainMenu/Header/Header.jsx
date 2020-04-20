import React from 'react'

const styles = {
    header: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '4.2rem',
        fontWeight: 400,
        padding: '20px 20px',
        textAlign: 'center'
    },
    headerDesc: {
        fontFamily: 'Roboto',
        color: '#64B5F6',
        background: '#000',
        fontWeight: 400,
        padding: '10px 20px',
    }
}

export default function Header(props) {
    return (
        <div>
            <h1 className="header" style={styles.header}>{props.headerText}</h1>
            <div style={styles.headerDesc}>{props.headerDesc}</div>
        </div>
    )
}