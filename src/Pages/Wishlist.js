import React from 'react'
import "../Styles/Wishlist.css"
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
const Wishlist = () => {
    const userAuth = useSelector((state) => state.userAuth)
    const {userDetail} = userAuth

  return (
    <>
        {!userDetail?
        <main className='border-bottom bg-white'>
        <div className='whead'>
            <Nav/>
            <nav className='d-flex justify-content-center son'>
                <a href='/home'>Home</a><span className='mx-2'>/</span>
                <a href='/wishlist'>Wishlist</a>
            </nav>
            <p className='sonp1 mt-3'>Wishlist</p>
        </div>
        <div className='container pt-5 wtapad bg-white'>
            <table className='table table-borderless text-center'>
                <thead className='wtbor wtpa'>
                    <tr>
                        <th>Product name</th>
                        <th>Unit price</th>
                        <th>Stock status</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>Product name</td>
                        <td>Unit price</td>
                        <td>Stock status</td>
                    </tr>
                </tbody> */}
            </table>
            <p className='wtcatch'>Sign in to sync your Saved Items across all your devices. <span><a href='/login' className='textdeco'>Login</a></span></p>
        </div>
        <div className='space'></div>
        <Footer/>
        </main>
        :
        <main className='border-bottom bg-white'>
        <div className='whead'>
            <Nav/>
            <nav className='d-flex justify-content-center son'>
                <a href='/home'>Home</a><span className='mx-2'>/</span>
                <a href='/wishlist'>Wishlist</a>
            </nav>
            <p className='sonp1 mt-3'>Wishlist</p>
        </div>
        <div className='container pt-5 wtapad bg-white'>
            <table className='table table-borderless text-center'>
                <thead className='wtbor wtpa'>
                    <tr>
                        <th>Product name</th>
                        <th>Unit price</th>
                        <th>Stock status</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <tr>
                        <td>Product name</td>
                        <td>Unit price</td>
                        <td>Stock status</td>
                    </tr>
                </tbody> */}
            </table>
            <p className='wtcatch'>No products were added to the wishlist. <span><a href='/shop' className='textdeco'>Go shop</a></span></p>
        </div>
        <div className='space'></div>
        <Footer/>
        </main>}
    </>
  )
}

export default Wishlist