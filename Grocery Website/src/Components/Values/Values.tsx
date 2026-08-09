import React from 'react'
import Heading from '../Heading'
import Basket from "../../assets/basket-full-vegetables.png"
import { value } from '../../Data/values'

const Values = () => {

    const leftValues = value.slice(0,2).map(item=>(
        <div key={item.id} className='flex md:flex-row-reverse items-center gap-3'>
            <div >
                <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
            </div>
            <div className='md:text-right'>
                <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                <p className='text-zinc-600'>{item.para}</p>
            </div>
        </div>
    ))
    const rightValues = value.slice(2).map(item=>(
        <div  key={item.id} className='flex flex-row items-center gap-3'>
            <div>
                <span className=' flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
            </div>
            <div >
                <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                <p className='text-zinc-600'>{item.para}</p>
            </div>
        </div>
    ))
  return (
    <div className='max-w-[1400px] mx-auto px-10 py-20'>
      <Heading highlight='Our' content='Values' />

      <div className='flex md:flex-row flex-col md:gap-20 gap-10 mt-15'>
        <div className='flex flex-col justify-between gap-10' >{leftValues}</div>

        <div className='lg:block w-1/2 hidden'>
            <img src={Basket} />
        </div>

        <div className='flex flex-col justify-between gap-10'>{rightValues}</div>
      </div>
    </div>
  )
}

export default Values
