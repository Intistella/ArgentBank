import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../components/header/Header'
import Home from '../pages/home/Home'
import Footer from '../components/footer/Footer'
import SignIn from '../pages/signIn/SignIn'
import UserPage from '../pages/user/UserPage'
import EditUser from '../pages/editUserName/EditUser'

export default function AppRouter() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/userProfile" element={<UserPage />} />
          <Route path="/editUser" element={<EditUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

