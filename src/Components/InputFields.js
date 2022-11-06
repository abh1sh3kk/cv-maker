import React from 'react'
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import "./stylesheets/inputStyles.css"

function InputFields({cvData, handleChange, handleIt}) {
  return (
    <div className='inputFields'>
      <PersonalInfo cvData={cvData} handleChange={handleChange}/>
      {/* <Experience cvData={cvData.experiences} handleChange={handleIt}/>
      <Education cvData={cvData.education} handleChange={handleChange}/> */}
    </div>
  )
  }
export default InputFields;