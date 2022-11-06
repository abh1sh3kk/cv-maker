import React from 'react'
import InputFields from './InputFields'
import CV from "./CV"
import "./stylesheets/main.css"

function Main() {

  const [cvData, setCVData] = React.useState({
    personalInfo: {
      firstname: "Rajesh",
      lastname: "Hamal",
      title: "Maha Nayak",
      email: "gmail@rajeshhamal.com",
      phoneNumber: "rajeshhamal",
      address: "Rajesh Hamal Nibas",
    },
    experiences: [
      {
        key: "00", 
        position: "Hero",
        company: "Film",
        city: "Nepal",
        from: "2000",
        to: "2014"
      },
      {
        key: "01",
        position: "Actor",
        company: "Film",
        city: "Nepal",
        from: "2040",
        to: "2045"
      } 
    ],
    education: [
      {
        key: "00",
        university: "Rajesh Hamal University",
        city: "Rajesh Hamal Nibas",
        degree: "Hamal",
        subject: "English",
        from: "2020",
        to: "2024",
      },
      {
        key: "01",
        university: "Hamal Rajesh University",
        city: "Rajesh Hamal Nibas ko xeu",
        degree: "25degree celcius",
        subject: "verb object",
        from: "2027",
        to: "2030",
      }
    ]

  });

  function isPersonalInfo(event){
    return event.target.classList.contains("personalInfo")
  }

  function isExperience(event){
    return event.target.classList.contains("experienceInput")
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
      let experienceIndex = event.target.getAttribute("data-experience");

      console.log(experienceIndex)

      console.log(cvData.experiences[experienceIndex])

      console.log("Yes it is change in experience")
    }

    else if (isEducation(event)) {
      console.log("Yes it is change in education")
    }
    

  }

  return (
    <main>
      <section className='inputSection'>
        <InputFields cvData={cvData} handleChange={handleChange}/>
      </section>

      <section className='previewSection'>
        <CV cvData={cvData}/>
      </section>

    </main>
  )
}

export default Main;