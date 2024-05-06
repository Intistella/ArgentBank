import React from "react"
import './signIn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { isNotEmpy, validateEmail } from "../../services/FormValidat"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signInAsync } from "../../redux/UserSlice"
import { useState } from "react"

export default function SignIn (){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formState, setFormState] = useState({
        userName: '',
        password: '',
        error:'',
        showPassword: false,
        rememberMe: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { userName, password, rememberMe }= formState

        if(!isNotEmpy(userName)){
            setFormState({
                ...formState,
                error: 'Username is required'
            }) 
            return
        }    
        if (!validateEmail(userName)){
            setFormState({
               ...formState,
                error: 'Username must be an email address'
            })
            return
        }
        if (!isNotEmpy(password)){
            setFormState({
               ...formState,
                error: 'Password is required'
            })
            return
        }
        const response = await dispatch(signInAsync(userName, password, rememberMe))
        if(response === true){
            navigate("/userProfile")
        }else if(response && response.success === false) {
            setFormState({
               ...formState,
                error: response.error.message
            })
        }
    }    

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1 className="form-title">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" 
                        id="username" value={formState.userName} 
                        onChange={(e) => setFormState({...formState, userName: e.target.value})}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type={formState.showPassword ? "text":"password"}  
                        id="password" value={formState.password} 
                        onChange={(e)=>setFormState({...formState,password: e.target.value})} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={formState.rememberMe} 
                            onChange={()=>setFormState({
                                ...formState,
                                rememberMe:!formState.rememberMe
                        })} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" 
                        className="sign-in-button">Sign In</button>
                </form>
                {formState.error &&(
                    <div className="error-message">{formState.error}</div>
                )}
            </section>       
        </main>
    )
}