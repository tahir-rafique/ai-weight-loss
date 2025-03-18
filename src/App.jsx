import React from 'react'
import SignIn from './pages/login/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/login/SignUp'
import PasswordRecover from './pages/login/PasswordRecover'
import VerifyCode from './pages/login/VerifyCode'
import NewPassword from './pages/login/NewPassword'
import Conversation from './pages/conversation/conversation'
import DashboradPage from './pages/dashboard/dashboradPage'
import SettingPage from './pages/setting/settingPage'
import GoalPage from './pages/goal/goalPage'
import CommunityPage from './pages/community/communityPage'

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

        {/* ai-chat / Conversation  */}
        <Route path='/conversation-page' element={<Conversation />} />

        {/* goals  */}
        <Route path='/goals-page' element={<GoalPage />} />

        {/* community  */}
        <Route path='/community-page' element={<CommunityPage />} />


        {/* Setting */}
        <Route path='/settings-page' element={<SettingPage />} />





      </Routes >
    </>
  )
}

export default App
