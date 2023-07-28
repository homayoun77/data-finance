import React from 'react'

function Card({image , name , price , storage , users , traffic , btnStyle , containerStyle}) {
  return (
    <div className={containerStyle + 'w-full shadow-xl flex flex-col text-center p-4 my-4 rounded-lg hover:scale-105 duration-300'}>
        <img className='w-20 mx-auto mt-[-3rem]' src={image} alt="" />
        <h2 className='text-2xl font-bold py-8'> {name} </h2>
        <p className='font-bold text-4xl'> {price} </p>
        <div className='font-medium'>
            <p className='py-2 border-b mx-8 mt-8'> {storage} </p>
            <p className='py-2 border-b mx-8'> {users} </p>
            <p className='py-2 border-b mx-8'> {traffic} </p>
        </div>
        <button className={btnStyle + 'w-48 mx-auto py-3 px-6 rounded-md font-medium my-6'}>Start Trial</button>
    </div>
  )
}

export default Card