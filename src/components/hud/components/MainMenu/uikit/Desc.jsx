import React from 'react'

const styles = {
    header: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: 400
    },
    container: {
        padding: '20px',
        backgroundColor: '#000'
    }
}

export default function Desc(props) {
    return (
        <div style={styles.container}>
            <p className="header" style={styles.header}>{props.desc}</p>
        </div>
    )
}