import React from 'react'

const styles = {
    header: {
        fontFamily: 'HACKED',
        color: '#fff',
        fontSize: '1.2rem',
        fontWeight: 400
    },
    container: {
        paddingLeft: '10%',
        paddingRight: '10%',
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