import React, { useState } from 'react'
import "../Styles/Shopbody.css"
import "../Styles/Products8.css"
import "../Styles/Rproducts.css"
import list from "../Assets/Images/list-svgrepo-com.svg"
import grid from "../Assets/Images/visualization-grid-svgrepo-com.svg"
import s1 from "../Assets/Images/portable-spkr-02_360x.jpg"
import l from "../Assets/Images/spot-lamp-01_c4f78629-3901-4530-aac1-b5b384ec15fe_360x.jpg"
import l1 from "../Assets/Images/spot-lamp-05_420fa2de-0266-4af9-8e4b-14a2de379ba3_360x.jpg"
import s from "../Assets/Images/portable-spkr-01_360x.jpg"
import love from "../Assets/Images/love.svg"
import shuffle from "../Assets/Images/refresh.svg"
import view from "../Assets/Images/iconmonstr-eye-lined.svg"
import e from "../Assets/Images/elephant-stool-01_360x.jpg"
import e1 from "../Assets/Images/elephant-stool-02_360x.jpg"
import h from "../Assets/Images/beoplayh8i-02_360x.jpg"
import h1 from "../Assets/Images/beoplayh8i-03_360x.jpg"

const Shopbody = () => {
    const [change, setChange] = useState(false)
    const [change1, setChange1] = useState(false)
    const [change2, setChange2] = useState(false)
    const [change3, setChange3] = useState(false)
    const [change31, setChange31] = useState(false)
    const [change32, setChange32] = useState(false)
    const [change33, setChange33] = useState(false)
    const [change34, setChange34] = useState(false)
    
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
    const switc31 = () => {
        setChange32(false);
        setChange33(false);
        setChange34(false);
        setChange31(true);
    }
    const switc32 = () => {
        setChange33(false);
        setChange34(false);
        setChange31(false);
        setChange32(true);
    }
    const switc33 = () => {
        setChange32(false);
        setChange34(false);
        setChange31(false);
        setChange33(true);
    }
    const switc34 = () => {
        setChange32(false);
        setChange33(false);
        setChange31(false);
        setChange34(true);
    }

  return (
    <>
        <main className='bg-white border-bottom'>
            <div className='container'>
                <div className='go pt-3'>
                    <a className='me-2 ssf' onClick={switc31}><img src={list} className='slist'/></a>
                    <a className='me-2 ssf' onClick={switc32}><img src={grid} className='sgrid'/><sup className=''>2</sup></a>
                    <a className='me-2 ssf' onClick={switc33}><img src={grid} className='sgrid'/><sup className=''>3</sup></a>
                    <a className='me-2 ssf' onClick={switc34}><img src={grid} className='sgrid'/><sup className=''>4</sup></a>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"}`}>
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
                        </div>
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"}`}>
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
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"}`}>
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
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"}`}>
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
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"} smm`}>
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
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"} smm`}>
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
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"} smm`}>
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
                        <div className={`mt-5 ${change31 ? "col-md-12" : change32 ? "col-md-6" : change33 ? "col-md-4" : change34 ? "col-md-3" : "col-md-3"} smm`}>
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
                </div>
                <div className='text-center py-5'>
                    <button className='loadm'>Load More</button>
                </div>
            </div>
        </main>
    </>
  )
}

export default Shopbody