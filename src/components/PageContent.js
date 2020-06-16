import React, {useState} from 'react'

import UrltableContent from './urlTableContent/UrltableContent'
import InputsContent from './inputsContent/InputsContent'

import {sectionsConfig} from '../config'

const initialInputValues = {
  apiKey: '', 
  scorecardId: '', 
  appName: '', 
  format: 'XML', 
}

const PageContent = () => {
  const [sections, setSections] = useState(sectionsConfig)
  const [inputValues, setInputValues] = useState(initialInputValues)

  return <section id="main" className="entry-content">
    <div className="container px-5">
      <UrltableContent inputValues={inputValues}/>
      <InputsContent
        sections={sections}
        setSections={setSections}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    </div>
  </section>
} 

export default PageContent