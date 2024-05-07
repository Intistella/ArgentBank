import { React, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { validateLength, validateNewUserName } from '../../services/FormValidat'
import { updateUsernameAsync } from '../../redux/UserSlice'
import './editUser.css'
import Transaction from '../../components/transaction/Transaction'

export default function EditUserName () {
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const { userName, firstName, lastName } = useSelector(
        (state) => state.userProfile
    )

    const token = useSelector((state) => state.token)

    const [newUserName, setNewUserName] = useState('')
    const [error, setError] = useState('')

    const editHandler = (event) =>{
        setNewUserName(event.target.value)    
    }
    const submitHandler =  (event) => {
        event.preventDefault()
        if (!newUserName) {
            setError('Username is required')
            return
        }
        if (!validateLength(newUserName, 2)) {
            setError('Username must have at least 2 characters')
            return
        }
        if (!validateNewUserName(newUserName, userName)) {
            setError('Username must be different from current username')
            return
        }
        dispatch(updateUsernameAsync(token, newUserName))
        .then (() => {
            navigate('/userProfile')
        }).catch((error)=>{
            console.log(error)
            setError('An error occurred while updating the username. Please try again')
        })    
    }
    return(
        <main className="editPage-container">
            <h1 className="edit-title">Edit user info</h1>
            <form className="editForm" onSubmit={submitHandler}>
                <div className="form-container">
                    <div className="input-container">
                        <label className="editLabel" htmlFor="newUserName">User name:</label>
                        <input 
                            type="text" 
                            placeholder={userName}
                            id="newUserName" 
                            name="newUserName" 
                            value={newUserName} 
                            onChange={editHandler}
                            className={error? 'editInput' : ''}
                        />
                    </div>
                    <div className="input-container">
                        <label className="editLabel" htmlFor="first-name">First Name:</label>
                        <input
                            type="text"
                            id="first-name"
                            disabled
                            placeholder={firstName}
                        />
                    </div>
                    <div className="input-container">
                        <label className="editLabel" htmlFor="last-name">Last Name:</label>
                        <input
                            type="text"
                            id="last-name"
                            disabled
                            placeholder={lastName}
                        />    
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="editButton">Save</button>
                    <button onClick={() => navigate("/userProfile")} className="editButton">Cancel</button>
                </div>
            </form>
            <div className="errorMessage-container">
                <p className="errorMessage">{error}</p>
            </div>
            <Transaction className="accountEdit" />
        </main>
    )
}