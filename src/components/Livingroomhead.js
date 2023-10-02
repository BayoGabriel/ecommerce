import React from 'react'
import "../Styles/Shophead.css"
import lsbg from "../Assets/Images/cat-bg-livingroom.jpg"
import lac from "../Assets/Images/accessories_light.svg"
import lac1 from "../Assets/Images/sofa_light.svg"
import Nav2 from './NavBar'
import al from "../Assets/Images/iconmonstr-arrow-left-thin.svg"

const Livingroomhead = () => {
  return (
    <>
        <div className='container-fluid m-0 p-0'>
            <div className='svbac'>
                <div className='svimc'>
                    <img src={lsbg} className='svbimg'/>
                </div>
                <div className='svover mt-3'>
                    <Nav2/>
                    <nav className='d-flex justify-content-center son2'>
                        <a href='/home'>Home</a><span className='mx-2'>/</span>
                        <a>Collections</a><span className='mx-2'>/</span>
                        <a href='/lroom'>Living Room</a>
                    </nav>
                    <p className='sonp11 mt-3 text-white'><a href='/shop'><img className='lal me-3' src={al}/></a>Living Room</p>
                    <div className='d-flex flex-wrap justify-content-center pt-3'>
                        <div className='d-flex justify-content-between me-2 sflx'>
                            <img src={lac} className='sac'/>
                            <a href='/accessories'><p className='slr p-0 m-0 text-white'>Accessories<sup className=''>8</sup></p></a>
                        </div>
                        <div className='d-flex justify-content-between mx-2 sflx'>
                            <img src={lac1} className='sac'/>
                            <a href='/armchairs'><p className='slr p-0 m-0 text-white'>Armchairs<sup className=''>4</sup></p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Livingroomhead