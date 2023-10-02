import React from 'react'
import "../Styles/Shop.css"
import Shophead from '../components/Shophead'
import Shopbody from '../components/Shopbody'
import Footer from '../components/Footer'
import "../Styles/Home.css"

const Shop = () => {
  return (
    <>
        <Shophead/>
        <div className='space2'></div>
        <Shopbody/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Shop