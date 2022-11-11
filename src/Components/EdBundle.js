import React from 'react'

function EdBundle({degree, handleChange}) {
	const {key, university, city, course, from, to } = degree
  return (
	<>
	<div className='edBundle' data-education={key}>
		<input type="text" onChange={handleChange} className="educationInput" placeholder="University" value={university} name="university"/>
		<input type="text" onChange={handleChange} className="educationInput" placeholder="City" value={city} name="city"/>
		<input type="text" onChange={handleChange} className="educationInput" placeholder="Course" value={course} name="course"/>
		<input type="text" onChange={handleChange} className="educationInput" placeholder="From" value={from} name="from"/>
		<input type="text" onChange={handleChange} className="educationInput" placeholder="To" value={to} name="to"/>
	</div>
	<button className='remove-btn'>Delete</button>
	</>
  )
}

export default EdBundle;