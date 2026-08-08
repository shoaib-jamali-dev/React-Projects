import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)

  const onClickHandler = ()=>{
    setShowMenu(!showMenu)
  }
  return (
    <header className='bg-white fixed right-0 left-0 top-0'>
      <nav className=' max-w-350 mx-auto px-10 flex h-[12vh] lg:h-[14vh] items-center justify-between'>
        <a href="#" className='text-3xl font-bold '>Gr<span className='text-orange-500 uppercase'>o</span>cify</a>

        <ul className=' items-center lg:gap-x-15 md:gap-x-9 md:flex hidden'>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>
        </ul>

        <div className='flex items-center gap-x-5'>
          <div className='lg:flex p-1 border-2 border-orange-500 rounded-full hidden'>
            <input type="text" name='text' id='text' placeholder='search....' autoComplete='off' className='flex-1 px-3 h-[5vh] focus:outline-none' />
            <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full'><FaSearch size={17} /></button>
          </div>
          <a href="#" className='text-zinc-800 text-2xl '><FaHeart /></a>
          <a href="#" className='text-zinc-800 text-2xl '><RiShoppingBag4Fill /></a>
          <a href="#" className='text-zinc-800 text-2xl md:hidden ' onClick={onClickHandler}>{showMenu ? <IoClose /> : <IoMenu/>}</a>
        </div>
        
        {/* Mobile Menu */}
         <ul className={` flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-2xl p-10 items-center md:hidden absolute top-30 -left-full  -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : '' }`}>
          <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About us</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
          <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact us</a></li>
          <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
            <input type="text" name='text' id='text' placeholder='search....' autoComplete='off' className='flex-1 px-3 h-[5vh] focus:outline-none' />
            <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full'><FaSearch size={17} /></button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
