import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{ width: '100%', height: '100vh', backgroundImage: "url('https://www.kindafrugal.com/wp-content/uploads/2024/04/Company-HR-taking-interview.jpg')", backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }} className='container-fluid row align-items-center'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
            <h3>Designed to get hired.
              Your skills, your story, your next job - all in one</h3>
            <Link to={'./resume'} className='btn tex-white' style={{ backgroundColor: 'purple' }}>Make Your Resume</Link>

          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      {/* tools */}
      <section className='m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className="conatiner row align-items-center">
          <div className="col-md-6">
            <div className="my-3">
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwards.</p>
            </div>
            <div className="my-3">
              <h4>Cover Letters</h4>
              <p>Easily write professional cover letters.</p>
            </div>
            <div className="my-3">
              <h4>Jobs</h4>
              <p>Automatically recive new and relevent job posyings.</p>
            </div>
            <div className="my-3">
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
          </div>
        </div>

      </section>

      {/* image */}
      <section style={{ width: '100%', height: '500px', backgroundImage: 'url("https://talerang.com/wp-content/uploads/2018/06/Ace-your-meetings.jpg")', backgroundPosition: 'top', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>

      </section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className="text-center my-5">Testimonial</h1>
        <div className="row container">
        <div className="col-md-1"></div>

         <div className="col-md-4 mt-5">
           <h3 className='my-5'>Trusted by professional worldwide</h3>
          <p className='fs-5' style={{textAlign:'justify'}}>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>

          <p  className='fs-5' style={{textAlign:'justify'}}>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

          <p  className='fs-5' style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
         </div>
        <div className="col-md-1"></div>
         <div className="col-md-6">
          <div className="row my-3">
            <div className="col-3 my-3">
              <img className='w-100' height={'150px'} src="https://induslaw.com/uploads/image/1721201526_shreya-suri-listing-img.webp" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://media.licdn.com/dms/image/v2/D4E03AQEFZ4luEOGUSA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719355929915?e=1762992000&v=beta&t=SkEM6d8KAKSFCkK1uukuggFHnsmSq0Psrc76WepJyqE" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-600nw-2437772333.jpg" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://thumbs.dreamstime.com/b/passport-photo-woman-poses-71673302.jpg" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrWVlxdb14mSlGfzhhQbDDzoOnvKGEkiaC-TH9XU4jYyrjkm35KlZbqQU1wXw-p7Wy3o&usqp=CAU" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IiNWV1t0HAh4aSp_bAEJe-jMGJRCYzcs6w&s" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=360" alt="person" />
            </div>
             <div className="col-3 my-3">
              <img className='w-100' height={'150px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjXPIFVhrn6cIX-2mIAMbkVTH_tcTej_4h8wvMmUHA-MRlkqBVCGIMxuxFNXsNMbtXsg&usqp=CAU" alt="person" />
            </div>
             <div className="col-3">
              <img className='w-100' height={'150px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GMcjRi7JLYHxmp4kJR0nrvkUmZq5mP8R3Q&s" alt="person" />
            </div>
             <div className="col-3">
              <img className='w-100' height={'150px'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvryP5pGwUAF-4AgDi1BgqvRqxEmEAomen6w&s" alt="person" />
            </div>
             <div className="col-3">
              <img className='w-100'height={'150px'}  src="data:image/jpeg;base64,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" alt="person" />
            </div>
             <div className="col-3">
              <img className='w-100' height={'150px'}  src="https://img.freepik.com/premium-psd/generative-ai-portrait-only-one-man-white-background-created-by-ai_1132122-10301.jpg" alt="person" />
            </div>
            
          
          </div>

         </div>
        </div>

      </section>

    </div>
  )
}

export default LandingPage