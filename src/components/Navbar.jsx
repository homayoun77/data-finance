import React, { useState } from 'react'

import { AiOutlineClose , AiOutlineMenu } from "react-icons/ai";

function Navbar() {

  const [nav , setNav] = useState(false)

  const handleNav = ()=> {
    setNav(!nav)
  }

  return (
    <div className='mx-auto flex items-center justify-between h-24 max-w-[1240px] px-4 text-white'>
        <a href='#home' className='w-full text-3xl font-bold text-primary'>REACT.</a>
        <ul className='hidden md:flex '>
            <a href="#1"><li className='p-4 hover:border-b border-b-primary'>Home</li></a>
            <a href="#2"><li className='p-4 hover:border-b border-b-primary'>Company</li></a>
            <a href="#3"><li className='p-4 hover:border-b border-b-primary'>Resources</li></a>
            <a href="#4"><li className='p-4 hover:border-b border-b-primary'>About</li></a>
            <a href="#5"><li className='p-4 hover:border-b border-b-primary'>Contact</li></a>
        </ul>

        <div onClick={handleNav} className='block md:hidden cursor-pointer p-1' >
          {
            nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>
          }
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' }>
          <a href='#home' className='w-full text-3xl font-bold text-primary m-8'>REACT.</a>
          <ul className='px-2 uppercase'>
            <a href="#1"><li className='p-4 border-b border-gray-600'>Home</li></a>
            <a href="#2"><li className='p-4 border-b border-gray-600'>Company</li></a>
            <a href="#3"><li className='p-4 border-b border-gray-600'>Resources</li></a>
            <a href="#4"><li className='p-4 border-b border-gray-600'>About</li></a>
            <a href="#5"><li className='p-4'>Contact</li></a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar