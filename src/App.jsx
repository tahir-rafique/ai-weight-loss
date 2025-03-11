import React from 'react'
import SignIn from './pages/Login/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/Login/SignUp'
import PasswordRecover from './pages/Login/PasswordRecover'
import VerifyCode from './pages/Login/VerifyCode'
import NewPassword from './pages/Login/NewPassword'
import Dashborad from './pages/Dashboard/Dashborad'
import Layout from './pages/Layout'

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

      </Routes >
    </>
  )
}

export default App
