"use client"
import Confetti from 'react-confetti';
import React, { useState } from 'react';
export default function Career(){
    const [showConfetti, setShowConfetti] = useState(false);
  
    const handleClick = () => {
      setShowConfetti(true);
      // Hide the confetti after a duration (e.g., 2 seconds)
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    };
    return (
        <div className="flex items-center justify-center p-12">
    
            <div className="mx-auto w-full max-w-[550px] bg-white">
            <form>
                <div className="mb-5">
                    <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                        Your Name
                    </label>
                    <input type="text" name="name" id="name" placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                        Phone Number
                    </label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                        Email Address
                    </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                    Year of Experience
                    </label>
                        <select
                        required
                        name="experience"
                        className="
                        mb-3
                        block
                        w-full
                        mt-1
                        rounded-md
                        border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        
                    >
                        <option>Less than a year</option>
                        <option>1 - 2 years</option>
                        <option>2 - 4 years</option>
                        <option>4 - 7 years</option>
                        <option>7 - 10 years</option>
                        <option>10+ years</option>
                    </select>
                    </div>
                    <div className="mb-5">
                        <div className="w-full px-3 sm:w-1/2">
                                <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                    Tell us about Yourself
                                </label>
                                <textarea
                    className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Enter your text here..."
                    ></textarea>
                            </div>
                        </div>
                <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                          Your CV
                        </label>
                        <input
                required
                name="cv"
                type="file"
                className="
                block
                w-full
                mt-1
                focus:border-indigo-300
                focus:ring
                focus:ring-indigo-200
                focus:ring-opacity-50
                "
            />
                    </div>
                </div>
                <label className="inline-flex items-center">
                    <input
                    name="remote"
                    value="yes"
                    type="radio"
                    className="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                    "
                    checked
                    />
                    <span className="ml-2">You'd like to work remotely</span>
                </label>
                </div>
                <div>
                <label className="inline-flex items-center">
                    <input
                    name="re"
                    value="no"
                    type="radio"
                    className="
                        text-indigo-600
                        border-gray-300
                        rounded-full
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                    "
                    />
                    <span className="ml-2">You'd prefer to work onsite</span>
                </label>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div>
            {showConfetti && <Confetti />}
                <button   onClick={handleClick}
                    className="hover:shadow-form w-full rounded-md bg-[#FF0000] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
        </form>
        </div>
        </div>

    )
}