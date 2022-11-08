import React from 'react'
import PIBundle from './PIBundle'
import "./stylesheets/personalInfoStyle.css"

function PersonalInfo({cvData, handleChange}) {
// const {firstname, lastname, title, address, phoneNumber, email} = cvData.personalInfo

  return (
    <div className='personalInfo'>

	    <h1>Personal Info</h1>
	    <PIBundle cvData={cvData} handleChange={handleChange}/>
    
    </div>
  )
}

export default PersonalInfo