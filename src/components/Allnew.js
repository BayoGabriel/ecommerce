import React, { useState } from 'react'
import "../Styles/Allnew.css"
const Allnew = () => {
    const [chang, setChang] = useState(false)
    
    const swit = () => {
        setChang(!chang)
    }
  return (
    <>
      <main className='container-fluid bg-white'>
        <div className='container text-center pt-5 bg-white'>
          <p className='alln'>It's all New,<br/>It all arrived this week</p>
          <p className='fah mt-3'>Furniture axe heirloom ethical man bun sustainable.<br/>Pickled normcore selvage, bespoke four dollar toast<br/> neutra chartreuse vinyl.</p>
          <a href='/shop'><button className={`mt-3 ${chang? "anbt2" : "anbt"}`} onMouseEnter={swit} onMouseLeave={swit}>VIEW ALL NEW PRODUCTS</button></a>
        </div>
      </main>
    </>
  )
}

export default Allnew