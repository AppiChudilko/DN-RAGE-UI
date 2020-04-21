import React from 'react'
import parseText from '../functions/parseText'

const styles = {
    header: {
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: 400
    }
}


export default function RightLabel(props) {

    return (
        <div>
            <p className="header" style={styles.header} dangerouslySetInnerHTML={{__html: parseText(props.text)}}></p>
        </div>
    )
}