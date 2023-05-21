import { useState } from "react";
import { Link } from 'react-router-dom'
import grachieverlogo from "../images/LOGOS/g.logo.white1.png"


function Navbar() {
  const [navbar, setNavbar] = useState(false); 
//   const [open, setOpen] = useState(false);

    return (
    <section className="relative container mx-auto">
      <nav className="w-full bg-[#1b1d38] fixed top-0 z-50 container">   
      {/* bg-[#FAF9F6] */}
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex ">
              <div>
                  <div className="flex items-center justify-between py-3 md:py-5 md:-ml-14 md:block">
                      <Link to="/"><img src={grachieverlogo} className="w-24 sm:w-28 md:w-40 -mt-5 md:-mt-8" alt="Grachiever Logo" /></Link>
                      <div className="flex text-white text-sm hidden max-md:block">
                              <Link to="/login" className="px-2 py-1 text-center rounded-full shadow hover:text-blue-500 border border-white">Log-in</Link>
                              <Link to="/signup" className="px-2 py-1 text-center bg-[#349fcf] text-white rounded-full shadow hover:text-black">Sign up</Link>
                      </div>
                          
                      <div className="md:hidden ">
                          <button
                              className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                              onClick={() => setNavbar(!navbar)}
                          >
                              {navbar ? (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6 "
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              ) : (
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-6 h-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M4 6h16M4 12h16M4 18h16"
                                      />
                                  </svg>
                              )}
                          </button>
                      </div>
                  </div>

              </div>
              <div>
                  <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden" }`}>
                      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-medium text-white ml-10">
                          <li className="hover:text-blue-500">
                              <Link to="/">Home</Link>
                          </li>
                          {/* <li className="">
                          <div className="flex ">
                              <div onMouseLeave={() => setOpen(false)} className="relative">
                                  <button
                                  onMouseOver={() => setOpen(true)}
                                  className="flex items-center"
                                  >
                                  <span className="mr-2">Courses</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                  </svg>

                                  </button>
                                  <ul
                                  className={`absolute right-0 left-0 w-52 py-2 mt-2 rounded-lg shadow-xl bg-white text-black ${
                                      open ? "block" : "hidden"
                                  }`}
                                  >
                                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                     <Link to="/">Data</Link>
                                  </li><hr/>
                                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                      <Link to="/">Digital Marketing</Link>
                                  </li><hr/>
                                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                      <Link to="/">Still Confused</Link>
                                  </li><hr/>
                                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                      <Link to="/">A.I.M.L.</Link>
                                  </li><hr/>
                                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                      <Link to="/">Video Animation</Link>
                                  </li><hr/>
                                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                                      <Link to="/">Graphics And Design</Link>
                                  </li><hr/>
                                  </ul>
                              </div>
                          </div>
                          </li> */}

                          <li>
                            <div className="group inline-block">
                            <button className="outline-none focus:outline-none px-0 rounded-sm flex items-center">
                                <span className="flex-1">Services</span>
                                <span>
                                <svg
                                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
                                    transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                                </span>
                            </button>
                            <ul className="bg-white text-black border rounded-md transform scale-0 group-hover:scale-100 absolute 
                            transition duration-150 ease-in-out origin-top min-w-32 w-20 text-sm md:text-md">
                                <li className="rounded-sm relative px-1 py-1 hover:bg-gray-100">
                                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                    <span className="pr-1 flex-1">Courses</span>
                                    <span className="mr-auto">
                                    <svg className="fill-current h-4 w-4
                                        transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </span>
                                </button>
                                <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                    transition duration-150 ease-in-out origin-top-left
                                    min-w-24">
                                    <li className="px-2 md:px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Python 1</Link></li><hr/>
                                    <li className="px-2 md:px-3  py-1 hover:bg-gray-100">
                                    <Link to=''>Go</Link></li><hr/>
                                    <li className="px-2 md:px-3  py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                    <li className="px-2 md:px-3  py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                    <li className="px-2 md:px-3  py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                    <li className="px-2 md:px-3  py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                </ul>
                                </li><hr/>
                                <li className="rounded-sm relative px-1 py-1 hover:bg-gray-100">
                                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                    <span className="pr-1 flex-1">Skill</span>
                                    <span className="mr-auto">
                                    <svg className="fill-current h-4 w-4
                                        transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </span>
                                </button>
                                <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                    transition duration-150 ease-in-out origin-top-left
                                    min-w-32">
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Javascript</Link></li><hr/>
                                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                        <span className="pr-1 flex-1">Python</span>
                                        <span className="mr-auto">
                                        <svg className="fill-current h-4 w-4
                                                transition duration-150 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                        </span>
                                    </button>
                                    <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                        transition duration-150 ease-in-out origin-top-left
                                        min-w-32">
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 2.7</Link></li><hr/>
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 3+</Link></li><hr/>
                                    </ul>
                                    </li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Go</Link></li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                </ul>
                                </li><hr/>
                                
                                <li className="rounded-sm relative px-1 py-1 hover:bg-gray-100">
                                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                    <span className="pr-1 flex-1">Top Categories</span>
                                    <span className="mr-auto">
                                    <svg className="fill-current h-4 w-4
                                        transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </span>
                                </button>
                                <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                    transition duration-150 ease-in-out origin-top-left
                                    min-w-32">
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Javascript</Link></li><hr/>
                                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                        <span className="pr-1 flex-1">Python</span>
                                        <span className="mr-auto">
                                        <svg className="fill-current h-4 w-4
                                                transition duration-150 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                        </span>
                                    </button>
                                    <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                        transition duration-150 ease-in-out origin-top-left
                                        min-w-32">
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 2.7</Link></li><hr/>
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 3+</Link></li><hr/>
                                    </ul>
                                    </li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Go</Link></li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                </ul>
                                </li><hr/>

                                <li className="rounded-sm relative px-1 py-1 hover:bg-gray-100">
                                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                    <span className="pr-1 flex-1">Skill Consultancy</span>
                                    <span className="mr-auto">
                                    <svg className="fill-current h-4 w-4
                                        transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </span>
                                </button>
                                <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                    transition duration-150 ease-in-out origin-top-left
                                    min-w-32">
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Javascript</Link></li><hr/>
                                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                        <span className="pr-1 flex-1">Python</span>
                                        <span className="mr-auto">
                                        <svg className="fill-current h-4 w-4
                                                transition duration-150 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                        </span>
                                    </button>
                                    <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                        transition duration-150 ease-in-out origin-top-left
                                        min-w-32">
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 2.7</Link></li><hr/>
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 3+</Link></li><hr/>
                                    </ul>
                                    </li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Go</Link></li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                </ul>
                                </li><hr/>

                                <li className="rounded-sm relative px-1 py-1 hover:bg-gray-100">
                                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                    <span className="pr-1 flex-1">Video Animation</span>
                                    <span className="mr-auto">
                                    <svg className="fill-current h-4 w-4
                                        transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </span>
                                </button>
                                <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                    transition duration-150 ease-in-out origin-top-left
                                    min-w-32">
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Javascript</Link></li><hr/>
                                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                        <span className="pr-1 flex-1">Python</span>
                                        <span className="mr-auto">
                                        <svg className="fill-current h-4 w-4
                                                transition duration-150 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                        </span>
                                    </button>
                                    <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                        transition duration-150 ease-in-out origin-top-left
                                        min-w-32">
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 2.7</Link></li><hr/>
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 3+</Link></li><hr/>
                                    </ul>
                                    </li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Go</Link></li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                </ul>
                                </li><hr/>

                                <li className="rounded-sm relative px-1 py-1 hover:bg-gray-100">
                                <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                    <span className="pr-1 flex-1">Graphics And Design</span>
                                    <span className="mr-auto">
                                    <svg className="fill-current h-4 w-4
                                        transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" >
                                        <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </span>
                                </button>
                                <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                    transition duration-150 ease-in-out origin-top-left
                                    min-w-32">
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Javascript</Link></li><hr/>
                                    <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                    <button className="w-full text-left flex items-center outline-none focus:outline-none">
                                        <span className="pr-1 flex-1">Python</span>
                                        <span className="mr-auto">
                                        <svg className="fill-current h-4 w-4
                                                transition duration-150 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                        </span>
                                    </button>
                                    <ul className="bg-white border rounded-sm absolute top-0 right-0 
                                        transition duration-150 ease-in-out origin-top-left
                                        min-w-32">
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 2.7</Link></li><hr/>
                                        <li className="px-3 py-1 hover:bg-gray-100">
                                        <Link to=''>Python 3+</Link></li><hr/>
                                    </ul>
                                    </li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Go</Link></li><hr/>
                                    <li className="px-3 py-1 hover:bg-gray-100">
                                    <Link to=''>Rust</Link></li><hr/>
                                </ul>
                                </li><hr/>
                            </ul>
                            </div>
                          </li>
                          <li className="hover:text-blue-500">
                              <Link to="/blog">Blog</Link>
                          </li>
                          <li className="hover:text-blue-500">
                              <Link to="/about">About</Link>
                          </li>
                          <li className="hover:text-blue-500">
                              <Link to="/contact">Contact</Link>
                          </li>
                          <li className=" lg:pl-10">
                          <div className="flex max-md:hidden">
                              <Link to="/login" className="px-4 py-2 text-center rounded-full shadow hover:text-blue-500 border border-[#1b1d38] hover:border-white">  Log-in</Link>
                              <Link to="/signup" className="px-4 py-2 text-center text-gray-800 bg-[#00c5ff] text-white rounded-full shadow hover:text-black">Sign up</Link>
                          </div>
                          </li>
                      </ul>
                  </div>
              </div>

          </div>
      </nav>
    </section>
    );
  }
  
  export default Navbar;
  