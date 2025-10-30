import React from 'react'
import { Link } from 'react-router-dom'


function Png() {
  return (
    <div className='container-fluid text-center mt-5'>
  <img width={'300px'} height={'300px'} src="https://static.vecteezy.com/system/resources/previews/026/371/210/non_2x/404-error-page-not-found-text-on-laptop-screen-ufo-tiny-people-updates-system-installation-programs-system-maintenance-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" alt="pagenotfound" />
        <h4 className='text-primary'>Page Not Found</h4>
  <Link to={'/'} className='btn btn-success m-4'>Go Home</Link>
    </div>
  )
}

export default Png