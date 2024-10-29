"use client"
import HoverConfetti from '../../components/celebration';
import React, { useState } from 'react';
export default function processFlow(){
    const [isHovered, setIsHovered] = useState<boolean>(false);
    return (
        <div className="justify-center mt-9 mb-9">
             <HoverConfetti run={isHovered} />
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto"
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
        
            <div className="text-indigo-500 mb-4 sm:mb-0 sm:mr-4">
            1
            </div>

            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src="https://via.placeholder.com/80" alt="Image" className="w-20 h-20 rounded-full"/>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">Title of the Section</h3>
                <p className="text-gray-600">This is a brief description or some text content that goes here. It adjusts based on screen size, stacking vertically on small screens.</p>
            </div>
            </div>
            <br/>
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            
            >
        
            <div className="text-indigo-500 mb-4 sm:mb-0 sm:mr-4">
            1
            </div>

            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src="https://via.placeholder.com/80" alt="Image" className="w-20 h-20 rounded-full"/>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">Title of the Section</h3>
                <p className="text-gray-600">This is a brief description or some text content that goes here. It adjusts based on screen size, stacking vertically on small screens.</p>
            </div>
            </div>
            <br/>
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            
            >
        
            <div className="text-indigo-500 mb-4 sm:mb-0 sm:mr-4">
            1
            </div>

            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src="https://via.placeholder.com/80" alt="Image" className="w-20 h-20 rounded-full"/>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">Title of the Section</h3>
                <p className="text-gray-600">This is a brief description or some text content that goes here. It adjusts based on screen size, stacking vertically on small screens.</p>
            </div>
            </div>
            <br/>
            <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 bg-red-100 rounded-lg shadow-lg max-w-lg mx-auto"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
            
            >
        
            <div className="text-indigo-500 mb-4 sm:mb-0 sm:mr-4">
            1
            </div>
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                <img src="https://via.placeholder.com/80" alt="Image" className="w-20 h-20 rounded-full"/>
            </div>

            <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-800">Title of the Section</h3>
                <p className="text-gray-600">This is a brief description or some text content that goes here. It adjusts based on screen size, stacking vertically on small screens.</p>
            </div>
            </div>
        </div>
    )
}