import React, { useState } from 'react'
import Nav from '../components/Nav'
import "../Styles/Pdetails.css"
import l from "../Assets/Images/spot-lamp-01_c4f78629-3901-4530-aac1-b5b384ec15fe_360x.jpg"
import l1 from "../Assets/Images/spot-lamp-05_420fa2de-0266-4af9-8e4b-14a2de379ba3_360x.jpg"
import share from "../Assets/Images/iconmonstr-share-thin.svg"
import love from "../Assets/Images/love.svg"
import Footer from '../components/Footer'
import ruler from "../Assets/Images/iconmonstr-ruler-30.svg"
import lis from "../Assets/Images/iconmonstr-text-25.svg"
import shuffle from "../Assets/Images/refresh.svg"
import view from "../Assets/Images/iconmonstr-eye-lined.svg"
import e from "../Assets/Images/elephant-stool-01_360x.jpg"
import e1 from "../Assets/Images/elephant-stool-02_360x.jpg"
import h from "../Assets/Images/beoplayh8i-02_360x.jpg"
import h1 from "../Assets/Images/beoplayh8i-03_360x.jpg"
import s1 from "../Assets/Images/portable-spkr-02_360x.jpg"
import s from "../Assets/Images/portable-spkr-01_360x.jpg"
import "../Styles/Rproducts.css"
import "../Styles/Products8.css"

const Pdetails = () => {
    const [counter, setCounter] = useState(0)
    const [chang, setChang] = useState(false)
    const [chang2, setChang2] = useState(false)
    const [review, setReview] = useState(false)
    const [ship, setShip] = useState(false)
    const [descript, setDescript] = useState(true)
    const [change, setChange] = useState(false)
    const [change1, setChange1] = useState(false)
    const [change2, setChange2] = useState(false)
    const [change3, setChange3] = useState(false)
    
    const switc = () => {
        setChange(!change)
    }
    const switc1 = () => {
        setChange1(!change1)
    }
    const switc2 = () => {
        setChange2(!change2)
    }
    const switc3 = () => {
        setChange3(!change3)
    }
    const rev = () => {
        setDescript(false)
        setShip(false)
        setReview(true)
    }
    const des = () => {
        setShip(false)
        setReview(false)
        setDescript(true)
    }
    const shi = () => {
        setDescript(false)
        setReview(false)
        setShip(true)
    }
    const swi = () => {
        setChang2(!chang2)
    }
    const swit = () => {
        setChang(!chang)
    }
    const add = () => {
        setCounter(e => e + 1)
    }
    const sub = () => {
        setCounter(e => e - 1)
    }
  return (
    <>
        <main className='containerfluid  bg-white border-bottom pb-5'>
            <div className='pdspace'></div>
            <Nav/>
            <div className='pdspace'></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={l} className='pdmi'/>
                        <div className='bg-white p-1 smimgs d-flex'>
                            <img src={l1}/>
                            <img src={l} className='px-1'/>
                            <img src={l1}/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='container pdsg'>
                            <div className='d-flex justify-content-between'>
                                <nav className='d-flex son3'>
                                    <a href='/home'>Home</a><span className='mx-2'>/</span>
                                    <a href='/bberry'>Barberry</a>
                                </nav>
                                <div className='pdsb'>
                                    <img src={share}/>
                                </div>
                            </div>
                            <p className='pdp1'>Portable<br/>Bluetooth<br/>Speaker</p>
                            <div className='d-flex '>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='ps-3 pd12r'>12 reviews</p>
                            </div>
                            <p className='pdsilh'><span>11</span> sold in last <span>15</span> hours.</p>
                            <p className='pddes'>Portable Bluetooth speaker with up to 24hrs of battery life. Bring it everywhere. Even the heaviest beats are easy to carry.</p>
                            <p className='pdprice'><span>$ </span>249</p>
                            <p className='pdho'>Hurry, only <span>9</span> item(s) left in stock!</p>
                            <div className='pdhr'>
                                <div className='pdhri'></div>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex pdcounter justify-content-between'>
                                    <a onClick={sub} className='pdminus'>
                                        <p onClick={sub} className='p-0 m-0'>-</p>
                                    </a>
                                    <p>{counter}</p>
                                    <a onClick={add} className='pdminus'>
                                        <p onClick={add} className='p-0 m-0'>+</p>
                                    </a>
                                </div>
                                <div>
                                    <a href='/shop'><button className={`mt-3 ${chang? "pdanbt2" : "pdanbt"}`} onMouseEnter={swit} onMouseLeave={swit}>ADD TO CART</button></a>
                                    <a href='/shop'><button className={`mt-3 ${chang? "pdanbt" : "pdanbt2"}`} onMouseEnter={swit} onMouseLeave={swit}>BUY IT NOW</button></a>
                                </div>
                            </div>
                            <div className='d-flex flex-wrap justify-content-between'>
                                <div className='pdstw pt-5'>
                                    <img src={love}/>
                                    <a>Add to Wishlist</a>
                                </div>
                                <div className='pdstw pt-5'>
                                    <img src={lis}/>
                                    <a>View Compare</a>
                                </div>
                                <div className='pdstw pt-5'>
                                    <img src={ruler}/>
                                    <a>Size Guide</a>
                                </div>
                            </div>
                            <p className='pdsilh mt-4'><span>11 </span>visitors are looking this product!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center flex-wrap pddrs pb-4'>
                    <a onClick={des}>Description</a>
                    <a onClick={rev}>Reviews</a>
                    <a onClick={shi}>Shipping</a>
                </div>
                <div style={{fontSize:"22px",margin:"auto"}} className={`hund ${descript? "d-block" : "d-none"}`}>
                    <table className="table table-borderless pdtable">
                        <tbody>
                            <tr>
                                <td>Color</td>
                                <td>Material</td>
                                <td>Dimensions</td>
                            </tr>
                            <tr>
                                <td>Aqua, Red, White, Yellow</td>
                                <td>Glass, Metal, Wood</td>
                                <td>13"H x 10"W x 8"D</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="table table-borderless pdtable">
                        <tbody>
                            <tr>
                                <td>Shade</td>
                                <td>Style/Type</td>
                                <td>Size</td>
                            </tr>
                            <tr>
                                <td>7"D x 7"Diameter</td>
                                <td>Contemporary table lamp / task lamp</td>
                                <td>Small, Large, Medium</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`${review? "d-block" : "d-none"}`}>
                    <div className='row'>
                        <div className='col-md-6 border-end'>
                            <p className='pdrev rema'>Reviews</p>
                            <div className='d-flex rema'>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                <p className='ps-3 pd12r2'>Based on 12 reviews</p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='pdaar'>
                                <p className='pdrev'>Add a review</p>
                                <div className='cindv2'>
                                    <p>Name</p>
                                    <input type='email' placeholder='Enter your name' className='pdrvin'/>
                                </div>
                                <div className='cindv2 pt-4'>
                                    <p>Email</p>
                                    <input type='email' placeholder='john.smith@example.com' className='pdrvin'/>
                                </div>
                                <p className='pt-4 m-0' style={{fontSize:"18px",fontWeight:"600"}}>Rating</p>
                                <div className='d-flex'>
                                    <p className='p-0 m-0 star'>{'\u2606'}</p>
                                    <p className='p-0 m-0 star'>{'\u2606'}</p>
                                    <p className='p-0 m-0 star'>{'\u2606'}</p>
                                    <p className='p-0 m-0 star'>{'\u2606'}</p>
                                    <p className='p-0 m-0 star'>{'\u2606'}</p>
                                </div>
                                <div className='cindv2 pt-4'>
                                    <p>Review Title</p>
                                    <input type='email' placeholder='Give your review a title' className='pdrvin'/>
                                </div>
                                <p className='cotap'>Your Message</p>
                                <textarea className='cota pdrvin hund' placeholder='Write your coments here'/>
                                <br/>
                                <button onMouseEnter={swi} onMouseLeave={swi} className={`mt-3 mb-5 ${chang2? "anbt2" : "anbt"}`}>SUBMIT</button>
                                <div>
                                    <div className='d-flex justify-content-between hund'>
                                        <p style={{fontSize:"19px",fontWeight:"700"}}>city boy</p>
                                        <div className='d-flex'>
                                            <p className='p-0 m-0 star'>{'\u2605'}</p>
                                            <p className='p-0 m-0 star'>{'\u2605'}</p>
                                            <p className='p-0 m-0 star'>{'\u2605'}</p>
                                            <p className='p-0 m-0 star'>{'\u2605'}</p>
                                            <p className='p-0 m-0 star'>{'\u2605'}</p>
                                        </div>
                                    </div>
                                    <p style={{fontWeight:"lighter",fontSize:"14px",color:"grey"}}>city boy on Dec 07, 2022</p>
                                    <p style={{fontSize:"17px"}}>city boy, cityyy boooyyy</p>
                                    <p className='hund' style={{fontSize:"10px",textAlign:"end"}}>Report as Inappropriate</p>
                                    <hr className='hund' style={{marginTop:"40px"}}/>
                                    <a href='#' className='textdeco hund'><p style={{fontSize:"19px",textAlign:"center"}}>Load more</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${ship? "d-block" : "d-none"}`}>
                    <p className='pddes'>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque dui.</p>
                    <p style={{fontSize:"22px",fontWeight:"600"}}>Adipiscing Convallis Bulum</p>
                    <ul>
                        <li className='pddes'>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
                        <li className='pddes'>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
                        <li className='pddes'>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
                    </ul>
                    <p className='pddes pb-5'>Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque vestibulum amet elit ut volutpat.</p>
                </div>
            </div>
            <div className='py-4 border border-end-0 border-start-0 d-flex justify-content-center flex-wrap'>
                <p className='m-0' style={{fontWeight:"lighter",fontSize:"15px"}}><span style={{fontWeight:"600",fontSize:"17px"}}>SKU:</span> N/A</p>
                <p className='mx-3 mb-0' style={{fontWeight:"600",fontSize:"17px"}}>Brand:<a className='textdeco' style={{fontWeight:"100",fontSize:"15px"}}> Barberry</a></p>
                <p className='m-0' style={{fontWeight:"600",fontSize:"17px"}}>Categories:<a className='textdeco' style={{fontWeight:"100",fontSize:"17px"}}> Accessories,</a><a className='textdeco' style={{fontWeight:"100",fontSize:"15px"}}> Living Room</a></p>
            </div>
            <div className='container'>
                <p style={{fontWeight:"600",fontSize:"35px"}} className='pt-5 text-center'>Related products</p>
                <div className='row'>
                    <div className='col-md-3 mt-5'>
                        <a href='/pdetails' style={{textDecoration:"none", color:"black"}}>
                        <div className='car' onMouseEnter={switc} onMouseLeave={switc}>
                            <div className='p8img'>
                                <img src={change ? s1 : s} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Portable<br/>Bluetooth<br/>Speaker</p>
                                    <p className='me-3 mt price'>$249</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <div className='car' onMouseEnter={switc1} onMouseLeave={switc1}>
                            <div className='p8img'>
                                <img src={change1 ? l1 : l} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Multiple Spot<br/>Table Lamps</p>
                                    <p className='me-3 mt price'>$40 - $59</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <div className='car' onMouseEnter={switc2} onMouseLeave={switc2}>
                            <div className='p8img'>
                                <img src={change2 ? e1 : e} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Elephant<br/>Chair</p>
                                    <p className='me-3 mt price'>$169 - $850</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <div className='car' onMouseEnter={switc3} onMouseLeave={switc3}>
                            <div className='p8img'>
                                <img src={change3 ? h1 : h} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Libero<br/>Headphones</p>
                                    <p className='me-3 mt price'>$499</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <p style={{fontWeight:"600",fontSize:"35px"}} className='pt-5 text-center'>Recently viewed</p>
                <div className='row'>
                    <div className='col-md-3 mt-5'>
                        <a href='/pdetails' style={{textDecoration:"none", color:"black"}}>
                        <div className='car' onMouseEnter={switc} onMouseLeave={switc}>
                            <div className='p8img'>
                                <img src={change ? s1 : s} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Portable<br/>Bluetooth<br/>Speaker</p>
                                    <p className='me-3 mt price'>$249</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <div className='car' onMouseEnter={switc1} onMouseLeave={switc1}>
                            <div className='p8img'>
                                <img src={change1 ? l1 : l} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Multiple Spot<br/>Table Lamps</p>
                                    <p className='me-3 mt price'>$40 - $59</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <div className='car' onMouseEnter={switc2} onMouseLeave={switc2}>
                            <div className='p8img'>
                                <img src={change2 ? e1 : e} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Elephant<br/>Chair</p>
                                    <p className='me-3 mt price'>$169 - $850</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 mt-5'>
                        <div className='car' onMouseEnter={switc3} onMouseLeave={switc3}>
                            <div className='p8img'>
                                <img src={change3 ? h1 : h} className='imgcon'/>
                            </div>
                            <div className='overla2'>
                                <div className='d-flex '>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                    <p className='p-0 m-0 star'>{'\u2605'}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p className='lir p-0 m-0'>Libero<br/>Headphones</p>
                                    <p className='me-3 mt price'>$499</p>
                                </div>
                                <div className="container mt-3 tab">
                                    <table className="table table-bordered border-dark table">
                                        <tbody>
                                            <tr>
                                                <td className='ftd'><img src={view} className='timg'/></td>
                                                <td className='ftd'><p className='atc p-0 m-0'>Add To Cart</p></td>
                                                <td className='ftd'><img src={love} className='timg'/></td>
                                                <td className='ftd'><img src={shuffle} className='timg'/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Pdetails