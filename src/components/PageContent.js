import React, {useState} from 'react'

import UrltableContent from './urlTableContent/UrltableContent'
import InputsContent from './inputsContent/InputsContent'

import {sectionsConfig} from '../config'

const initialInputValues = {
  apikey: '', 
  scorecard: '', 
  appname: '', 
  format: 'XML',
  metodType: 'Add Record', 
}

const initialCheckedSections = [
  {
    id: 'SESSION_ID',
    value:'String content'
  },
  {
    id: 'appname',
    value:'String content'
  },
  {
    id: 'scorecard',
    value:'String content'
  },
]

const PageContent = ({user, params}) => {
  const initValues = {...initialInputValues, ...params}

  const [sections, setSections] = useState(sectionsConfig)
  const [inputValues, setInputValues] = useState(initValues)
  const [checkedSections, setCheckedSections] = useState(initialCheckedSections)
  var key = inputValues.apikey ? `apikey=${inputValues.apikey}` : ''
  var app = inputValues.appname ? `&appname=${inputValues.appname}` : ''
  var scorecard = inputValues.scorecard ? `&scorecard=${inputValues.scorecard}` : ''

  history.replaceState({}, 'apiv2/', `?${key}${app}${scorecard}`)
  return <section id="main" className="entry-content">
    <div className="container px-5">
      <UrltableContent
        sections={sections}
        inputValues={inputValues}
        setInputValues={setInputValues}
        checkedSections={checkedSections}/>
      <InputsContent
        user={user}
        sections={sections}
        setSections={setSections}
        inputValues={inputValues}
        setInputValues={setInputValues}
        checkedSections={checkedSections}
        setCheckedSections={setCheckedSections}
        initialCheckedSections={initialCheckedSections}
      />
    </div>
  </section>
} 

export default PageContent