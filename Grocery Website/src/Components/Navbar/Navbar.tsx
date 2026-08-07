import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className='bg-white'>
      <nav className=' max-w-350 mx-auto px-10 flex h-[14vh] items-center justify-between'>
        <a href="#" className='text-3xl font-bold '>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

        <ul className='flex items-center gap-x-15 '>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>
        </ul>

        <div className='flex items-center gap-x-5'>
          <div className='flex p-1 border-2 border-orange-500 rounded-full'>
            <input type="text" name='text' id='text' placeholder='search....' autoComplete='off' className='flex-1 px-3 h-[5vh] focus:outline-none' />
            <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full'><FaSearch size={17} /></button>
          </div>
          <a href="#" className='text-zinc-800 text-2xl '><FaHeart /></a>
          <a href="#" className='text-zinc-800 text-2xl '><RiShoppingBag4Fill /></a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
