import { Divider, Button } from '@mui/material'
import React from 'react'

function Preview({resumeDetail}) {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5 w-100 text-center'>
      <h3>{resumeDetail?.username}</h3>
      <h5>{resumeDetail?.jobTitle}</h5>
      <h6><span className='mx-2'>{resumeDetail?.location}</span>|<span className='mx-2'>{resumeDetail?.email}</span>|<span className='mx-2'>{resumeDetail?.mobile}</span></h6>
      <p className='my-3'>
        <a href={resumeDetail?.github} target='_blank'>GITHUB</a> |
        <a href={resumeDetail?.linkedin} target='_blank'>LINKEDIN</a> |
        <a href={resumeDetail?.protfolio} target='_blank'>PROTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>{resumeDetail?.summary}</p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
      <h5>{resumeDetail?.course}</h5>
      <p><span className='mx-2'>{resumeDetail?.college}</span>|<span className='mx-2'>{resumeDetail?.university}</span>|<span className='mx-2'>{resumeDetail?.passoutYear}</span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
      <h5>{resumeDetail?.jobType}</h5>
      <p><span className='mx-2'>{resumeDetail?.company}</span>|<span className='mx-2'>{resumeDetail?.companyLocation}</span>|<span className='mx-2'>{resumeDetail?.duration}</span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between '>
   {
    resumeDetail?.userSkills?.map((item,index)=>(
        <Button key ={index} variant='contained' className='m-1' >{item}</Button>

    ))
   }
      </div>

    </div>


  )
}

export default Preview