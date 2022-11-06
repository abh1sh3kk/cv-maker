import React from 'react'
import InputFields from './InputFields'
import CV from "./CV"
import "./stylesheets/main.css"

function Main() {

  const [cvData, setCVData] = React.useState({
    personalInfo: {
      firstname: "",
      lastname: "",
      title: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    experiences: [
      {
        position: "",
        company: "",
        city: "",
        from: "",
        to: ""
      }
    ],
    education: [
      {
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      }
    ]

  });

  function isPersonalInfo(event){
    return event.target.classList.contains("personalInfo")
  }

  function isExperience(event){
    return event.target.classList.contains("experience")
  }

  function isEducation(event){
    return event.target.classList.contains("education")
  }

  function handleChange(event){
    
    if(isPersonalInfo(event)){
      setCVData(oldData => ({
        ...oldData,
        personalInfo: {
          ...oldData.personalInfo,
          [event.target.name] : event.target.value
        }
      }))
    }
  
    else if(isExperience(event)){
      console.log("Yes it is change in experience")
    }

    else if (isEducation(event)) {
      console.log("Yes it is change in education")
    }
    

  }

  function handleIt(event){
    setCVData(oldData => ({
      ...oldData,
      [event.target.name]: event.target.value
    }))

  }

  return (
    <main>
      <section className='inputSection'>
        <InputFields cvData={cvData} handleChange={handleChange} handleIt={handleIt}/>
      </section>

      <section className='previewSection'>
        <CV cvData={cvData}/>
      </section>

    </main>
  )
}

export default Main;