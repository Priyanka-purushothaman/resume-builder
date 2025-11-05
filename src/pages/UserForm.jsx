import React from 'react'
import Userinput from '../components/Userinput'
import Preview from '../components/Preview'

function UserForm() {
  // create  state for strong resume

  const [resumeDetail, setResumeDetails] = React.useState({
    username: "",
    jobTitle: "",
    location: "",
    email: "",
    mobile: "",
    github: "",
    linkedin: "",
    protfolio: "",
    course: "",
    college: "",
    university: "",
    passoutYear: "",
    jobType: "",
    company: "",
    companyLocation: "",
    duration: "",
    userSkills: [],
    summary: "",
  })

  return (
    <div className='container'>
      <div className="row p-5" >
        <div className="col-6">
          <Userinput resumeDetail={resumeDetail} setResumeDetails={setResumeDetails} />
        </div>
        <div className="col-6">
          {
            resumeDetail.username &&
            <Preview resumeDetail={resumeDetail} />
          }
        </div>
      </div>

    </div>
  )
}

export default UserForm