import React from 'react'
import { IoMailOpenSharp } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";


function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'purple',color:'white'}}
     className='d-flex justify-content-center align-items-center p-5 flex-column'>
<h1>Contact Us </h1>
<h5 className='fw-bolder'><IoMailOpenSharp className='me-2' />resumebuilder@gmail.com</h5>
<h5 className='fw-bolde '><FaSquarePhone className='me-2' />9024563486</h5>
<h4>Connect With Us</h4>
<div className='d-flex justify-content-center fs-4 my-3'>
  <SiWhatsapp  className='me-3'/>
  <FaInstagram className='me-3' />
  <RiFacebookCircleLine/>
  </div>
  <p>Designed & built with ❤️ using React</p>

    </div>
  )
}

export default Footer