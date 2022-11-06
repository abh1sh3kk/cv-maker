import React from 'react'

function PIBundle({cvData, handleChange}) {
	const {firstname, lastname, title, address, phoneNumber, email} = cvData.personalInfo
  return (
    	<div className='personalInfoInputBundle'>
		<input type="text" onChange={handleChange} placeholder="First Name" className="personalInfo" value={firstname} name="firstname"/>
		<input type="text" onChange={handleChange} placeholder="Last Name" className="personalInfo" value={lastname} name="lastname"/>
		<input type="text" onChange={handleChange} placeholder="Title" className="personalInfo" value={title} name="title"/>
		<input type="text" onChange={handleChange} placeholder="Address" className="personalInfo" value={address} name="address"/>
		<input type="text" onChange={handleChange} placeholder="Phone Number" className="personalInfo" value={phoneNumber} name="phoneNumber"/>
		<input type="text" onChange={handleChange} placeholder="Email" className="personalInfo" value={email} name="email"/>
	</div>
  )
}

export default PIBundle