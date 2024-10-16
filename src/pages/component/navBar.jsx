/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react'
import { Menu, Mail, CircleAlert, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import DropDownMenu from './dropDownMenu';

const NavBar = () => {
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full px-4 py-2 bg-white shadow-md rounded-md lg:px-8 lg:py-3">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/home" className="mr-4 py-1.5 text-xl font-semibold text-gray-800 hover:text-[#72BF78] transition-colors duration-300">
                    Anony Aid
                </Link>
                <div className="relative items-center">
                    <ul className="flex items-center gap-2 lg:gap-4">
                        <li>
                            <Link to="/messages" className="flex items-center p-2 text-gray-600 hover:text-[#72BF78] hover:bg-green-100 rounded-full transition-all duration-300">
                                <Mail className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/alerts" className="flex items-center p-2 text-gray-600 hover:text-[#72BF78] hover:bg-green-100 rounded-full transition-all duration-300">
                                <CircleAlert className="h-6 w-6" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/notifications" className="flex items-center p-2 text-gray-600 hover:text-[#72BF78] hover:bg-green-100 rounded-full transition-all duration-300">
                                <Bell className="h-6 w-6" />
                            </Link>
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="flex items-center px-3 py-2 text-sm font-medium text-white bg-[#72BF78] rounded-md hover:bg-green-600 transition-colors duration-300">
                                <Menu className="h-5 w-5 mr-2" />
                                <span>Menu</span>
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2">
                                    <DropDownMenu />
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;