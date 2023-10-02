import React, { useEffect, useState } from 'react'
import "../Styles/Login.css"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { user_logout, user_signin } from '../Redux/Actions/userAction'
import Myacc from './Myacc'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userAuth = useSelector((state) => state.userAuth)
    const {userDetail , error} = userAuth

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(user_signin(email, password))
    }

    const logoutHandler = () => {
        dispatch(user_logout())
    }
    // useEffect(() => {
    //     if(userDetail){
    //         navigate("/")
    //     }
    // }, userDetail, navigate)

    const [chang, setChang] = useState(false)
    
    const swit = () => {
        setChang(!chang)
    }
  return (
    <>
    {!userDetail?
    <main>
        <Nav/>
        <div className='container-fluid bg-white border-bottom pb-5'>
            <nav className='d-flex justify-content-center son'>
                <a href='/home'>Home</a><span className='mx-2'>/</span>
                <a href='/login'>Account</a>
            </nav>
            <p className='sonp1 mt-3'>Log in</p>
            <form className='loform' onClick={submitHandler}>
                <p className='p-o m-0' style={{color:"red"}}>{error}</p>
                <div className='lcindv'>
                    <p>Email address<sup>*</sup></p>
                    <input type='email' className='' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='lcindv pb-4'>
                    <p>Password<sup>*</sup></p>
                    <input type='password' className='' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <a className='textdeco'>Forgot your password?</a>
                <br/>
                <button type='submit' className={`mt-3 ${chang? "anbt29" : "anbt9"}`} onMouseEnter={swit} onMouseLeave={swit}>LOG IN</button>
                <div className='d-flex justify-content-between py-3'>
                    <hr style={{width:"45%"}}/>
                    <p className='m-0'>or</p>
                    <hr style={{width:"45%"}}/>
                </div>
            </form>
            <div className='loform'>
                <a href='/signup'><button className='mt-3 anbt3'>CREATE AN ACCOUNT</button></a>
            </div>
        </div>
        <div className='space'></div>
        <Footer/>
    </main>
    :
    <main>
        <Nav/>
        <div className='bg-white white'></div>
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
    </main>}
    </>
  )
}

export default Login