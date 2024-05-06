import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/UserSlice'
import {thunk} from 'redux-thunk'



const store = configureStore({
  reducer: userReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
})

export default store
