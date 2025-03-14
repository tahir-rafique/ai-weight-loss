import React from 'react'
import SignIn from './pages/login/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/login/SignUp'
import PasswordRecover from './pages/login/PasswordRecover'
import VerifyCode from './pages/login/VerifyCode'

import NewPassword from './pages/login/NewPassword'
import Layout from './pages/Layout'
import Conversation from './pages/Conversation/Conversation'

function App() {
  return (
    <>

      <Routes>

        {/* Login Routes */}
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/recover-password' element={<PasswordRecover />} />
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
