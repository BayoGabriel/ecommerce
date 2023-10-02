import React from 'react'
import Accessorieshead from '../components/Accessorieshead'
import Shopbody from '../components/Shopbody'
import Footer from '../components/Footer'

const Accessories = () => {
  return (
    <>
        <Accessorieshead/>
        <div className='space2'></div>
        <Shopbody/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Accessories