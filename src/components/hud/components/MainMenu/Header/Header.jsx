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
        <div>
            <h1 className="header" style={styles.header}>{props.headerText}</h1>
            <div style={styles.headerDataContainer}>
                <div style={styles.headerDesc}>{props.headerDesc}</div>
                <div style={styles.headerDescCount}>{props.headerData}</div>
            </div>
        </div>
    )
}