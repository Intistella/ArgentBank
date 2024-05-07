import { createSlice } from "@reduxjs/toolkit";
import { getUserPage, updateUserPage, loginUser } from '../services/Api'
import { logout } from "../services/AuthN"


const initialState = {
    signedIn: false,
    token: null, 
    userProfile: {}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setConnexion: (state, action) => {
            state.signedIn = action.payload
        },

        setToken: (state, action) => {
            state.token = action.payload;
        },

        setUserPage: (state, action) => {
            state.userProfile = action.payload;
        },

        resetUserPage: () => initialState,

    }
})

export const { setConnexion, setToken, setUserPage, resetUserPage } =
    userSlice.actions


export const getUserPageAsync = (token) => {
    return async (dispatch) => {
        try {
            const userPageData = await updateUserPage(token)
            const userProfile = userPageData.body
            dispatch(setUserPage(userProfile))
        } catch (error) {
            if (error.message === "invalid token") {
                logout(dispatch)
                console.error("Error")
            } else {
                console.error("Error", error)
            }
        }
    }
}


export const updateUsernameAsync = (token, newUsername) => {
    
    return async (dispatch) => {
        try {
            const updatedProfileData = await updateUserPage(token, newUsername)
            const updatedProfile = updatedProfileData.body

            dispatch(setUserPage(updatedProfile))
        } catch (error) {
            console.error("Error", error)
        }
    }
}


export const signInAsync = (username, password, rememberMe) => {
    return async (dispatch) => {
        try {
            const loginData = await loginUser(username, password)
            const token = loginData.body.token

            dispatch(setToken(token))

            if (rememberMe) {
                localStorage.setItem("token", token)
            } else {
                localStorage.removeItem("token")
            }

            const userProfileData = await getUserPage(token)
            const userProfile = userProfileData.body
            dispatch(setUserPage(userProfile))
            dispatch(setConnexion(true))
            return true
        } catch (error) {
            console.error("Error in sign-in", error)
            return { success: false, error }
        }
    }
}
export default userSlice.reducer;
