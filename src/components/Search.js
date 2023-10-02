import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Search.css"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Search = () => {
    const [text] = useTypewriter({
        words: ['Start Typing Eje...'],
        loop: 0
      })
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
  return (
    <>
        <button type="button" className='workb btn btn-primar' onClick={showModal}>DETAILS</button>
        <Modal show={isOpen} onHide={hideModal} fullscreen={true} style={{height:"60%"}}>
            <Modal.Body>
                <div className='container d-flex justify-content-end'>
                    <div className='smowi'>
                        <div className='d-flex justify-content-between'>
                            <p className='smop1'>What are you looking for?</p>
                            <button type="button" className="btn-close" onClick={hideModal}></button>
                        </div>
                        <input className='smoin' placeholder={text}/>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Search