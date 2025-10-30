import { Box ,Paper} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";


function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Dowloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-80px'}}>Back</Link>
     <Box component="section" className='container-fluid' >
      <div className="row">
        <div className="col-md-4">
          <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}} ></Paper>
        <div className='d-flex justify-content-between align-items-center'>
          <h6>Review At: date&time</h6>
          <button className='btn text-danger fs-4'><MdDelete /></button>
        </div>
        <div className="border rounded p-3">
          <img width={'200px'} height={'100px'} src="https://website.cdn.novoresume.com/static/resume-templates/categories/professional/2.elevate.png?auto=format&fit=max&w=1920&q=80" alt="resume" />


        </div>
        </div>
      </div>
    </Box>
    </div>
  )
}

export default History