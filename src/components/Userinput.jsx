import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Information', 'Contact Details', 'Educational Detail', 'Work EXperience',  'Skills & Certication',  'Review & Submit'];
function Userinput() {
 
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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

const renderSteps = (stepCount)=>{
    switch(stepCount) {
        case 0 : return(

   <Box sx={{ width: 500, maxWidth: '100%' }}>
                <h3><h3>Personal Details</h3></h3>

      <TextField fullWidth  label="Full Name" id="standard-basic-name" variant="standard" />
      <TextField fullWidth label="Job tiltle" id="standard-basic-job"  variant="standard" />
      <TextField fullWidth label="Location" id="standard-basic-location" variant="standard" />
   </Box>
)
       case 1 : return(

        
  
   <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <h3>Contact Details</h3>

      <TextField fullWidth label="Email" id="fullWidth-email" variant="standard" />
      <TextField fullWidth label="Phone Number" id="fullWidth-phonenumber" variant="standard" />
      <TextField fullWidth label="Github Profile Link" id="fullWidth-gitlink" variant="standard" />
      <TextField fullWidth label="Linkedin Profile Link" id="fullWidth-linkedinlink" variant="standard" />
      <TextField fullWidth label="Protfolio Link" id="fullWidth-protfoliolink" variant="standard" />
   </Box>
 
        )
          case 2 : return(
        <Box sx={{ width: 500, maxWidth: '100%' }}>
                <h3>Educational Details</h3>

      <TextField fullWidth label="Course Name" id="coursename" variant="standard" />
      <TextField fullWidth label="College Name" id="collegename" variant="standard" />
      <TextField fullWidth label="University" id="university" variant="standard" />
      <TextField fullWidth label="Year of Passout" id="yearpassout" variant="standard" />
   </Box>
   

        )
          case 3 : return(
 <Box sx={{ width: 500, maxWidth: '100%' }}>
                <h3>Professional Details</h3>

      <TextField fullWidth label="Job or internship" id="jobintership" variant="standard" />
      <TextField fullWidth label="Company Name" id="comaonyname" variant="standard" />
      <TextField fullWidth label="Company Location" id="companylocation" variant="standard" />
      <TextField fullWidth label="Duration" id="duration" variant="standard" />
   </Box>

)
          case 4 : return(
            <div>
                <h3>Skills</h3>
            </div>
        )
          case 5 : return(
            <div>
                <h3>Summary</h3>
            </div>
        )
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
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Userinput