import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import down from "../Assets/Images/down.svg"
import "../Styles/Navbar.css"
import logo from "../Assets/Images/logo.webp"
import search from "../Assets/Images/search.svg"
import love from "../Assets/Images/love.svg"
import shuffle from "../Assets/Images/refresh.svg"
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Search.css"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import s1 from "../Assets/Images/portable-spkr-02_360x.jpg"
import { Offcanvas, Button } from 'react-bootstrap';

const Nav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [counter, setCounter] = useState(0)
    const add = () => {
        setCounter(e => e + 1)
    }
    const sub = () => {
        setCounter(e => e - 1)
    }
    const [chang, setChang] = useState(false)
    
    const swit = () => {
        setChang(!chang)
    }
    const [isOpen2, setIsOpen2] = useState(false);

    const showModal2 = () => {
        setIsOpen2(true);
    };

    const hideModal2 = () => {
        setIsOpen2(false);
    };
    const [text] = useTypewriter({
        words: ['Start Typing Eje...'],
        loop: 0
      })
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const [isOpen3, setIsOpen3] = useState(false);

    const showModal3 = () => {
        setIsOpen3(true);
    };

    const hideModal3 = () => {
        setIsOpen3(false);
    };
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        if(typeof window !== "undefined"){
            window.addEventListener("scroll", () => {
                setScrollHeader(window.pageYOffset > 50)
            })
        }
    }, [])

  return (
    <>
        <nav className={`navbar navbar-expand-sm navbar-light ${scrollHeader ? "fixed-top bg-white" : "" }`}>
            <div className="container">
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbarr" onClick={handleShow}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title><h1 className='mt-3 ms-3'>MENU</h1></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ul className="">
                        <li className="">
                            <a href="/home" className="home textdeco" >Home</a>
                            {/* <img className='mt-1 me-2' src={down}/> */}
                        </li>
                        <li className="">
                            <Link to="/shop" className="home textdeco" >Shop</Link>
                            {/* <img className='mt-1 me-2' src={down}/> */}
                        </li>
                        <li className="">
                            <Link to="/blog" className="home textdeco" >Blog</Link>
                            {/* <img className='mt-1' src={down}/> */}
                        </li>
                    </ul>
                    <ul className="">
                        <li className="">
                            <Link to="/wishlist" className="d-flex home textdeco" >
                                <span className='me-3'>Wishlist</span>
                                <img className='love mt-2' src={love}/>
                            </Link>
                        </li>
                        <li className="">
                            <Link onClick={showModal2} className="home textdeco" >
                                <span className='me-3'>Compare</span>
                                <img className='love' src={shuffle}/>
                                <sup>3</sup>
                            </Link>
                            <>
                                <Modal show={isOpen2} onHide={hideModal2} fullscreen={true}>
                                    <Modal.Body>
                                        <div className='container-fluid '>
                                            <button style={{float:"right"}} type="button" className="btn-close" onClick={hideModal2}></button>
                                            <p className='compp1'>Compare</p>
                                            <table className='table mt-5'>
                                                <tbody>
                                                    <tr>
                                                        <td className='cobor'>Image</td>
                                                        <td className='text-center'><img src={s1} style={{width:"60px",height:"60px"}}/><button type='button' className='btn-close coic'></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Name</td>
                                                        <td className='text-center' style={{fontWeight:"600", fontSize:"14px"}}>Portable Bluetooth Speaker</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Price</td>
                                                        <td className='text-center' style={{fontWeight:"700", fontSize:"16px"}}>$249</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Rating</td>
                                                        <td className=''>
                                                            <div className='d-flex justify-content-center'>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Availability</td>
                                                        <td className='text-center' style={{color:"green",fontSize:"13px"}}>In stock</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Size</td>
                                                        <td className='text-center'></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Color</td>
                                                        <td className='text-center'></td>
                                                    </tr>
                                                    <tr className='cobord'>
                                                        <td className='cobor'></td>
                                                        <td className='text-center'><a href='/cart'><button className={`px-3 ${chang? "anbt44" : "anbt55"}`} onMouseEnter={swit} onMouseLeave={swit}>ADD TO CART</button></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </>
                        </li>
                        <li className="">
                            <Link to="/login" className="home textdeco" >My account</Link>
                        </li>
                        <li className="">
                            <Link onClick={showModal3} className="home textdeco me-1" >Cart</Link>
                            <span className="badge rounded-pill bg-dark badg mt-3">0</span>
                            <>
                                <Modal show={isOpen3} onHide={hideModal3} fullscreen={true} className='momq'>
                                    <Modal.Body>
                                        <div className='momq2'>
                                            <div style={{width:"90%",margin:"auto"}}>
                                                <button type="button" className="btn-close" onClick={hideModal3} style={{float:"right",marginTop:"45px"}}></button>
                                                <div className='d-flex justify-content-between' style={{paddingTop:"100px"}}>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className='text-center'><img src={s1} style={{width:"90px",height:"90px"}}/><button type='button' className='btn-close coic2'></button></span>
                                                        <div>
                                                            <p style={{fontSize:"15px",fontWeight:"600",marginTop:"10px"}}>Portable Bluetooth Speaker</p>
                                                            <div className='d-flex pdcounter2 justify-content-between'>
                                                                <a onClick={sub} className='pdminus'>
                                                                    <p onClick={sub} className='p-0 m-0'>-</p>
                                                                </a>
                                                                <p>{counter}</p>
                                                                <a onClick={add} className='pdminus'>
                                                                    <p onClick={add} className='p-0 m-0'>+</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p style={{fontSize:"18px",fontWeight:"700"}}>$249</p>
                                                </div>
                                                <div className='bg-dark mt-5' style={{height:"5px"}}></div>
                                                <div className='d-flex justify-content-between mt-3'>
                                                    <p style={{fontSize:"20px",fontWeight:"600"}}>Subtotal</p>
                                                    <p style={{fontSize:"20px",fontWeight:"700"}}>$249</p>
                                                </div>
                                                <div className='d-flex justify-content-between mt-3'>
                                                    <div className='cabi' style={{height:"3px"}}></div>
                                                    <p style={{color:"orange",marginTop:"-12px"}}>16%</p>
                                                    <div className='cabi2' style={{height:"3px"}}></div>
                                                </div>
                                                <p className='cfs'>Spend <span>$1,251</span> more to reach <span>Free Shipping!</span></p>
                                                <div>
                                                    <a href='/'><button className='mt-3 pdanbt21'>VIEW CART</button></a>
                                                    <a href='/'><button className={`mt-3 ${chang? "pdanbt21" : "pdanbt1"}`} onMouseEnter={swit} onMouseLeave={swit}>CHECKOUT</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </>
                        </li>
                    </ul>
                    </Offcanvas.Body>
                </Offcanvas>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex">
                            <a href="/home" className="nav-link home" >Home</a>
                            <img className='mt-1 me-2' src={down}/>
                        </li>
                        <li className="nav-item d-flex">
                            <Link to="/shop" className="nav-link home ms-3" >Shop</Link>
                            <img className='mt-1 me-2' src={down}/>
                        </li>
                        <li className="nav-item d-flex">
                            <Link to="/blog" className="nav-link home ms-3" >Blog</Link>
                            <img className='mt-1' src={down}/>
                        </li>
                    </ul>
                </div>
                <a href='/home'><img src={logo} className='navbar-brand logo'/></a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar22">
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <li className="nav-item d-flex">
                        <Link className="nav-link" onClick={showModal}><img className='love mt-2' src={search}/></Link>
                        <>
                            <Modal show={isOpen} onHide={hideModal} fullscreen={true} style={{height:"60%"}}>
                                <Modal.Body>
                                    <div className='container d-flex justify-content-end'>
                                        <div className='smowi'>
                                            <div className='d-flex justify-content-between'>
                                                <p className='smop1'>What are you looking for?</p>
                                                <button type="button" className="btn-close" onClick={hideModal}></button>
                                            </div>
                                            <input className='smoin' placeholder={text}/>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </>
                    </li>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item d-flex">
                            <Link className="nav-link" onClick={showModal}><img className='love mt-2' src={search}/></Link>
                            <>
                                <Modal show={isOpen} onHide={hideModal} fullscreen={true} style={{height:"60%"}}>
                                    <Modal.Body>
                                        <div className='container d-flex justify-content-end'>
                                            <div className='smowi'>
                                                <div className='d-flex justify-content-between'>
                                                    <p className='smop1'>What are you looking for?</p>
                                                    <button type="button" className="btn-close" onClick={hideModal}></button>
                                                </div>
                                                <input className='smoin' placeholder={text}/>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </>
                        </li>
                        <li className="nav-item d-flex">
                            <Link to="/wishlist" className="nav-link" >
                                <img className='love mt-2' src={love}/>
                            </Link>
                        </li>
                        <li className="nav-item d-flex">
                            <Link onClick={showModal2} className="nav-link text-white" >
                                <img className='love mt-2' src={shuffle}/>
                                <sup>3</sup>
                            </Link>
                            <>
                                <Modal show={isOpen2} onHide={hideModal2} fullscreen={true}>
                                    <Modal.Body>
                                        <div className='container-fluid '>
                                            <button style={{float:"right"}} type="button" className="btn-close" onClick={hideModal2}></button>
                                            <p className='compp1'>Compare</p>
                                            <table className='table mt-5'>
                                                <tbody>
                                                    <tr>
                                                        <td className='cobor'>Image</td>
                                                        <td className='text-center'><img src={s1} style={{width:"60px",height:"60px"}}/><button type='button' className='btn-close coic'></button></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Name</td>
                                                        <td className='text-center' style={{fontWeight:"600", fontSize:"14px"}}>Portable Bluetooth Speaker</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Price</td>
                                                        <td className='text-center' style={{fontWeight:"700", fontSize:"16px"}}>$249</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Rating</td>
                                                        <td className=''>
                                                            <div className='d-flex justify-content-center'>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                                <p className='p-0 m-0 star'>{'\u2605'}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Availability</td>
                                                        <td className='text-center' style={{color:"green",fontSize:"13px"}}>In stock</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Size</td>
                                                        <td className='text-center'></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='cobor'>Color</td>
                                                        <td className='text-center'></td>
                                                    </tr>
                                                    <tr className='cobord'>
                                                        <td className='cobor'></td>
                                                        <td className='text-center'><a href='/cart'><button className={`px-3 ${chang? "anbt44" : "anbt55"}`} onMouseEnter={swit} onMouseLeave={swit}>ADD TO CART</button></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </>
                        </li>
                        <li className="nav-item d-flex">
                            <Link to="/login" className="nav-link home" >My account</Link>
                        </li>
                        <li className="nav-item d-flex">
                            <Link onClick={showModal3} className="nav-link home" >Cart</Link>
                            <span className="badge rounded-pill bg-dark badg mt-3">0</span>
                            <>
                                <Modal show={isOpen3} onHide={hideModal3} fullscreen={true} className='momq'>
                                    <Modal.Body>
                                        <div className='momq2'>
                                            <div style={{width:"90%",margin:"auto"}}>
                                                <button type="button" className="btn-close" onClick={hideModal3} style={{float:"right",marginTop:"45px"}}></button>
                                                <div className='d-flex justify-content-between' style={{paddingTop:"100px"}}>
                                                    <div className='d-flex justify-content-between'>
                                                        <span className='text-center'><img src={s1} style={{width:"90px",height:"90px"}}/><button type='button' className='btn-close coic2'></button></span>
                                                        <div>
                                                            <p style={{fontSize:"15px",fontWeight:"600",marginTop:"10px"}}>Portable Bluetooth Speaker</p>
                                                            <div className='d-flex pdcounter2 justify-content-between'>
                                                                <a onClick={sub} className='pdminus'>
                                                                    <p onClick={sub} className='p-0 m-0'>-</p>
                                                                </a>
                                                                <p>{counter}</p>
                                                                <a onClick={add} className='pdminus'>
                                                                    <p onClick={add} className='p-0 m-0'>+</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p style={{fontSize:"18px",fontWeight:"700"}}>$249</p>
                                                </div>
                                                <div className='bg-dark mt-5' style={{height:"5px"}}></div>
                                                <div className='d-flex justify-content-between mt-3'>
                                                    <p style={{fontSize:"20px",fontWeight:"600"}}>Subtotal</p>
                                                    <p style={{fontSize:"20px",fontWeight:"700"}}>$249</p>
                                                </div>
                                                <div className='d-flex justify-content-between mt-3'>
                                                    <div className='cabi' style={{height:"3px"}}></div>
                                                    <p style={{color:"orange",marginTop:"-12px"}}>16%</p>
                                                    <div className='cabi2' style={{height:"3px"}}></div>
                                                </div>
                                                <p className='cfs'>Spend <span>$1,251</span> more to reach <span>Free Shipping!</span></p>
                                                <div>
                                                    <a href='/'><button className='mt-3 pdanbt21'>VIEW CART</button></a>
                                                    <a href='/'><button className={`mt-3 ${chang? "pdanbt21" : "pdanbt1"}`} onMouseEnter={swit} onMouseLeave={swit}>CHECKOUT</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav