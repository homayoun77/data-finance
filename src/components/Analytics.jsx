import React from 'react'
import laptop from '../assets/pictures/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-primary font-bold'>DATA ANALYTICS DASHBOARD</p>
                
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl py-2'>Manage Data Analytics Centrally</h1>

                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                molestiae delectus culpa hic assumenda, voluptate reprehenderit
                dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                eveniet ex deserunt fuga?</p>

                <button className='text-primary bg-black w-fit py-3 px-10 rounded-md font-medium mx-auto md:mx-0 my-6'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics