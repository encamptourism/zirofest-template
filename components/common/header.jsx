import React,{useState,useEffect} from 'react';
import{Transition} from "@headlessui/react";
import{Link} from "react-scroll";
import Links from 'next/link';

function Header(props) {
const[isOpen, setIsOpen]= useState(false);
const {addtocartdata} = props;
const[cartnumber,setCartnumber] = useState(0);
useEffect(()=>{
if(addtocartdata){
if(addtocartdata.length > 0){
 setCartnumber(addtocartdata.length);   
}else{
setCartnumber(0);     
}

}

},["",addtocartdata])
  return (
    <div id ="header" style={{zIndex:"999",position:"relative"}}>
        {/* for main Nav container */}
        <nav className='bg-black shadow-sm fixed w-full z-10'>
            <div className='w-full'>
                <div className='flex items-center h-20 w-full'>
                    {/* first block section outer part */}
                    <div className='flex items items-center mx-5 sm:mx-10 justify-between w-full'>
                        <div className='flex justify-center items-center flex-shrink-0'>
                        <Links href='/'>
                            <img src="https://encampadventures.com/images/logo1.png" alt="Encamp Adventures" className="h-12"/>
                        </Links>  
                        </div>
                        <div className='hidden lg:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Links href='/'>
                                       <a className="cursor-pointer text-gray-400  px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-lg">
                                        Home
                                    </a>
                                    </Links>
                                    <Link  activeClass="Packages" to="pakage" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-400  px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-lg">
                                        Camping Packages
                                    </Link>
                                    <Link activeClass="Addons" to="addons" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-400  px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-lg">
                                        Add-On Services
                                    </Link>
                                    <Link activeClass="Sustainability" to="sustainability" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-400  px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-lg">
                                        Sustainability Pledge
                                    </Link>
                                    <Link activeClass="About" to="about" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-400  px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-lg">
                                        About
                                    </Link>
                                    <Links href="/cart">
                                    <a  className="cursor-pointer bg-purple-600 text-gray-50 hover:bg-purple-700 px-3  mt-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                                        Cart({cartnumber ? cartnumber : 0})
                                        </a>
                                    </Links>
                                </div>
                            </div>
                    </div>
                    {/* This is the mobile menu */}
                    <div className='mr-5 sm:mr-10 flex lg:hidden'>
                        <button onClick={()=>setIsOpen(!isOpen)} type="button" className='bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none focus:ring-offset-2 focus: ring-offset-green-800 focus:ring-white' aria-controls='mobile-menu' aria-expanded='false'>
                            <span className='sr-only'>Open Main Menu</span>
                            {!isOpen ? (
                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'/>
                                </svg>
                            ):(
                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition show={isOpen} enter='transition ease-out duration-100 transform' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='transition ease-in duration-75 transform' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                {(ref)=>(
                    // handle mobile tabs
                    <div className='lg:hidden id=mobile-menu'>
                        <div ref={ref} className='bg-gray-800 px-3 pt-2 pb-3 space-y-1 sm:px-3'>
                         <Links href='/'>
                                       <a className="cursor-pointer text-gray-500 block px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-md text-base font-medium">
                                        Home
                                    </a>
                                    </Links>
                                    <Link  activeClass="Packages" to="pakage" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-500 block px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-md text-base font-medium">
                                        Camping Packages
                                    </Link>
                                    <Link activeClass="Addons" to="addons" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-500 block px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-md text-base font-medium">
                                        Add-On Services
                                    </Link>
                                    <Link activeClass="Sustainability" to="sustainabilitymobile" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-500 block px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-md text-base font-medium">
                                        Sustainability Pledge
                                    </Link>
                                    <Link activeClass="About" to="aboutmobile" smooth={true} offset={50} duration={500} className="cursor-pointer text-gray-500 block px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-md text-base font-medium">
                                        About
                                    </Link>
                                    <Links href="/cart">
                                    <a  className="cursor-pointer text-gray-500 block px-3 py-2 hover:text-gray-50 hover:bg-green-500 rounded-md text-base font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                                        Cart({cartnumber ? cartnumber : 0})
                                        </a>
                                    </Links>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    </div>
  )
}

export default Header