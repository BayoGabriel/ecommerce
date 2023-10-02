import React, { useState } from 'react'
import "../Styles/Contact.css"
import cbg from "../Assets/Images/contact-bg.jpg"
import Nav from '../components/Nav'
import facebook from "../Assets/Images/facebook.svg"
import instagram from "../Assets/Images/instagram.svg"
import twiter from "../Assets/Images/twiter.svg"
import pinterest from "../Assets/Images/iconmonstr-pinterest-5.svg"
import Footer from '../components/Footer'

const Contact = () => {
    const [chang, setChang] = useState(false)
    
    const swi = () => {
        setChang(!chang)
    }
  return (
    <>
        <div className='container-fluid bg-white border-bottom'>
            <div className='svover pt-3'><Nav/></div>
            <div className='row'>
                <div className='col-sm-8 p-0'>
                    <img src={cbg} className='cbgi'/>
                    <form className='cmarg mt-4'>
                        <div className='d-flex justify-content-between'>
                            <div className='cindv me-2'>
                                <p>Your Name</p>
                                <input type='text' className=''/>
                            </div>
                            <div className='cindv ms-2'>
                                <p>Your Email</p>
                                <input type='email'/>
                            </div>
                        </div>
                        <p className='cotap'>Your Message</p>
                        <textarea className='cota'/>
                        <button onMouseEnter={swi} onMouseLeave={swi} className={`mt-3 mb-5 ${chang? "anbt2" : "anbt"}`}>SEND MESSAGE</button>
                    </form>
                </div>
                <div className='col-sm-4 conta'>
                    <p className='cop1'>Contact</p>
                    <p className='cop2 mt-5'>Address</p>
                    <p className='cop3'>16 Boulevard Saint-Germain<br/>75005 Paris,<br/>France</p>
                    <p className='cop2'>Email</p>
                    <a className='cop3'>bayogabriel24@gmail.com</a>
                    <p className='cop2 mt-4'>Telephone</p>
                    <a className='cop3 p-0'>+2348079737166</a>
                    <p className='cop3 pb-3'>mo - fri: 09:00 - 17:00</p>
                    <div className='cobd'></div>
                    <div className='paymm mt-4'>
                        <a><img src={twiter} className='m-2 fooimg'/></a>
                        <a><img src={facebook} className='m-2 fooimg'/></a>
                        <a><img src={pinterest} className='m-2 fooimg'/></a>
                        <a><img src={instagram} className='m-2 fooimg'/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Contact