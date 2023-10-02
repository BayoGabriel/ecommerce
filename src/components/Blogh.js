import React from 'react'
import "../Styles/Shophead.css"
import sbg from "../Assets/Images/blog-img13_540x.jpg"
import Nav from './Nav'
import ac from "../Assets/Images/armchair.svg"
import ac1 from "../Assets/Images/bathroom.svg"
import ac2 from "../Assets/Images/kitchen.svg"
import ac3 from "../Assets/Images/lighting.svg"

const Blogh = () => {
  return (
    <>
        <div className='container-fluid m-0 p-0'>
            <div className='svbac'>
                <div className='svimc'>
                    <img src={sbg} className='svbimg' style={{height:"fit-content", objectFit: "cover"}}/>
                    <div className='space2bb'></div>
                </div>
                <div className='svover mt-3'>
                    <Nav/>
                    <nav className='d-flex justify-content-center son'>
                        <a href='/home'>Home</a><span className='mx-2'>/</span>
                        {/* <a>Collections</a><span className='mx-2'>/</span> */}
                        <a href='/blog'>News</a>
                    </nav>
                    <p className='sonp11 mt-3'>News</p>
                    <div className='d-flex flex-wrap justify-content-center pt-3'>
                        <div className='me-2 sflx'>
                            {/* <img src={ac} className='sac'/> */}
                            <a href='/home'><p className='slr p-0 m-0'>All Articles</p></a>
                        </div>
                        <div className='mx-2 sflx'>
                            {/* <img src={ac1} className='sac'/> */}
                            <a href='/home'><p className='slr p-0 m-0'>Decor</p></a>
                        </div>
                        <div className='mx-2 sflx'>
                            {/* <img src={ac2} className='sac'/> */}
                            <a href='/home'><p className='slr p-0 m-0'>Furniture</p></a>
                        </div>
                        <div className='ms-2 sflx'>
                            {/* <img src={ac3} className='sac'/> */}
                            <a href='/home'><p className='slr p-0 m-0'>Kitchen</p></a>
                        </div>
                        <div className='ms-2 sflx'>
                            {/* <img src={ac3} className='sac'/> */}
                            <a href='/home'><p className='slr p-0 m-0'>Lifestyle</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogh