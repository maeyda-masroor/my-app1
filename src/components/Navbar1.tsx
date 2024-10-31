import Image from "next/image";
import Logo from '../app/public/images/logo.png'
import Link from "next/link";
export default function Navbar(){
    return (
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
       <Image src={Logo} alt="lgo" height={100} width={100}/>
     </a>
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="relative inline-block text-left">
    
          <div className="relative inline-block text-left group">
    
          <button className="inline-flex items-center px-4 py-2 text-black font-semibold rounded-md hover:bg-red-600 focus:outline-border">
            About Us
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-1" role="menuitem">CEO Message</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">About Noor Foundation</a>
              
            </div>
          </div>
        </div>
            <div className="relative inline-block text-left group">
        
        <button className="inline-flex items-center px-4 py-2 text-black font-semibold rounded-md hover:bg-red-600 focus:outline-border">
          Sponser's 
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-1" role="menuitem">How to Donate</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sponsership Form</a>
            
          </div>
        </div>
        </div>
        <div className="relative inline-block text-left group">
        
        <button className="inline-flex items-center px-4 py-2 text-black font-semibold rounded-md">
          Parent's or Student's 
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/scholarshipForms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-1" role="menuitem">Scholarship Forms</Link>
            <Link href="/processFlow" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Process of obtaining scholarship</Link>

            
          </div>
        </div>
        </div>
        <div className="relative inline-block text-left group">
        
        <button className="inline-flex items-center px-4 py-2 text-black font-semibold rounded-md">
          Sponser's 
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link href="/news_stories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-1" role="menuitem">News & Stories</Link>
            <Link href="/sponser" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sponsership Form</Link>
            <Link href="/achievement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-1" role="menuitem">Achievements</Link>
            <Link href="/theimpact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">The Impacts</Link>
            <Link href="/ourprogram" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-1" role="menuitem">Our Program</Link>            
          </div>
        </div>
        </div>

       
     </div>
     <Link href="/Donate"><button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 mt-4 md:mt-0">Donate</button></Link>
  </div>
  </div>
    )
}