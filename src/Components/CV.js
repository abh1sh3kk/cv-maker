import React from 'react'
import "./stylesheets/CVstyles.css"


function CV(props) {
  const {firstname, lastname, title, address, phoneNumber, email} = props.cvData.personalInfo  
  

  return (
    <section>
    <div className='cv-base'>
      <div className='name'>{firstname} {lastname}</div>
      <div className='title'>{title}</div>
      <div className='address'>{address}</div>
      <div className='phoneNumber'>{phoneNumber}</div>
      <div className='email'>{email}</div>
      {
        props.cvData.experiences.map(experience => <div className="experiences" key={experience.key}>{experience.position}</div>)
      }
      {
        props.cvData.education.map(degree => <div className="education" key={degree.key}>{degree.university}</div>)
      }

    </div>

    </section>
  )
  }
export default CV;