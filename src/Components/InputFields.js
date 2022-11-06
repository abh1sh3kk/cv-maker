import React from 'react'
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import "./stylesheets/inputStyles.css"

function InputFields({cvData, handleChange}) {
  console.log("I am inputfields")
  return (
    <div className='inputFields'>
      <PersonalInfo cvData={cvData} handleChange={handleChange}/>
      <Experience />
    </div>
  )
  }
export default InputFields;