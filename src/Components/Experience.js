import React from 'react'
import ExBundle from './ExBundle';

function Experience({cvData, handleChange}) {

function addExperience() {
	console.log("Added")
}

function removeExperience(event) {
	console.log(event.target.getAttribute('data-experience'))
}
  return (
   <div className='experience'>
	<h1>Experience</h1>
	{
		cvData.experiences.map(experience => 
			<ExBundle experience={experience} handleChange={handleChange} removeExperience={removeExperience} key={experience.key}/>
		)
		// <ExBundle cvData={cvData} handleChange={handleChange}/>
	}
	<button onClick={addExperience}>Add Experience</button>
    </div>
  )
}

export default Experience;