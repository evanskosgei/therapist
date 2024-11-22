/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VPNErrorPage = () => {
    const [ip, setIp] = useState();
    const navigate = useNavigate();

    const getIp = async (ip) => {
        try {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();
            setIp(data.ip);
            if(data.ip == null){
                navigate('/');
            }
            
        } catch (error) {
            setIp(null);
        }
    };
    return (
        <div className="bg-white">
            <div className="container flex items-center justify-center min-h-screen px-6 py-12 mx-auto">
                <div className="w-full ">
                    <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                        <p className="text-sm font-medium text-[#72BF78]">VPN Detected</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Please Disable Your VPN</h1>
                        <p className="mt-4 text-gray-700">We&apos;ve detected that you&apos;re using a VPN. To access our website, please disable your VPN and refresh the page.</p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                            <button onClick={getIp} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 bg-white border rounded-lg  gap-x-2 sm:w-auto  hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>

                                <span>Refresh</span>
                            </button>

                            <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#72BF78] rounded-lg shrink-0 sm:w-auto hover:bg-opacity-90">
                                VPN Help
                            </button>
                        </div>
                    </div>

                    <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 rounded-lg bg-[#72BF78]/10">
                            <span className="text-[#72BF78]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </span>

                            <h3 className="mt-6 font-medium text-gray-700 ">Why Disable VPN?</h3>

                            <p className="mt-2 text-gray-500">Some services may be restricted when using a VPN.</p>

                            <a href="#" className="inline-flex items-center mt-4 text-sm text-[#72BF78] gap-x-2 hover:underline">
                                <span>Learn More</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-6 rounded-lg bg-[#72BF78]/10">
                            <span className="text-[#72BF78]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.071c1.5-1.5 3.728-1.5 5.228 0 1.5 1.5 1.5 3.728 0 5.228l-3.354 3.354a1.5 1.5 0 0 1-2.122 0L8 14.25a2.25 2.25 0 0 0-3.182 0l-.97.97a1.5 1.5 0 0 1-2.122-2.122l1.929-1.93a5.25 5.25 0 0 1 7.425 0l1.025 1.025a2.25 2.25 0 0 0 3.182 0l3.354-3.354a5.25 5.25 0 0 0-7.425-7.425L9.879 7.071z" />
                                </svg>
                            </span>

                            <h3 className="mt-6 font-medium text-gray-700 ">VPN Troubleshooting</h3>

                            <p className="mt-2 text-gray-500 ">Need help turning off your VPN?</p>

                            <a href="#" className="inline-flex items-center mt-4 text-sm text-[#72BF78] gap-x-2 hover:underline">
                                <span>Get Support</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-6 rounded-lg bg-[#72BF78]/10 ">
                            <span className="text-[#72BF78]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.648 3.02c-.125-.5-.575-.852-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                                </svg>
                            </span>

                            <h3 className="mt-6 font-medium text-gray-700 ">Contact Support</h3>

                            <p className="mt-2 text-gray-500 ">Still experiencing issues?</p>

                            <a href="#" className="inline-flex items-center mt-4 text-sm text-[#72BF78] gap-x-2 hover:underline">
                                <span>Contact Us</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 A0 24 24" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VPNErrorPage;