import  {setToken, setUserPage, setConnexion, resetUserPage } from '../redux/UserSlice'
import { loginUser as apiLoginUser, getUserPage } from './Api'
  
export const logout = (dispatch) => {
    localStorage.removeItem("token")
    dispatch(resetUserPage())
}
  
export const loginUser = async (userName, password, dispatch, navigate) => {
    try {
        const loginData = await apiLoginUser(userName, password)
        const token = loginData.body.token
  
        dispatch(setToken(token))
        localStorage.setItem("token", token)
        dispatch(setConnexion(true))
  
        const userPageData = await getUserPage(token)
        const userProfile = userPageData.body
        dispatch(setUserPage(userProfile))
  
        navigate("/profile")
        return ""
    }catch (error) {
        return "Failed to sign in."
    }
}