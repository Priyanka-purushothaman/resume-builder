import React from 'react'
import { FaFile } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h1 className='text-center mt-5 '>Create a Job-Winining Resume</h1>

 <div style={{marginRight:'100px'}}  className='row justify-content-center align-item mt-5'>
<div className="col-md-1"></div>
<div className="col-md-5 border rounded shadow p-5 text-center">
    <FaFile className='text-primary fs-4 mt-2' />
<h3 className='mt-4'>Add your informattion</h3>
<p>add pre-written example to each section</p>
  <h5>Step 1</h5>
</div>
<div className="col-md-1"></div>

<div className="col-md-5 border rounded shadow text-center p-5">
  <MdFileDownload className='text-danger fs-2 mt-2'/>
<h3 className='mt-4'>Download your Resume</h3>
<p>Download and start applying</p>
<h5>Step 2</h5>
</div>
</div>
<div className='text-center mb-5 mt-5'>
  <Link to={'/form'} className='btn text-white' style={{backgroundColor:'purple'}}> LET'S START
  </Link>
</div>

  </div>
  )
}

export default ResumeGenerator