// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Home, Settings, DollarSign, LogOut, User, HelpCircle } from 'lucide-react'

export const dropDownMenuData = () => [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: Home,
        link: '/home'
    },
    {
        id: 'profile',
        label: 'Profile',
        icon: User,
        link: '/home/profile'
    },
    {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        link: '/home/settings'
    },
    {
        id: 'earnings',
        label: 'Earnings',
        icon: DollarSign,
        link: '/home/earnings'
    },
    {
        id: 'help',
        label: 'How it Works',
        icon: HelpCircle,
        link: '/home/how-it-works'
    },
    {
        id: 'logout',
        label: 'Log Out',
        icon: LogOut,
        link: null
    }
]