import React from 'react'
import Card from './Card'

import single from '../assets/pictures/single.png'
import double from '../assets/pictures/double.png'
import triple from '../assets/pictures/triple.png'

function Cards() {
  return (
    <div className='w-full py-40 bg-white px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <Card 
            image={single}
            name='Single User'
            price='$149'
            storage='500 GB storage'
            users='1 Granted User'
            traffic='Send up to 2 GB'
            btnStyle='bg-primary text-black '
            />

            <Card 
            image={double}
            name='Partnership'
            price='$199'
            storage='1 TB storage'
            users='3 Granted User'
            traffic='Send up to 10 GB'
            btnStyle='bg-black text-primary '
            containerStyle='md:my-0 bg-gray-100 '
            />

            <Card 
            image={triple}
            name='Group Account'
            price='$299'
            storage='5 TB storage'
            users='10 Granted User'
            traffic='Send up to 50 GB'
            btnStyle='bg-primary text-black '
            />
        </div>
    </div>
  )
}

export default Cards