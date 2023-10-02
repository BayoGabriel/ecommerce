import React from 'react'
import "../Styles/Visitus.css"
import bg from "../Assets/Images/home-bg-01_900x.jpg"
import bg1 from "../Assets/Images/home-bg-02.jpg"

const Visitus = () => {
  return (
    <>
        <div className='container-fluid vupt bg-white '>
            <div className='row'>
                <div className='col-md-6 p-0'>
                    <div className='vbac'>
                        <div className='vimc'>
                            <img src={bg} className='vbimg'/>
                        </div>
                        <div className='vover'>
                            <p className='vvu'>Visit Us</p>
                            <p className='hof'>Head Office<br/>16 Boulevard Saint-Germain<br/>75005 Paris</p>
                            <a href='/contact' className='vua'>CONTACT US</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 m-0 p-0'>
                    <div className='vbac'>
                        <div className='vimc'>
                            <img src={bg1} className='vbimg'/>
                        </div>
                        <div className='vover'>
                            <p className='vvu'>Follow Our Store<br/>On Instagram</p>
                            <a className='vuaig'>@gabr_dev</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Visitus