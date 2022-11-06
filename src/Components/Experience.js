import React from 'react'

function Experience({cvData, handleIt}) {

  return (
   <div className='experience'>
	<h1>Experience</h1>
	<div className='experienceInputBundle'>
		<input type="text" onChange={handleIt} placeholder="Position" value={cvData.experiences[0].position} name="position"/>
		{/* <input type="text" onChange={handleChange} placeholder="Company" value={} name="lastname"/>
		<input type="text" onChange={handleChange} placeholder="City" value={} name="title"/>
		<input type="text" onChange={handleChange} placeholder="From" value={} name="address"/>
		<input type="text" onChange={handleChange} placeholder="To" value={} name="phoneNumber"/> */}
	</div>
    </div>
  )
}

export default Experience;