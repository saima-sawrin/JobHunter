import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '../../Assets/icon/Logo2.png';
     const Nav = () => {
                    const [isMenuOpen, setIsMenuOpen] = useState(false);
                 
             
                  
        

                    return (
                    <div className='header'>
                        {/* Navbar Started */}
                          <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                        <div className="relative flex items-center justify-between nav">
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                    
                             <img src={logo} alt="" className='w-24' />
               
                            
                          </a>
                          <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                              <Link
                                to="/"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                               Home
                              </Link>
                            </li>
                            <li>
                              <Link
                                to='/about'
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                               About
                              </Link>
                            </li>
                            <li>
                              <Link
                                to='/contact'
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Contact Us
                              </Link>
                            </li>
                           
                            <li>
                              <Link
                                to='/signup'
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none "
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                Sign up
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-blue-400 text-white"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                               Post Job
                              </a>
                            </li>
                            <li>
  
                            <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                            	<input id="Toggle3" type="checkbox" className="hidden peer" />
                            	<span className="px-4 py-2 rounded-l-md bg-yellow-400 peer-checked:bg-gray-300">Job Seeker</span>
                            	<span className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-yellow-400">Job Poster</span>
                            </label>
                           </li>
                          </ul>
                          <div className="lg:hidden">
                            <button
                              aria-label="Open Menu"
                              title="Open Menu"
                              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                              onClick={() => setIsMenuOpen(true)}
                            >
                              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                              </svg>
                            </button>
                            {isMenuOpen && (
                              <div className="absolute pl-5 top-0 right-0 w-4/7">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <a
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                      >
                                        {/* <svg
                                          className="w-8 text-deep-purple-accent-400"
                                          viewBox="0 0 24 24"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeMiterlimit="10"
                                          stroke="currentColor"
                                          fill="none"
                                        >
                                          <rect x="3" y="1" width="7" height="12" />
                                          <rect x="3" y="17" width="7" height="6" />
                                          <rect x="14" y="1" width="7" height="6" />
                                          <rect x="14" y="11" width="7" height="12" />
                                        </svg> */}
                                        <img src={logo} alt="" className='w-24' />
                                       
                                      </a>
                                    </div>
                                    <div>
                                      <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="  lg:flex p-2 -mt-2  transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <nav>
                                    <ul className="space-y-4">
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                         Home
                                        </a>
                                      </li>
                                      <li>
                                        <Link
                                          to='/about'
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          About
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to='/contact'
                                          aria-label="Product pricing"
                                          title="Product pricing"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Contact Us
                                        </Link>
                                      </li>
                                      
                                      
                                      <li>
                                        <Link
                                          to="/signup"
                                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-700  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                          aria-label="Sign up"
                                          title="Sign up"
                                        >
                                          Sign up
                                        </Link>
                                      </li>
                                      <li>
                              <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 bg-blue-400 text-white focus:shadow-outline focus:outline-none "
                                aria-label="Sign up"
                                title="Post Job"
                              >
                               Post Job
                              </a>
                            </li>
                            <li>
  
                            <label for="Toggle3" className="inline-flex items-center p-2 rounded-md cursor-pointer dark:text-gray-800">
                            	<input id="Toggle3" type="checkbox" className="hidden peer" />
                            	<span className="px-4 py-2 rounded-l-md bg-yellow-400 peer-checked:bg-gray-300">Job Seeker</span>
                            	<span className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-yellow-400">Job Poster</span>
                            </label>
                           </li>
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* NabVar Ended */}
                      {/* Hero Section Started */}
 
    </div>
                    );
                  };

export default Nav;