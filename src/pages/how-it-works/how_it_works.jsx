/* eslint-disable no-unused-vars */
import React from 'react'
import ImgData from '../../assets/imageData'

const How_it_works = () => {
    const accentColor = '#72BF78';

    const sections = [
        {
            title: "Client Booking",
            image: "client",
            steps: [
                "Client will register on our website and select their favourite therapist.",
                "Clients will be requested to pay first before booking a session.",
                "Clients will be sent an email of their sessions and the specific dates and time."
            ]
        },
        {
            title: "Therapist",
            image: "therapist",
            steps: [
                "Therapist will register and update their rates and their availability.",
                "Once a client has booked a session an email will be sent to you and exact times and date will be updated in our calendar.",
                "Also You'll be required to attend a session with your client and failure to do so a penalty will be imposed on you and your account may be suspended depending on the grounds."
            ]
        },
        {
            title: "Virtual Meet",
            image: "vmeet",
            steps: [
                "Virtual meet between therapist and client will be strictly done via our platform. Failure to do so will lead to suspension.",
                "Client details will not be revealed. We'll mask their details using system generated user name. Camera will also be off by default unless he/she/they will activate without being coarsed.",
            ]
        },
        {
            title: "Payments",
            image: "payment",
            steps: [
                "Client will not be able to book a session without paying. We'll deduct some gross amounts from their accounts",
                "Therapist will be able to withdraw after 72 hours of completing a session.",
                "Refund is also applicable for therapist who fail to show up for a booked session."
            ]
        },
        {
            title: "Articles",
            image: "article",
            steps: [
                "Earn extra money by selling articles on our platform.",
                "An article will be reviewed by our team before it is lined up for sale. It should be unique, Free from plugarism and it should not be AI generated.",
                "This entire process will take less than 72 hours.",
                 "Payment will be done after every sale. A deduction of 20% will be applied per sale."
            ]
        },

    ];
    return (
        <div className="h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <header style={{ backgroundColor: accentColor }} className="text-white py-8 px-6">
                <h1 className='text-center text-3xl md:text-4xl font-bold'>How It Works</h1>
                <p className="text-center mt-4 text-lg">Discover the simple process of our therapy booking service</p>
            </header>

            <div className="p-6 md:p-8 space-y-12">
                {sections.map((section, index) => (
                    <article key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="w-full md:w-1/3">
                                <img 
                                    className="rounded-lg object-cover w-full h-48 md:h-auto shadow-md" 
                                    src={ImgData(section.image)} 
                                    alt={section.title}
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h2 style={{ color: accentColor }} className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
                                <div className="list-decimal list-inside space-y-3">
                                    {section.steps.map((step, stepIndex) => (
                                        <span key={stepIndex} className="text-gray-600">{step}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div>
    )
}

export default How_it_works