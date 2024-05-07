import React from "react"


export default function Button (props) {
    return(
        <button
            onClick={props.handleClick}
            className= {props.className}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    )
}