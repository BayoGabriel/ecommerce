import React from 'react'
import "../Styles/Products8.css"
import p81 from "../Assets/Images/cat-accessories_360x.jpg"
import p82 from "../Assets/Images/cat-bathroom_360x.jpg"
import p83 from "../Assets/Images/cat-kitchen_360x.jpg"
import p8 from "../Assets/Images/cat-living-room_360x.jpg"

const Products8 = () => {
  return (
    <>
        <main className='container-fluid bg-white'>
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <a href="/lroom" style={{textDecoration:"none", color:"black"}}>
                        <div className='car'>
                            <div className='p8img'>
                                <img src={p8} className='imgcon'/>
                            </div>
                            <div className='overla'>
                                <p className='eigh p-0 m-0'>8 products</p>
                                <p className='lir'>Living Room</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='col-md-3'>
                    <a href="/accessories" style={{textDecoration:"none", color:"black"}}>
                        <div className='car'>
                            <div className='p8img'>
                                <img src={p81} className='imgcon'/>
                            </div>
                            <div className='overla'>
                                <p className='eigh p-0 m-0'>4 products</p>
                                <p className='lir'>Accessories</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='col-md-3'>
                    <a href="/bathroom" style={{textDecoration:"none", color:"black"}}>
                        <div className='car'>
                            <div className='p8img'>
                                <img src={p82} className='imgcon'/>
                            </div>
                            <div className='overla'>
                                <p className='eigh p-0 m-0'>4 products</p>
                                <p className='lir'>Bathroom</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='col-md-3'>
                    <a href="/kitchen" style={{textDecoration:"none", color:"black"}}>
                        <div className='car'>
                            <div className='p8img'>
                                <img src={p83} className='imgcon'/>
                            </div>
                            <div className='overla'>
                                <p className='eigh p-0 m-0'>3 products</p>
                                <p className='lir'>Kitchen</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </main>
    </>
  )
}

export default Products8