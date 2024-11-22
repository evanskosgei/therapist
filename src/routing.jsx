/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './AuthForms/signin';
import SignUp from './AuthForms/signup';
import Forgot_password from './AuthForms/forgot_password';
import ResetPassword from './AuthForms/reset_password';
import Verify_email from './AuthForms/verify_email';

import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile/profile';
import SettingsLayout from './pages/settings/settings_layout';
import EarningLayout from './pages/earnings/earning_layout';
import How_it_works from './pages/how-it-works/how_it_works';
import Out_source_article from './pages/article/out_source_article';

// error pages
import VPNErrorPage from './ErrorPages/vpnErrorPage';

import { useSelector, useDispatch } from 'react-redux';
import { setUser, setLoading, setError } from './Redux/authSlice';


const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  if (loading) {
      return <div>Loading...</div>
  }

  if (!user) {
      return <Navigate to="/" replace />
  }
  return children;
};

const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<Forgot_password />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path='/verify-email' element={<Verify_email />} />
      <Route path='/disable-vpn' element={<VPNErrorPage/>}/>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
        <Route index element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<SettingsLayout />} />
        <Route path='earnings' element={<EarningLayout />} />
        <Route path='how-it-works' element={<How_it_works />} />
        <Route path='sell-articles' element={<Out_source_article />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  )
}

export default Routing;