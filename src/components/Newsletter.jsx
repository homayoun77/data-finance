import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 px-4 text-white'>
        <div className='grid lg:grid-cols-3 gap-x-8 max-w-[1240px] mx-auto'>
            <div className='lg:my-2 lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between w-full my-2'>
                    <input className='p-3 rounded-md text-black w-full mt-4 sm:mt-0 ' type="email" name="email" id="email" placeholder='Enter Email' />

                    <button className='bg-primary text-black w-48 py-3 px-6 rounded-md font-medium my-6 sm:ml-4'>Notify Me</button>
                </div>
                <p>We care bout the protection of your data. Read our<span className='text-[#00df9a]'> Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter