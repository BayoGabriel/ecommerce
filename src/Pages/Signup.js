import React, { useEffect, useState } from 'react'
import "../Styles/Login.css"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { user_logout, user_signup } from '../Redux/Actions/userAction'
import { USER_SIGN_UP_RESET } from '../Redux/Types'
import { useNavigate } from 'react-router-dom'
import Myacc from './Myacc'

const Signup = () => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const userRegister = useSelector((state) => state.userRegister)
    const {userDetail, error} = userRegister

    const navigate = useNavigate()

    // useEffect(() => {
    //     if(userDetail){
    //         navigate("/")
    //     }
    // }, userDetail, navigate)

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            email,
            password
        }
        dispatch(user_signup(data))
    }

    const logoutHandler = () => {
        dispatch(user_logout())
    }
    useEffect (() => {
        return () => {
            dispatch({type: USER_SIGN_UP_RESET})
        }
    }, [dispatch])
    
    const [chang, setChang] = useState(false)
    
    const swit = () => {
        setChang(!chang)
    }
  return (
    <>{!userDetail?
        <main>
        <div className='container-fluid bg-white border-bottom pb-5'>
            <Nav/>
            <nav className='d-flex justify-content-center son'>
                <a href='/home'>Home</a><span className='mx-2'>/</span>
                <a href='/signup'>Create Account </a>
            </nav>
            <p className='sonp1 mt-3'>Register</p>
            <form className='loform' onSubmit={submitHandler}>
                <p className='p-o m-0' style={{color:"red"}}>{error}</p>
                <div className='lcindv'>
                    <p>First Name</p>
                    <input type='text' className='' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='lcindv'>
                    <p>Last Name</p>
                    <input type='text' className='' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='lcindv'>
                    <p>Email address<sup>*</sup></p>
                    <input type='email' className='' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='lcindv pb-4'>
                    <p>Password<sup>*</sup></p>
                    <input type='password' className='' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p style={{fontWeight:"lighter",fontSize:"17px"}} className='m-0'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a className='textdeco' style={{fontWeight:"600"}}>privacy policy.</a></p>
                <br/>
                <button type='submit' className={`mt-3 ${chang? "anbt29" : "anbt9"}`} onMouseEnter={swit} onMouseLeave={swit}>REGISTER</button>
                <div className='d-flex justify-content-between py-3'>
                    <hr style={{width:"45%"}}/>
                    <p className='m-0'>or</p>
                    <hr style={{width:"45%"}}/>
                </div>
            </form>
            <div className='loform'>
                <a href='/login'><button className='mt-3 anbt3'>LOG IN</button></a>
            </div>
        </div>
        <div className='space'></div>
        <Footer/>
        </main>
        :
        <main>
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
        </main>}
    </>
  )
}

export default Signup