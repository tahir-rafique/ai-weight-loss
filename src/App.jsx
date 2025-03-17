import React from 'react'
import SignIn from './pages/login/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/login/SignUp'
import PasswordRecover from './pages/login/PasswordRecover'
import VerifyCode from './pages/login/VerifyCode'
import NewPassword from './pages/login/NewPassword'
import Conversation from './pages/conversation/conversation'
import DashboradPage from './pages/dashboard/dashboradPage'

function App() {
  return (
    <>
      <Routes>

        {/* Login Routes */}
        <Route path='/' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='recover-password' element={<PasswordRecover />} />
        <Route path='verify-code' element={<VerifyCode />} />
        <Route path='new-password' element={<NewPassword />} />



        {/* Dashboard */}
        <Route path='dashboard-page' element={<DashboradPage />} />






        {/* Conversation  */}
        <Route path='conversation' element={<Conversation />} />


        {/* Setting */}




      </Routes >
    </>
  )
}

export default App
