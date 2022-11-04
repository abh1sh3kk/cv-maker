import React from 'react'

import InputFields from './InputFields'
import CV from "./CV"

import "./stylesheets/main.css"

function Main() {
  return (
    <main>
      <section className='inputSection'>
        <InputFields />
      </section>
      <section className='previewSection'>
        <CV />
      </section>
    </main>
  )
}

export default Main;