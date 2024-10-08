/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './component/navBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className=''>
            <NavBar />
            <div className="flex h-full w-full flex-col">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;