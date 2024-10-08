/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Upload, CircleCheck, DollarSign, Clock, Banknote, CircleX } from 'lucide-react';

const Out_source_article = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };
    console.log(selectedFile)

    return (
        <div className="h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                    <h1 className="text-center font-bold text-3xl mb-6 text-gray-800">Sell Your Articles and Documents</h1>
                    <div className="mb-4">
                        <label className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload className="w-10 h-10 mb-4 text-gray-400" />
                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500">PDF, DOC or DOCX (MAX. 1MB)</p>
                            </div>
                            <input type="file" accept='.pdf, .doc, .docx' className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>

                    {selectedFile && (
                        <div className="p-3 bg-gray-100 rounded-lg relative">
                            <button 
                                className="absolute top-2 right-2 text-gray-600 hover:text-red-500" 
                                onClick={handleRemoveFile}
                                aria-label="Remove File"
                            >
                                <CircleX className="w-6 h-6" />
                            </button>
                            <p className="text-gray-600">{selectedFile.name}</p>
                        </div>
                    )}

                    <div className="space-y-4 text-gray-600">
                        <p className="flex items-center">
                            <DollarSign className="w-5 h-5 mr-2 text-[#72BF78]" /> Earn extra money by selling unique articles on our platform.</p>
                        <p className="flex items-center">
                            <CircleCheck className="w-5 h-5 mr-2 text-[#72BF78]" /> Our team will review your article before listing it for sale.</p>
                        <p className="flex items-center">
                            <Clock className="w-5 h-5 mr-2 text-[#72BF78]" /> The review process takes less than 72 hours.</p>
                        <p className="flex items-center">
                            <Banknote className="w-5 h-5 mr-2 text-[#72BF78]" /> Payment is processed after each sale (20% platform fee applies).</p>
                        <p>Your Article should be:</p>
                        <div className="flex space-x-2 font-medium">
                            <span className="text-[#72BF78]">
                                <CircleCheck className="h-6 w-6" />
                            </span>
                            <span>unique.</span>
                        </div>
                        <div className="flex space-x-2 font-medium">
                            <span className="text-[#72BF78]">
                                <CircleCheck className="h-6 w-6" />
                            </span>
                            <span>Free From Plagiarism.</span>
                        </div>
                        <div className="flex space-x-2 font-medium">
                            <span className="text-[#72BF78]">
                                <CircleCheck className="h-6 w-6" />
                            </span>
                            <span>Should Not Be AI Generated.</span>
                        </div>
                    </div>
                    <button className="mt-8 w-full bg-[#72BF78] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#5fa366] transition duration-300 ease-in-out">
                        Start Selling Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Out_source_article;
