import React from 'react'
import ExBundle from './ExBundle';

function Experience({cvData, handleChange}) {

console.log(cvData)

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
				cvData.experience.map(individualExperience => 
					<ExBundle experience={individualExperience} handleChange={handleChange} removeExperience={removeExperience} key={individualExperience.key}/>
				)
			}
			<button onClick={addExperience}>Add Experience</button>
		</div>
  	)
}

export default Experience;