import React from "react"
import { useState } from "react"
import arrow from '../../assets/images/arrow-next-right-icon.webp'

export default function Dropdown(props){
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return(
        <div className="dropDown">
            <div className="dropDown-btn" onClick={toggle}>
                <img className={open ? 'arrow' : 'arrowDown'} src={arrow} alt="arrow" />
            </div>

            {open &&(
                <div className="dropDown-IsOpen">
                <div className="dropDown-description">
                    <p>{props.date}</p>
                    <p>{props.description}</p>
                    <p>{props.amount}</p>
                    <p>{props.balance}</p>
                </div>
            </div>
            )}
            
        </div>
    )
}