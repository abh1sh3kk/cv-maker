import React from 'react'
import "./stylesheets/personalInfoStyle.css"

function PersonalInfo({cvData, handleChange}) {
const {firstname, lastname, title, address, phoneNumber, email} = cvData

  return (
    <div className='personalInfo'>
	<h1>Personal Info</h1>
	<div className='personalInfoInputBundle'>
		<input type="text" onChange={handleChange} placeholder="First Name" value={firstname} name="firstname"/>
		<input type="text" onChange={handleChange} placeholder="Last Name" value={lastname} name="lastname"/>
		<input type="text" onChange={handleChange} placeholder="Title" value={title} name="title"/>
		<input type="text" onChange={handleChange} placeholder="Address" value={address} name="address"/>
		<input type="text" onChange={handleChange} placeholder="Phone Number" value={phoneNumber} name="phoneNumber"/>
		<input type="text" onChange={handleChange} placeholder="Email" value={email} name="email"/>
	</div>
    </div>
  )
}

export default PersonalInfo