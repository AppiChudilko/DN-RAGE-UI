import React from 'react'
import '../css/stats.css'

const FlatButton = ({ text, btncolor, customStyle }) => {
    return (
        <span className="hmenu__gunshop__stats__flatbtn" style={customStyle ? customStyle : {border: `1px solid ${btncolor}`}}>
            {text}
        </span>
    )
}

export default FlatButton