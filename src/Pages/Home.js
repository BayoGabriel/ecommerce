import React from 'react'
import Nav from '../components/Nav'
import "../Styles/Home.css"
import Carousel from '../components/Carousel'
import Products8 from '../components/Products8'
import Rproducts from '../components/Rproducts'
import Allnew from '../components/Allnew'
import Visitus from '../components/Visitus'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <div className='bg-dark black'></div>
        <div className='bg-white white'></div>
        <Nav/>
        <div className='bg-white white'></div>
        <Carousel/>
        <Products8/>
        <Rproducts/>
        <Allnew/>
        <Visitus/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Home