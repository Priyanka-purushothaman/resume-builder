import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import { MdClose } from "react-icons/md";
import { addResumeAPI } from '../service/allAPI'
import { useNavigate } from 'react-router-dom';


const steps = ['Basic Information', 'Contact Details', 'Educational Detail', 'Work EXperience', 'Skills & Certication', 'Review & Submit'];

function Userinput({ resumeDetail, setResumeDetails }) {
  const skillsSuggestionArray = ['NODE JS', 'ANGULAR', 'REACT', 'JAVASCRIPT', 'MONGO DB', 'C', 'HTML', 'PYTHON', 'JAVA', 'C++']

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  //reference to skill input tag
  const skillRef = React.useRef();

  // to navigate
  const navigate = useNavigate()


  console.log(resumeDetail);



  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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


  const renderSteps = (stepCount) => {
    switch (stepCount) {
      case 0: return (

        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Personal Details</h3>

          <TextField value={resumeDetail.username} fullWidth label="Full Name" onChange={e => setResumeDetails({ ...resumeDetail, username: e.target.value })} id="standard-basic-name" variant="standard" />
          <TextField value={resumeDetail.jobTitle} fullWidth label="Job tiltle" onChange={e => setResumeDetails({ ...resumeDetail, jobTitle: e.target.value })} id="standard-basic-job" variant="standard" />
          <TextField value={resumeDetail.location} fullWidth label="Location" onChange={e => setResumeDetails({ ...resumeDetail, location: e.target.value })} id="standard-basic-location" variant="standard" />
        </Box>
      )
      case 1: return (



        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Contact Details</h3>

          <TextField value={resumeDetail.email} fullWidth label="Email" onChange={e => setResumeDetails({ ...resumeDetail, email: e.target.value })} id="fullWidth-email" variant="standard" />
          <TextField value={resumeDetail.mobile} fullWidth label="Phone Number" onChange={e => setResumeDetails({ ...resumeDetail, mobile: e.target.value })} id="fullWidth-phonenumber" variant="standard" />
          <TextField value={resumeDetail.github} fullWidth label="Github Profile Link" onChange={e => setResumeDetails({ ...resumeDetail, github: e.target.value })} id="fullWidth-gitlink" variant="standard" />
          <TextField value={resumeDetail.linkedin} fullWidth label="Linkedin Profile Link" onChange={e => setResumeDetails({ ...resumeDetail, linkedin: e.target.value })} id="fullWidth-linkedinlink" variant="standard" />
          <TextField value={resumeDetail.protfolio} fullWidth label="Protfolio Link" onChange={e => setResumeDetails({ ...resumeDetail, protfolio: e.target.value })} id="fullWidth-protfoliolink" variant="standard" />
        </Box>

      )
      case 2: return (
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Educational Details</h3>

          <TextField value={resumeDetail.course} fullWidth label="Course Name" onChange={e => setResumeDetails({ ...resumeDetail, course: e.target.value })} id="coursename" variant="standard" />
          <TextField value={resumeDetail.college} fullWidth label="College Name" onChange={e => setResumeDetails({ ...resumeDetail, college: e.target.value })} id="collegename" variant="standard" />
          <TextField value={resumeDetail.university} fullWidth label="University" onChange={e => setResumeDetails({ ...resumeDetail, university: e.target.value })} id="university" variant="standard" />
          <TextField value={resumeDetail.passoutYear} fullWidth label="Year of Passout" onChange={e => setResumeDetails({ ...resumeDetail, passoutYear: e.target.value })} id="yearpassout" variant="standard" />
        </Box>


      )
      case 3: return (
        <Box sx={{ width: 500, maxWidth: '100%' }}>
          <h3>Professional Details</h3>

          <TextField value={resumeDetail.jobType} fullWidth label="Job or internship" onChange={e => setResumeDetails({ ...resumeDetail, jobType: e.target.value })} id="jobintership" variant="standard" />
          <TextField value={resumeDetail.company} fullWidth label="Company Name" onChange={e => setResumeDetails({ ...resumeDetail, company: e.target.value })} id="comaonyname" variant="standard" />
          <TextField value={resumeDetail.companyLocation} fullWidth label="Company Location" onChange={e => setResumeDetails({ ...resumeDetail, companyLocation: e.target.value })} id="companylocation" variant="standard" />
          <TextField value={resumeDetail.duration} fullWidth label="Duration" onChange={e => setResumeDetails({ ...resumeDetail, duration: e.target.value })} id="duration" variant="standard" />
        </Box>

      )
      case 4: return (
        <div>
          <h3 className='mt-4'>Skills</h3>
          <div className='d-flex align-items-center justify-content-between p-3 w-100'>
            <input ref={skillRef} placeholder='Add Skill' type="text" className='form-control' />
            <Button onClick={() => addSkill(skillRef.current.value)} variant='text'>Add</Button>
          </div>
          <h5 className='fs-4 mt-2'>Suggestions:</h5>
          <div className='d-flex flex-wrap justify-content-between'>
            {
              skillsSuggestionArray.map((item, index) => (
                <Button onClick={() => addSkill(item)} key={index} variant='outlined' className='m-1'>{item}</Button>

              ))
            }
          </div>
          <h4 className='mt-4'>Added Skills : </h4>
          <div className='d-flex flex-wrap justify-content-between my-3'>
            {
              resumeDetail.userSkills?.length > 0 ?
                resumeDetail.userSkills?.map((skill, index) => (
                  <Button key={index} variant='contained' className='m-1' >{skill} <MdClose onClick={() => removeSkill(skill)} className='ms-2' /></Button>

                ))
                :
                <p className='fw-bolder'>No skills are added yet!!!</p>
            }
          </div>
        </div>

      )
      case 5: return (
        <div>
          <h3>Summary</h3>
          <div className="p-3 row">
            <TextField id="standard-basic-summary" label="Write a short summary of yourself" onChange={e => setResumeDetails({ ...resumeDetail, summary: e.target.value })} variant="standard" multiline rows={7} defaultValue={'Enthusiastic and detail-oriented MEARN Stack Developer with a strong foundation in MongoDB, Express.js, Angular, React, and Node.js. Skilled in building responsive web applications, developing RESTful APIs, and working with modern front-end frameworks. Passionate about learning new technologies, writing clean code, and solving real-world problems through efficient web solutions. Eager to contribute to a dynamic development team and grow as a full-stack developer.'} />

          </div>
        </div>
      )
    }
  }

  const handleAddResume = async () => {
    const { username, jobTitle, location } = resumeDetail
    if (!username && !jobTitle && !location) {
      alert("Please fill the form Completely")

    } else {
      //api
      console.log("Api Call");
      try {
        const result = await addResumeAPI(resumeDetail)
        console.log(result);
        if (result.status == 201) {
          alert("Resume added successfully!!!")
          const {id} = result.data
          //success redirect view page
          navigate(`/resume/${id}/view`)
        }
      } catch (error) {
        console.log(error);
      }
    }

  }




  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderSteps(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ?
              <Button onClick={handleAddResume}>Finish</Button>
              :
              <Button onClick={handleNext}>Next</Button>
            }


          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Userinput