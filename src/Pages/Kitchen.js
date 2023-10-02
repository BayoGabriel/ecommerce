import React from 'react'
import Kitchenh from '../components/Kitchenh'
import Shopbody from '../components/Shopbody'
import Footer from '../components/Footer'

const Kitchen = () => {
  return (
    <>
        <Kitchenh/>
        <div className='space2'></div>
        <Shopbody/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Kitchen