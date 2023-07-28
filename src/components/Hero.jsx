import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className='mt-[-96px] w-full max-w-[800px] h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-primary font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold text-4xl sm:text-6xl md:text-7xl md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='font-bold text-xl sm:text-4xl md:text-5xl py-2'>Fast , Flexible financing for</p>
                <Typed
                    className='font-bold text-xl sm:text-4xl md:text-5xl pl-2 md:pl-4'
                    strings={['BTB' , 'BTC' , 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <p className='text-xl font-bold text-gray-500 md:text-2xl px-4 md:px-0'>Monitor your data analytics to increase revenue for BTB , BTC , & SASS platforms</p>

            <button className='bg-primary text-black w-fit py-3 px-10 rounded-md font-medium mx-auto my-6'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero