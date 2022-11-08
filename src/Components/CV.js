import React from 'react'
import "./stylesheets/CVstyles.css"


function CV(props) {
  const {firstname, lastname, title, address, phoneNumber, email} = props.cvData.personalInfo  
  

  return (
    <section>
    <div className='cv-base' style={{overflow: "auto"}} >
      <div className='name'>{firstname} {lastname}</div>
      <div className='title'>{title}</div>
      <div className='address'>{address}</div>
      <div className='phoneNumber'>{phoneNumber}</div>
      <div className='email'>{email}</div>
      {
        props.cvData.experience.map(exp => <pre className="experience" key={exp.key}>{JSON.stringify(exp)}</pre>)
      }
      {
        props.cvData.education.map(degree => <pre className="education" key={degree.key}>{JSON.stringify(degree)}</pre>)
      }

    </div>

    </section>
  )
  }
export default CV;