import React from 'react'
import '../css/stats.css'

const FlatButton = ({ text, btncolor }) => {
    return (
        <span className="hmenu__gunshop__stats__flatbtn" style={{border: `1px solid ${btncolor}`, ':hover': {backgroundColor: `blue`}}}>
            {text}
        </span>
    )
}

export default FlatButton