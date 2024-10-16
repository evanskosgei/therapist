/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Star, Clock, MessageSquare, AlertTriangle, XCircle, AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeData } from './component/homeData';

const Dashboard = () => {
    const [currentDiv, setCurrentDiv] = useState('home')
    const user = {
        username: 'staroneso123',
        avatar: '/path/to/avatar.jpg',
        reviewCount: 3010,
        level: 1,
        successRate: 90,
        replyRate: 89,
        statusUpdateRate: 91,
        inProgressCount: 0,
        warningCount: 0,
        suspensionCount: 0,
        overdueCount: 6,
        activitySummary: '9 answers in last 180 days'
    };

    return (
        <div className="bg-gray-100 p-4 sm:p-6 md:p-8">
            <main className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-8">
                    <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#72BF78] rounded-full shrink-0 flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-0 sm:mr-4">
                            {user.username.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">{user.username}</h2>
                            <div className="flex items-center justify-center sm:justify-start">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                                ))}
                                <span className="ml-2 text-sm sm:text-base text-gray-600">({user.reviewCount.toLocaleString()})</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <Stat icon={Clock} label="Success rate" value={`${user.successRate}%`} />
                        <Stat icon={MessageSquare} label="Replies" value={`${user.replyRate}%`} />
                        <Stat icon={Clock} label="Status Updates" value={`${user.statusUpdateRate}%`} />
                        <Stat icon={AlertOctagon} label="In Progress" value={user.inProgressCount} />
                        <Stat icon={AlertTriangle} label="Warnings" value={user.warningCount} />
                        <Stat icon={XCircle} label="Suspensions" value={user.suspensionCount} />
                        <Stat icon={Clock} label="Overdue" value={user.overdueCount} />
                    </div>

                    <div className="text-xs sm:text-sm text-gray-600 bg-gray-100 p-3 sm:p-4 rounded-lg">
                        <strong>ACTIVITY:</strong> {user.activitySummary}
                    </div>
                </div>
            </main>

            <div className="max-w-7xl mx-auto">
                <div className="bg-white py-2 px-3 rounded-lg shadow-md">
                    <nav className="flex flex-wrap text-center justify-around sm:justify-start gap-4 sm:gap-8 border-b overflow-x-auto">
                        <NavLink onClick={() => setCurrentDiv('home')} label="Home" active={currentDiv === 'home'} />
                        <NavLink onClick={() => setCurrentDiv('bookings')} label="Bookings" active={currentDiv === 'bookings'} />
                        <NavLink onClick={() => setCurrentDiv('statistics')} label="Statistics" active={currentDiv === 'statistics'} />
                    </nav>
                    {currentDiv === 'home' && (
                        <div className="py-8 sm:py-12 md:py-16">
                            <div className="mx-auto grid max-w-screen-lg grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4">
                                {homeData.map((home, index) => (
                                    <article key={index} className="border items-center justify-center m-auto cursor-pointer overflow-hidden pb-2 shadow-lg transition-transform duration-200 hover:bg-gray-100">
                                        <Link to={home.link} className="block h-full w-full py-2">
                                            <home.icon className="size-8 sm:size-10 text-[#72BF78] w-full object-cover" alt="featured image" />
                                            <div className="w-full text-center p-3 sm:p-4">
                                                <p className="mb-2 text-lg sm:text-xl font-medium text-gray-800">{home.id}</p>
                                                <p className="text-sm sm:text-md font-light text-gray-400">{home.label}</p>
                                                <div className="justify-center mt-3 sm:mt-4 flex flex-wrap items-center">
                                                    <Link to={home.link} className='px-4 sm:px-6 py-2 sm:py-3 border rounded-full border-[#72BF78] text-sm sm:text-base'>Update</Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                    {currentDiv === 'bookings' && (
                        <div>
                            bookings
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Stat = ({ icon: Icon, label, value }) => (
    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
        <div className="flex items-center mb-1 sm:mb-2">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#72BF78]" />
            <div className="font-semibold text-base sm:text-lg">{value}</div>
        </div>
        <div className="text-xs sm:text-sm text-gray-600">{label}</div>
    </div>
);

const NavLink = ({ onClick, label, active }) => (
    <button
        onClick={onClick}
        className={`flex whitespace-nowrap border-b-2 py-2 px-2 sm:px-3 text-sm sm:text-md font-medium transition-all duration-200 ease-in-out
            ${active
                ? "border-b-[#72BF78] text-[#72BF78] font-semibold"
                : "border-transparent text-gray-600 hover:border-b-[#72BF78] hover:text-[#72BF78]"
            }`}
    >
        {label}
    </button>
);

export default Dashboard;