// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RefreshCw, Wallet, Newspaper } from 'lucide-react';

export const homeData = [
    {
        id: 'Update Availability',
        label: 'Update your availability for efficiency',
        icon: RefreshCw,
        link: '/update-availability'
    },
    {
        id: 'OutSource Articles',
        label: 'Outsource your articles to all clients',
        icon: Newspaper,
        link: '/home/sell-articles'
    },
    {
        id: 'Balance',
        label: 'Check available balance in your wallet',
        icon: Wallet,
        link: '/home/earnings'
    },
]