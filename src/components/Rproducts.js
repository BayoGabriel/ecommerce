import React, { useState } from 'react'
import "../Styles/Rproducts.css"
import s1 from "../Assets/Images/portable-spkr-02_360x.jpg"
import l from "../Assets/Images/spot-lamp-01_c4f78629-3901-4530-aac1-b5b384ec15fe_360x.jpg"
import l1 from "../Assets/Images/spot-lamp-05_420fa2de-0266-4af9-8e4b-14a2de379ba3_360x.jpg"
import s from "../Assets/Images/portable-spkr-01_360x.jpg"
import "../Styles/Products8.css"
import love from "../Assets/Images/love.svg"
import shuffle from "../Assets/Images/refresh.svg"
import view from "../Assets/Images/iconmonstr-eye-lined.svg"
import e from "../Assets/Images/elephant-stool-01_360x.jpg"
import e1 from "../Assets/Images/elephant-stool-02_360x.jpg"
import h from "../Assets/Images/beoplayh8i-02_360x.jpg"
import h1 from "../Assets/Images/beoplayh8i-03_360x.jpg"

const Rproducts = () => {
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
    
  return (
    <>
        <main className='container-fluid bg-white'>
        <div className='container mrpr'>
            <div className='text-center'>
                <p className='repr'>Recent Products</p>
                <p className='repo'>Recent posuere neque eu lectus ultrices</p>
            </div>
            {/* <div className='container-fluid bg-dark'> */}
                <div className='row'>
                    <div className='col-md-3 mt-3'>
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
                    <div className='col-md-3 mt-3'>
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
                    <div className='col-md-3 mt-3'>
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
                    <div className='col-md-3 mt-3'>
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
                    <div className='col-md-3 mt-5 smm'>
                        <div className='car' onMouseEnter={switc} onMouseLeave={switc}>
                            <div className='p8img'>
                                <img src={change ? s : s1} className='imgcon'/>
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
                    </div>
                    <div className='col-md-3 mt-5 smm'>
                    <div className='car' onMouseEnter={switc1} onMouseLeave={switc1}>
                            <div className='p8img'>
                                <img src={change1 ? l : l1} className='imgcon'/>
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
                    <div className='col-md-3 mt-5 smm'>
                    <div className='car' onMouseEnter={switc2} onMouseLeave={switc2}>
                            <div className='p8img'>
                                <img src={change2 ? e : e1} className='imgcon'/>
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
                    <div className='col-md-3 mt-5 smm'>
                    <div className='car' onMouseEnter={switc3} onMouseLeave={switc3}>
                            <div className='p8img'>
                                <img src={change3 ? h : h1} className='imgcon'/>
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
            {/* </div> */}
        </div>
        </main>
    </>
  )
}

export default Rproducts