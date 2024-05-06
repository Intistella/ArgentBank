import { React, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { validateLength, validateNewUserName } from '../../services/FormValidat'
import { updateUsernameAsync } from '../../redux/UserSlice'
import './editUser.css'

export default function EditUserName () {
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const { userName } = useSelector(
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
            <h1 className="edit-title">Edit your username</h1>
            <form className="editForm" onSubmit={submitHandler}>
                <label className="editLabel" htmlFor="newUserName">New username</label>
                <input 
                    type="text" 
                    id="newUserName" 
                    name="newUserName" 
                    value={newUserName} 
                    onChange={editHandler}
                    className={error? 'editInput' : ''}
                />
                <div className="button-container">
                    <button type="submit" className="editButton">Save</button>
                    <button onClick={() => navigate("/userProfile")} className="editButton">Cancel editing</button>
                </div>
            </form>
            <div className="error-container"> 
                <p className="errorMessage">{error}</p>
            </div>
            
        </main>
    )
}