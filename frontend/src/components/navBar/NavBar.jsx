import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faGear, faPowerOff, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../../services/AuthN'
import './navBar.css'

export default function NavSwitch (){
    const {userName} = useSelector((state) => state.userProfile)
    const signedIn = useSelector((state) => state.signedIn)

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        logout(dispatch)
        navigate('/')
    }    


    const navDisplay = () => {
        if(location.pathname === "/profile/edit-username"){
            return(
                <div>
                    <Link to="#" className="navBar-item">
                        <span>{userName}</span>
                        <FontAwesomeIcon className="userIcon" icon={faCircleUser}/>
                    </Link>
                    <Link to="#" className="navBar-item">
                        <FontAwesomeIcon icon={faGear} />
                    </Link>
                    <Link onClick={logoutHandler} to="/">
                        <FontAwesomeIcon icon={faPowerOff} />
                    </Link>
                </div>
            )
        }
        return signedIn ? (
            <>
            <div className="main-nav">
                <Link to="/userProfile" className="navBar-item">
                    <FontAwesomeIcon className="userIcon" icon={faCircleUser}/>
                    <span>{userName}</span>
                </Link>
                <Link onClick={logoutHandler} to="/" className="navBar-item">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span className="navBar-item-signout">Sign Out</span>
                </Link>
            </div>    
            </>
        ):(
            <div className="main-nav">
                <Link className="navBar-item" to="/signIn">   
                    <FontAwesomeIcon className="userIcon" icon={faCircleUser}/>                
                    <span className="signIn-link">Sign In</span>
                </Link> 
            </div>
        )
    } 
        return (
        <nav className="main-nav">
            <div className="main-nav__links-wrapper">{navDisplay()}</div>
        </nav>
    )
}