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
    experience: [
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
        course: "Masters in Rajesh Hamal", 
        from: "2020",
        to: "2024",
      },
      {
        key: "01",
        university: "Hamal Rajesh University",
        city: "Rajesh Hamal Nibas ko xeu",
        course: "BSc. Rajesh Hamal",
        from: "2027",
        to: "2030",
      }
    ]

  });
  // let newCVData = {
  //   personalInfo: {
  //     firstname: "Not Rajesh",
  //     lastname: "Hamal",
  //     title: "Not Maha Nayak",
  //     email: "Not gmail@rajeshhamal.com",
  //     phoneNumber: "Not rajeshhamal",
  //     address: "Not Rajesh Hamal Nibas",
  //   },
  //   experience: [
  //     {
  //       key: "00", 
  //       position: "Not Hero",
  //       company: "Not Film",
  //       city: "Not Nepal",
  //       from: "Not 2000",
  //       to: "Not 2014"
  //     },
  //     {
  //       key: "01",
  //       position: "Not Actor",
  //       company: "Not Film",
  //       city: "Not Nepal",
  //       from: "Not 2040",
  //       to: "Not 2045"
  //     } 
  //   ],
  //   education: [
  //     {
  //       key: "00",
  //       university: "Rajesh Hamal University",
  //       city: "Rajesh Hamal Nibas",
  //       course: "Masters in Rajesh Hamal", 
  //       from: "2020",
  //       to: "2024",
  //     },
  //     {
  //       key: "01",
  //       university: "Hamal Rajesh University",
  //       city: "Rajesh Hamal Nibas ko xeu",
  //       course: "BSc. Rajesh Hamal",
  //       from: "2027",
  //       to: "2030",
  //     }
  //   ]

  // }

  function isPersonalInfo(event){
    return event.target.classList.contains("personalInfo")
  }

  function isExperience(event){
    return event.target.classList.contains("experienceInput")
  }

  function isEducation(event){
    return event.target.classList.contains("educationInput")
  }
  function findIndexFromKey(obj, key, name){
    return obj[name].findIndex(theObj => theObj.key === key)
  }

  function changeCVData(oldObj, event, context) {

    let targetKey = event.target.parentElement.getAttribute(`data-${context}`);
    let targetIndex = findIndexFromKey(oldObj, targetKey, context);
    let changedProperty = event.target.name

      let newObj = {
       ...oldObj
      }
      newObj[context][targetIndex][changedProperty] = event.target.value

        return newObj;
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
      let context = "experience";

       setCVData(cvData => {
        return changeCVData(cvData, event, context);
       });
    }

    else if (isEducation(event)) {
      let context = "education";
      console.log(context, " yes it is here")

      setCVData(cvData => {
        return changeCVData(cvData, event, context);
      })
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
