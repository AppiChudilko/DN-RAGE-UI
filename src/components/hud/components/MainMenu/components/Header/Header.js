import React from 'react'

const styles = {
    header: {
        fontFamily: 'WD',
        color: '#fff',
        fontSize: '4.2rem',
        fontWeight: 400,
        textAlign: 'center'
    }
}

export default function Header(props) {
    return (
        <div>
            <h1 className="header" style={styles.header}>{props.headerText}</h1>
        </div>
    )
}