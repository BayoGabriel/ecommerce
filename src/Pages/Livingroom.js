import React from 'react'
import "../Styles/Shop.css"
import Footer from '../components/Footer'
import "../Styles/Home.css"
import Livingroomhead from '../components/Livingroomhead'
import Shopbody2 from '../components/Lroombody'

const Livingroom = () => {
  return (
    <>
        <Livingroomhead/>
        <div className='space21'></div>
        <Shopbody2/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Livingroom