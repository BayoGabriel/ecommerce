import React from 'react'
import "../Styles/Shophead.css"
import sbg from "../Assets/Images/cat-bg-shop.jpg"
import Nav from './Nav'
import ac from "../Assets/Images/armchair.svg"
import ac1 from "../Assets/Images/bathroom.svg"
import ac2 from "../Assets/Images/kitchen.svg"
import ac3 from "../Assets/Images/lighting.svg"

const Shophead = () => {
  return (
    <>
        <div className='container-fluid m-0 p-0'>
            <div className='svbac'>
                <div className='svimc'>
                    <img src={sbg} className='svbimg'/>
                </div>
                <div className='svover mt-3'>
                    <Nav/>
                    <nav className='d-flex justify-content-center son'>
                        <a href='/home'>Home</a><span className='mx-2'>/</span>
                        <a>Collections</a><span className='mx-2'>/</span>
                        <a href='/shop'>Shop</a>
                    </nav>
                    <p className='sonp1 mt-3'>Shop</p>
                    <div className='d-flex flex-wrap justify-content-center pt-3'>
                        <div className='d-flex justify-content-between me-2 sflx'>
                            <img src={ac} className='sac'/>
                            <a href='/lroom'><p className='slr p-0 m-0'>Living Room<sup className=''>8</sup></p></a>
                        </div>
                        <div className='d-flex justify-content-between mx-2 sflx'>
                            <img src={ac1} className='sac'/>
                            <a href='/bathroom'><p className='slr p-0 m-0'>Bathroom<sup className=''>4</sup></p></a>
                        </div>
                        <div className='d-flex justify-content-between mx-2 sflx'>
                            <img src={ac2} className='sac'/>
                            <a href='/kitchen'><p className='slr p-0 m-0'>Kitchen<sup className=''>3</sup></p></a>
                        </div>
                        <div className='d-flex justify-content-between ms-2 sflx'>
                            <img src={ac3} className='sac'/>
                            <a href='/lighting'><p className='slr p-0 m-0'>Lighting<sup className=''>3</sup></p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shophead