/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route } from 'react-router-dom';
import SignIn from './AuthForms/signin';
import SignUp from './AuthForms/signup';
import Forgot_password from './AuthForms/forgot_password';
import ResetPassword from './AuthForms/reset_password';

import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile/profile';
import SettingsLayout from './pages/settings/settings_layout';
import EarningLayout from './pages/earnings/earning_layout';
import How_it_works from './pages/how-it-works/how_it_works';
import Out_source_article from './pages/article/out_source_article';

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgot-password" element={<Forgot_password/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />

        <Route path='/home' element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='settings' element={<SettingsLayout/>} />
          <Route path='earnings' element={<EarningLayout/>} />
          <Route path='how-it-works' element={<How_it_works/>} />
          <Route path='sell-articles' element={<Out_source_article/>} />
        </Route>

    </Routes>
  )
}

export default Routing;