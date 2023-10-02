import React from 'react'
import "../Styles/Shophead.css"
import acclsbg from "../Assets/Images/cat-bg-accessories.jpg"
import lac from "../Assets/Images/accessories_light.svg"
import lac1 from "../Assets/Images/sofa_light.svg"
import Nav from './Nav'
import al from "../Assets/Images/barrow.svg"

const Accessorieshead = () => {
  return (
    <>
        <div className='container-fluid m-0 p-0'>
            <div className='svbac'>
                <div className='svimc'>
                    <img src={acclsbg} className='svbimg'/>
                </div>
                <div className='svover mt-3'>
                    <Nav/>
                    <nav className='d-flex justify-content-center son'>
                        <a href='/home'>Home</a><span className='mx-2'>/</span>
                        <a>Collections</a><span className='mx-2'>/</span>
                        <a href='/accessories'>Accessories</a>
                    </nav>
                    <p className='sonp11 mt-3'><a href='/shop'><img className='lal me-3' src={al}/></a>Accessories</p>
                    {/* <div className='d-flex flex-wrap justify-content-center pt-3'>
                        <div className='d-flex justify-content-between me-2 sflx'>
                            <img src={lac} className='sac'/>
                            <p className='slr p-0 m-0'>Accessories<sup className=''>8</sup></p>
                        </div>
                        <div className='d-flex justify-content-between mx-2 sflx'>
                            <img src={lac1} className='sac'/>
                            <p className='slr p-0 m-0'>Armchairs<sup className=''>4</sup></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Accessorieshead