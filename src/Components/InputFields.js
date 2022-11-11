import React from 'react'
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Education from './Education';
import "./stylesheets/inputStyles.css"
import { findIndexFromKey, removeInput } from './Utilities/handleInputs';

function InputFields({cvData, handleChange}) {

  function addInput() {
    console.log("Add Input")
  }

  function removeInputHandler(event) {

    let context = "education"

    if (event.target.previousElementSibling.classList.contains("exBundle")){
      context = "experience"
    }
    
    let targetKey = event.target.previousElementSibling.getAttribute(`data-${context}`)
    let targetIndex = findIndexFromKey(cvData, targetKey, context);

    removeInput(cvData, context, targetIndex);
    
  }



  return (
    <div className='inputFields'>
      <PersonalInfo cvData={cvData} handleChange={handleChange}/>
      <Experience cvData={cvData} handleChange={handleChange} addInput={addInput} removeInputHandler={removeInputHandler}/>
      <Education cvData={cvData} handleChange={handleChange} addInput={addInput} removeInputHandler={removeInputHandler}/>
    </div>
  )
  }
export default InputFields;