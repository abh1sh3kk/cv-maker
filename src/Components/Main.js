import React from 'react'
import InputFields from './InputFields'
import CV from "./CV"
import "./stylesheets/main.css"

function Main() {

  const [cvData, setCVData] = React.useState({
    firstname: "",
    lastname: "",
    title: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(event){
    setCVData(oldData => ({
      ...oldData,
      [event.target.name]: event.target.value
    }))

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