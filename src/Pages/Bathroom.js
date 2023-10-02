import React from 'react'
import Bathroomh from '../components/Bathroomh'
import Shopbody from '../components/Shopbody'
import Footer from '../components/Footer'

const Bathroom = () => {
  return (
    <>
        <Bathroomh/>
        <div className='space20'></div>
        <Shopbody/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Bathroom