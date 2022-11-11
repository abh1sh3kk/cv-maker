import React from 'react'

function PIBundle({cvData, handleChange}) {
	const {firstname, lastname, title, address, phoneNumber, email, description, imgURL} = cvData.personalInfo
  return (
    	<div className='personalInfoInputBundle'>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="First Name" value={firstname} name="firstname"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Last Name" value={lastname} name="lastname"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Title" value={title} name="title"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Address" value={address} name="address"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Phone Number" value={phoneNumber} name="phoneNumber"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Email" value={email} name="email"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Image URL" value={imgURL} name="imgURL"/>
		<input type="text" onChange={handleChange} className="personalInfo" placeholder="Description" value={description} name="description"/>
	</div>
  )
}

export default PIBundle