import React, { useEffect } from 'react'
import ps from "../Assets/Images/ps-sl2-img-01.jpg"
import ps1 from "../Assets/Images/ps-sl2-img-02.jpg"
import ps2 from "../Assets/Images/ps-sl2-img-03.jpg"
import "../Styles/Carousel.css"
import { Link } from 'react-router-dom'

const Carousel = () => {
    useEffect(() => {
        setTimeout(function () {
        document.getElementsByClassName('carousel-control-next-icon')[0].click();
       }, 5000); 
    }, [])
  return (
    <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ps} alt="Los Angeles" className="d-block" style={{width:"100%"}}/>
                    <div className="carousel-caption">
                        <p className='newarr'>NEW ARRIVALS</p>
                        <p className='newarr1'>New Portable<br/>Bluetooth Speaker</p>
                        <Link to="/shop" className='newarra'><p className='newarr2'>SHOP NOW</p></Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={ps1} alt="Chicago" className="d-block" style={{width:"100%"}}/>
                    <div className="carousel-caption">
                        <p className='newarr'>NOVEMBER SALES</p>
                        <p className='newarr1'>Clearance Sales<br/>Up to 30% Off</p>
                        <Link to="/shop" className='newarra'><p className='newarr2'>SHOP NOW</p></Link>
                    </div> 
                </div>
                <div className="carousel-item">
                    <img src={ps2} alt="New York" className="d-block" style={{width:"100%"}}/>
                    <div className="carousel-caption">
                        <p className='newarr'>LIVING ROOM</p>
                        <p className='newarr1'>New Autumn<br/>Furniture Collection</p>
                        <Link to="/shop" className='newarra'><p className='newarr2'>EXPLORE</p></Link>
                    </div> 
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    </>
  )
}

export default Carousel