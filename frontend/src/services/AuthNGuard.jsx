import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthNGuard = ({ children }) => {
    const signedIn = useSelector((state) => state.signedIn)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (signedIn !== null) {
            setLoading(false)
        } else {
            setTimeout(() => {
            setLoading(false)
            }, 1000)
        }
    }, [signedIn])

    if (loading) {
        return <div>Loading...</div>
    } 
    if (!signedIn) {
        return <Navigate to="/signIn" />
    }
    return children
}

export default AuthNGuard