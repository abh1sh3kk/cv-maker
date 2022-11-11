import React from 'react'
import ExBundle from './ExBundle';

function Experience({cvData, handleChange, addInput, removeInputHandler}) {

	return (
		<div className='experience'>
			<h1>Experience</h1>
			{
				cvData.experience.map(individualExperience => 
					<ExBundle experience={individualExperience} handleChange={handleChange} removeInputHandler={removeInputHandler} key={individualExperience.key}/>
				)
			}
			<button onClick={addInput} className="add-experience-btn add-btn">Add Experience</button>
		</div>
  	)
}

export default Experience;