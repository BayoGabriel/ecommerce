import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Footer.css"
import facebook from "../Assets/Images/facebook.svg"
import instagram from "../Assets/Images/instagram.svg"
import twiter from "../Assets/Images/twiter.svg"
import pinterest from "../Assets/Images/iconmonstr-pinterest-5.svg"
import visa from "../Assets/Images/iconmonstr-payment-13.svg"
import paypal from "../Assets/Images/iconmonstr-payment-2.svg"
import masterc from "../Assets/Images/iconmonstr-payment-4.svg"
import ammex from "../Assets/Images/iconmonstr-payment-6.svg"
import disco from "../Assets/Images/iconmonstr-payment-9.svg"

const Footer = () => {
  return (
    <>
        <div className='bg-white fixx'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-2 col-6'>
                        <ul className='list-unstyled'>
                            <li>
                                <Link className='foot'>About Us</Link>
                            </li>
                            <li>
                                <Link className='foot'>Read Our Blog</Link>
                            </li>
                            <li>
                                <Link className='foot'>Contact Us</Link>
                            </li>
                            <li>
                                <Link className='foot'>Store Locations</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-2 col-6'>
                        <ul className='list-unstyled'>
                            <li>
                                <Link className='foot'>FAQs</Link>
                            </li>
                            <li>
                                <Link className='foot'>Order Tracking</Link>
                            </li>
                            <li>
                                <Link className='foot'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className='foot'>Shipping and Returns</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-2'>
                        <ul className='list-unstyled gone'>
                            <li>
                                <Link className='foot'>Living Room</Link>
                            </li>
                            <li>
                                <Link className='foot'>Bathroom</Link>
                            </li>
                            <li>
                                <Link className='foot'>Kitchen</Link>
                            </li>
                            <li>
                                <Link className='foot'>Lighting</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6 righ'>
                        <p className='nls'>Newsletter Subscribe</p>
                        <p className='giu'>Get instant updates about our new products and special promos!</p>
                        <form className='nlf d-flex justify-content-between'>
                            <input placeholder='Your email address'/>
                            <button>SIGN UP</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='mt-5'></hr>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md paymm'>
                        <a><img src={twiter} className='m-2 fooimg'/></a>
                        <a><img src={facebook} className='m-2 fooimg'/></a>
                        <a><img src={pinterest} className='m-2 fooimg'/></a>
                        <a><img src={instagram} className='m-2 fooimg'/></a>
                    </div>
                    <p className='c2018 col-md'>© 2018 <span>Barberry</span>. All rights reserved.</p>
                    <div className='col-md paym'>
                        <a><img src={visa} className='m-1 fooimg'/></a>
                        <a><img src={paypal} className='m-1 fooimg'/></a>
                        <a><img src={masterc} className='m-1 fooimg'/></a>
                        <a><img src={ammex} className='m-1 fooimg'/></a>
                        <a><img src={disco} className='m-1 fooimg'/></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer