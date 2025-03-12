import React from 'react'
import SignIn from './pages/Login/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/Login/SignUp'
import PasswordRecover from './pages/Login/PasswordRecover'
import VerifyCode from './pages/Login/VerifyCode'
import NewPassword from './pages/Login/NewPassword'
import Dashborad from './pages/Dashboard/Dashborad'
import Layout from './pages/Layout'
import Conversation from './pages/Conversation/Conversation'

function App() {
  return (
    <>

      <Routes>


        {/* Login Routes */}
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/password-recover' element={<PasswordRecover />} />
        <Route path='/verify-code' element={<VerifyCode />} />
        <Route path='/new-password' element={<NewPassword />} />

        {/* Dashboard */}
        <Route path='layout' element={<Layout />} />

        {/* Conversation  */}
        <Route path='conversation' element={<Conversation />} />


      </Routes >
    </>
  )
}

export default App
