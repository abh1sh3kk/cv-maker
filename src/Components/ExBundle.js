import React from 'react'

function  ExBundle({experience, handleChange, removeExperience}) {
	
	const {key, position, company, city, from, to} = experience
  return (
	<>
	<div className="exBundle" data-experience={key}>
		<input type="text" onChange={handleChange} placeholder="Position" className='experienceInput' value={position} name="position" data-experiencenum={key} />
		<input type="text" onChange={handleChange} placeholder="Company" className='experienceInput' value={company} name="company" data-experiencenum={key} />
		<input type="text" onChange={handleChange} placeholder="City" className='experienceInput' value={city} name="city" data-experiencenum={key} />
		<input type="text" onChange={handleChange} placeholder="From" className='experienceInput' value={from} name="from" data-experiencenum={key} />
		<input type="text" onChange={handleChange} placeholder="To" className='experienceInput'	  value={to} name="to" data-experiencenum={key} />
	</div>
	<button onClick={removeExperience} data-experiencenum={key}>Delete</button>
	</>
  )
}

export default ExBundle