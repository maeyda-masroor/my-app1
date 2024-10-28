"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../app/public/images/logo.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <nav className="bg-white-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-2xl font-bold">
            <Image src={Logo}
            alt='logo'
            width={100}
            height={100}
            />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            stroke="yellow"
            className="h-6 w-6"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Links */}
        <div className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:space-x-6 mt-4 md:mt-0`}>
        <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'About Us' ? null : 'About Us')}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
                About Us
            </button>
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 bg-red rounded-lg shadow-lg overflow-hidden ${openDropdown === 'About Us' ? 'block' : 'hidden'}`}>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">CEO Message</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">About Noor Foundation</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Team</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Board Of Trsutees</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Program</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Our Process</Link>
              <Link href="/web-design" className="block px-4 py-2 text-gray-700 hover:bg-red-500">FAQ's</Link>
              <Link href="/seo" className="block px-4 py-2 text-gray-700 hover:bg-red-500">Gallery</Link>
            </div>
          </div>
         
          
        </div>
      </div>
    </nav>
  );
}
