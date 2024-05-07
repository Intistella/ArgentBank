import React, { useState, useEffect } from "react";
import './signIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { isNotEmpy, validateEmail } from "../../services/FormValidat";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInAsync } from "../../redux/UserSlice";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formState, setFormState] = useState({
        userName: '',
        password: '',
        error: '',
        showPassword: false,
        rememberMe: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, password, rememberMe } = formState;
        try {
            const signInResp = await dispatch(signInAsync(userName, password, rememberMe));

            if (!isNotEmpy(userName)) {
                setFormState({
                    ...formState,
                    error: 'Username field can not be empty, try again.'
                });
                return;
            }

            if (!validateEmail(userName)) {
                setFormState({
                    ...formState,
                    error: 'Username must be an email address, try again.'
                });
                return;
            }

            if (!isNotEmpy(password)) {
                setFormState({
                    ...formState,
                    error: 'Password field can not be empty, try again,'
                });
                return;
            }

            if (signInResp.success === false) {
                setFormState({
                    ...formState,
                    error: 'the username and/or password is incorrect, try again.'
                });
                return;
            }

            if (signInResp === true) {
                navigate("/userProfile");
            }
        } catch (error) {
            setFormState({
                ...formState,
                error: 'the username and/or password is incorrect, try again.'
            });
            return;
        }
    };

    const handleCheckboxChange = () => {
        setFormState({
            ...formState,
            rememberMe: !formState.rememberMe
        });

        if (formState.rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }
    };

    useEffect(() => {
        const rememberMe = localStorage.getItem('rememberMe');
        if (rememberMe === 'true') {
            setFormState({
                ...formState,
                rememberMe: true
            });
        }
    }, []);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faCircleUser} />
                <h1 className="form-title">Sign In</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formState.userName}
                            onChange={(e) =>
                                setFormState({ ...formState, userName: e.target.value })
                            }
                            className={
                                formState.error &&
                                (!isNotEmpy(formState.userName) || !validateEmail(formState.userName))
                                    ? 'error'
                                    : ''
                            }
                            autoComplete="username"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type={formState.showPassword ? "text" : "password"}
                            id="password"
                            value={formState.password}
                            onChange={(e) =>
                                setFormState({ ...formState, password: e.target.value })
                            }
                            className={
                                formState.error && !isNotEmpy(formState.password)
                                    ? 'error'
                                    : ''
                            }
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={formState.rememberMe}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
                {formState.error && (
                    <div className="error-message-container">
                        <div className="signIn-error">{formState.error}</div>
                    </div>
                )}
            </section>
        </main>
    );
}