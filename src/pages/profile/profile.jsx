/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Star, User, MapPin, Mail, Phone, Book, Clock, ThumbsUp, Award, CheckCircle } from 'lucide-react';

const Profile = () => {
    const tutor = {
        name: "staroneso123",
        subjects: ["Cognitive Therapy", "Marriage Therapy", "Mindfulness Therapy"],
        rating: 4.6,
        reviews: 1024,
        questions: 3650,
        satisfaction: 98,
        bio: "I'm a passionate therapist with over 10 years of experience in Health and Medical fields. My goal is to make you feel good and mentally stable.",
        education: "Ph.D. in Public Health and Psychology, MIT",
        badges: ["Top Therapist", "Quick Responder", "Subject Matter Expert"]
    };
    return (
        <div className="h-screen overflow-auto bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-1/3">
                        <div className="bg-[#72BF78] text-white rounded-lg p-6 text-center">
                            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                                <span className="text-[#72BF78] text-4xl font-bold">
                                    {tutor.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <h1 className="text-2xl font-bold mb-2">{tutor.name}</h1>
                            <div className="flex items-center justify-center mb-4">
                                <Star className="w-5 h-5 fill-current text-yellow-400" />
                                <span className="ml-1 font-semibold">{tutor.rating}</span>
                                <span className="ml-2 text-sm">({tutor.reviews} reviews)</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {tutor.badges.map((badge, index) => (
                                    <span key={index} className="bg-white text-[#72BF78] text-xs font-semibold px-2 py-1 rounded-full">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">About Me</h2>
                            <p className="text-gray-600">{tutor.bio}</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Education</h2>
                            <p className="text-gray-600">{tutor.education}</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">Subjects</h2>
                            <div className="flex flex-wrap gap-2">
                                {tutor.subjects.map((subject, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {subject}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Stat icon={Book} label="Sessions" value={tutor.questions} />
                            <Stat icon={ThumbsUp} label="Satisfaction" value={`${tutor.satisfaction}%`} />
                            <Stat icon={Clock} label="Avg. Response" value="30 min" />
                        </div>
                    </div>
                </div>

                <nav className="flex justify-between border-b border-gray-200 mb-6">
                    {['Total Reviews', '5 Stars', '4 Stars', '3 Stars', '2 Stars'].map((item, index) => (
                        <NavItem key={index} label={item} active={index === 1} />
                    ))}
                </nav>

                {/* Placeholder for content */}
                <div className="p-4 bg-gray-50 rounded-lg">
                    <TestimonialCard
                        quote="staroneso123 is an exceptional Therapist! His explanations are clear, and he always ensures I understand the concept before moving on. Thanks to him, I've significantly improved my mental Health."
                        author="Emily S."
                        role="Physics Student"
                        avatarUrl="/api/placeholder/100/100"
                    />
                </div>
            </div>
        </div>
    );
};

const Stat = ({ label, value }) => (
    <div className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
        <span className="text-[#72BF78]">{value}</span> {label}
    </div>
);

const NavItem = ({ label, active }) => (
    <a
        href="#"
        className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${active
            ? 'border-[#72BF78] text-[#72BF78]'
            : 'border-transparent text-gray-500 hover:text-[#72BF78] hover:border-[#72BF78]'
            }`}
    >
        {label}
    </a>
);
const TestimonialCard = ({ quote, author, role, avatarUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-[#72BF78] fill-current" />
                ))}
            </div>
            <blockquote className="text-gray-700 mb-4">{quote}</blockquote>
            <div className="flex items-center">
                <img
                    className="h-10 w-10 rounded-full mr-3"
                    src={avatarUrl}
                    alt={`Avatar of ${author}`}
                />
                <div>
                    <p className="font-semibold text-gray-800">{author}</p>
                    <p className="text-sm text-gray-600">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;