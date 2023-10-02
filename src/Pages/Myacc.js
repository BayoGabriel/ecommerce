import React from 'react'
import "../Styles/Login.css"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { user_logout } from '../Redux/Actions/userAction'

const Myacc = () => {
    const userAuth = useSelector((state) => state.userAuth)
    // const {userDetail} = userAuth

    const userRegister = useSelector((state) => state.userRegister)
    const {userDetail} = userRegister

    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(user_logout())
    }
  return (
    <>
    <div className='container-fluid'>
        
    </div>
        <div className='bg-white white'></div>
        <Nav/>
        <div className='bg-white white'></div>
        <div className='container-fluid bg-white pb-5 border-bottom'>
            <nav className='d-flex justify-content-center son'>
                <a href='/home'>Home</a><span className='mx-2'>/</span>
                <a href='/'>Account</a>
            </nav>
            <p className='sonp1 mt-3'>My Account</p>
            <a className='textdeco' onClick={logoutHandler} style={{cursor:"pointer"}}><p className='malob'>Logout</p></a>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-8'>
                        <p className='maoh'>Order History</p>
                        <p className='yhpaoy'>You haven't placed any orders yet.</p>
                    </div>
                    <div className='col-md-4'>
                        <p className='maoh'>Account Details</p>
                        <div className='p-5 border mt-5'>
                            <p className='yhpaoy'>{userDetail.firstName}</p>
                            <p className='yhpaoy'>United States</p>
                            <a className='mavad textdeco'>View Addresses (1)</a>
                            <br/>
                            <a className='yhpaoy textdeco'><p className='mt-4'>Manage Subscriptions</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='space'></div>
        <Footer/>
    </>
  )
}

export default Myacc