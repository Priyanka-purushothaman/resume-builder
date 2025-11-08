import React, { useState, useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField  from '@mui/material/TextField';
import { MdClose } from "react-icons/md";
import { updateResumeAPI } from '../service/allAPI';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'100vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({resumeDetail, setResumeDetails}) {
     const[open,setOpen]=useState(false)
       const skillRef = useRef();
     

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const addSkill = (skill) => {
    if (resumeDetail.userSkills.includes(skill)) {
      alert("The given Skill alredy added, Please add another!!!")
    } else {
      setResumeDetails({ ...resumeDetail, userSkills: [...resumeDetail.userSkills, skill] })
      //to clear add skill text box
      skillRef.current.value = ""
    }
  }

  const removeSkill = (skill) => {
    setResumeDetails({ ...resumeDetail, userSkills: resumeDetail.userSkills.filter(item => item != skill) })
  }

  const handleResumeUpdate = async ()=>{
    const {id,username,jobTitle,location} = resumeDetail
    if(!username && jobTitle && location ){
      alert("Please fill the form completely")
    } else{
      //api
      console.log("Api call");
      try{
        const result = await updateResumeAPI(id,resumeDetail)
        console.log(result);
        if(result.status==200){
          alert("Resume update successfully!!!")
          handleClose()
        }
        
      } catch(err){
        console.log(err);
        
      }
      
    }
  }


  return (
    <div>
    <button onClick={handleOpen} className='btn fs-3 text-warning'><MdEditDocument />
    </button>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>

              {/* personal data */}  
             <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Personal Details</h3>

          <TextField value={resumeDetail.username} fullWidth label="Full Name" onChange={e => setResumeDetails({ ...resumeDetail, username: e.target.value })} id="standard-basic-name" variant="standard" />
          <TextField value={resumeDetail.jobTitle} fullWidth label="Job tiltle" onChange={e => setResumeDetails({ ...resumeDetail, jobTitle: e.target.value })} id="standard-basic-job" variant="standard" />
          <TextField value={resumeDetail.location} fullWidth label="Location" onChange={e => setResumeDetails({ ...resumeDetail, location: e.target.value })} id="standard-basic-location" variant="standard" />
        </Box>
        {/* contact details */}
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Contact Details</h3>

          <TextField value={resumeDetail.email} fullWidth label="Email" onChange={e => setResumeDetails({ ...resumeDetail, email: e.target.value })} id="fullWidth-email" variant="standard" />
          <TextField value={resumeDetail.mobile} fullWidth label="Phone Number" onChange={e => setResumeDetails({ ...resumeDetail, mobile: e.target.value })} id="fullWidth-phonenumber" variant="standard" />
          <TextField value={resumeDetail.github} fullWidth label="Github Profile Link" onChange={e => setResumeDetails({ ...resumeDetail, github: e.target.value })} id="fullWidth-gitlink" variant="standard" />
          <TextField value={resumeDetail.linkedin} fullWidth label="Linkedin Profile Link" onChange={e => setResumeDetails({ ...resumeDetail, linkedin: e.target.value })} id="fullWidth-linkedinlink" variant="standard" />
          <TextField value={resumeDetail.protfolio} fullWidth label="Protfolio Link" onChange={e => setResumeDetails({ ...resumeDetail, protfolio: e.target.value })} id="fullWidth-protfoliolink" variant="standard" />
        </Box>
        {/* educational details */}
         <Box sx={{ width: 500, maxWidth: '100%' }}>
                  <h3>Educational Details</h3>
        
                  <TextField value={resumeDetail.course} fullWidth label="Course Name" onChange={e => setResumeDetails({ ...resumeDetail, course: e.target.value })} id="coursename" variant="standard" />
                  <TextField value={resumeDetail.college} fullWidth label="College Name" onChange={e => setResumeDetails({ ...resumeDetail, college: e.target.value })} id="collegename" variant="standard" />
                  <TextField value={resumeDetail.university} fullWidth label="University" onChange={e => setResumeDetails({ ...resumeDetail, university: e.target.value })} id="university" variant="standard" />
                  <TextField value={resumeDetail.passoutYear} fullWidth label="Year of Passout" onChange={e => setResumeDetails({ ...resumeDetail, passoutYear: e.target.value })} id="yearpassout" variant="standard" />
                </Box>
                {/* professional details */}
                 <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Professional Details</h3>

          <TextField value={resumeDetail.jobType} fullWidth label="Job or internship" onChange={e => setResumeDetails({ ...resumeDetail, jobType: e.target.value })} id="jobintership" variant="standard" />
          <TextField value={resumeDetail.company} fullWidth label="Company Name" onChange={e => setResumeDetails({ ...resumeDetail, company: e.target.value })} id="comaonyname" variant="standard" />
          <TextField value={resumeDetail.companyLocation} fullWidth label="Company Location" onChange={e => setResumeDetails({ ...resumeDetail, companyLocation: e.target.value })} id="companylocation" variant="standard" />
          <TextField value={resumeDetail.duration} fullWidth label="Duration" onChange={e => setResumeDetails({ ...resumeDetail, duration: e.target.value })} id="duration" variant="standard" />
        </Box>
        {/* skills */}
         <div>
          <h3 className='mt-4'>Skills</h3>
          <div className='d-flex align-items-center justify-content-between p-3 w-100'>
            <input ref={skillRef} placeholder='Add Skill' type="text" className='form-control' />
            <Button onClick={() => addSkill(skillRef.current.value)} variant='text'>Add</Button>
          </div>
        
        </div>
        {/* summary */}
        <div>
                  <h3>Summary</h3>
                  <div className="p-3 row">
                    <TextField id="standard-basic-summary" label="Write a short summary of yourself" onChange={e => setResumeDetails({ ...resumeDetail, summary: e.target.value })} variant="standard" multiline rows={7} defaultValue={'Enthusiastic and detail-oriented MEARN Stack Developer with a strong foundation in MongoDB, Express.js, Angular, React, and Node.js. Skilled in building responsive web applications, developing RESTful APIs, and working with modern front-end frameworks. Passionate about learning new technologies, writing clean code, and solving real-world problems through efficient web solutions. Eager to contribute to a dynamic development team and grow as a full-stack developer.'} />
        
                  </div>
                </div>
                
    <div className="text-start">
         <button onClick={handleResumeUpdate} className='float-end btn btn-success text-light text-center fs-3'>Update</button>
    </div>
           
          </Box>
        </Box>
      </Modal>
             
  </div>
  )
}

export default Edit