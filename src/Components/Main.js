import React from 'react'
import InputFields from './InputFields'
import { isPersonalInfo, isExperience, isEducation, findIndexFromKey } from './Utilities/handleInputs'
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
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur commodi, nihil facere ullam Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sapiente est dicta quisquam",
      imgURL: "https://i.scdn.co/image/ab67616d0000b27378c8fe2c8e809ef6ce49bd3b"
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
