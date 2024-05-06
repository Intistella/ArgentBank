import React from "react"
import NavSwitch from '../navBar/NavBar'
import './header.css'
import logo from '../../assets/images/argentBankLogo.webp'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header className="App-header">
            <Link to ="/">
                <img src={logo} className="App-logo" alt="Argent Bank logo" />
            </Link>
            <NavSwitch />
        </header>
    )
}





  