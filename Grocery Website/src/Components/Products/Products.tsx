import React, { useState } from 'react'
import Heading from '../Heading'

const Products = () => {

    const tabs = ["All","Fruits","Vegetables","Dairy","SeaFood"]

    const [activeTab,setActiveTab] = useState('All')

  return (
    <div className='max-w-[1400px] mx-auto px-10 py-20 '>
      <Heading highlight='Our' content='Products'/>
      <div className='flex gap-3 justify-center mt-10'>
      {tabs.map((tab,index)=>(
        <button key={index} className={`bg-zinc-100 px-5 py-2 text-lg`}>{tab}</button>
      ))}
      </div>


    </div>
  )
}

export default Products
