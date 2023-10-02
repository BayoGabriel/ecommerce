import React from 'react'
import Blogh from '../components/Blogh'
import Footer from '../components/Footer'
import Blogbody from '../components/Blogbody'

const Blog = () => {
  return (
    <>
        <Blogh/>
        <Blogbody/>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Blog