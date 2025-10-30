import { Divider, Button } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div style={{ margin: '70px' }} className='shadow p-5 w-100 text-center'>
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>Email</span>|<span className='mx-2'>Mobile</span></h6>
      <p className='my-3'>
        <a href="" target='_blank'>GITHUB</a> |
        <a href="" target='_blank'>LINKEDIN</a> |
        <a href="" target='_blank'>PROTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates adipisci quod, facere hic quia officiis eveniet, inventore nesciunt accusantium consequatur aut. Quae repellat doloribus sit illo assumenda dolorem ipsum dolore!
        Minus et hic libero voluptas optio perspiciatis. Sunt distinctio incidunt esse nemo saepe odit impedit eos perferendis, reiciendis, assumenda sit iste quia dolorum ratione nihil numquam ducimus dolores adipisci cupiditate.

      </p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
      <h5>Course name</h5>
      <p><span className='mx-2'>College</span>|<span className='mx-2'>University</span>|<span className='mx-2'>passport year</span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
      <h5>Job / Internship</h5>
      <p><span className='mx-2'>Comapny name</span>|<span className='mx-2'>company location</span>|<span className='mx-2'>duration</span></p>
      <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3'>
        <Button variant='contained' className='m-1' >NODE JS</Button>

      </div>

    </div>


  )
}

export default Preview