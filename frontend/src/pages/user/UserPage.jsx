import React  from "react"
import { useSelector } from 'react-redux'
import Transactions from '../../components/transaction/Transaction'
import './userPage.css'
import { Link } from 'react-router-dom'



 
export default function UserPage() {
    const {userName} = useSelector((state) => state.userProfile)
    

    return(
        <main className="dark-container">
            <section className="title-bar">
                <h1>
                    <span className="profile-title">Welcome back</span> <br />
                    <span className="profile-title">{` ${userName}`}</span>
                </h1>
                <Link to='/editUser' className="editUser-link">
                    <button className="edit-button">Edit Name</button>
                </Link>
            </section>
            <Transactions className='account' />
        </main>
    )

}