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

const checkedClumns = []

const PageContent = ({user, params}) => {
  const initValues = {...initialInputValues, ...params}
  const [sections, setSections] = useState(sectionsConfig)
  const [inputValues, setInputValues] = useState(initValues)
  const [selectedFormat, setSelectedFormat] = useState(initValues.format)

  const sectionFilds = []
  sections.map(s => {
    s.sectionFilds.map(f => {
      sectionFilds.push(f)
    })
  })

  var checkedParams = params && params.checked && params.checked.split(",")
  checkedParams && checkedParams.map(check => {
    const checkedFilds = sectionFilds.find(f => f.id === check)
    const inSections = checkedClumns.find(f => f.id === check)
    if(checkedFilds && !inSections) {
      checkedClumns.push(checkedFilds.objectRequest)
    }
     const newSections = sections.map(s => {
        s.sectionFilds.map(f => {
          if (f.id === check) {
            f.isChecked = true
          }
          return f
        })
        return s
     })
  })

  console.log("params------->", params)

  var checkedKeys = params && params.data_key && params.data_key.split(",")
  const [dataKeyItems, setDataKeyItems] = useState(checkedKeys || [])

  const [checkedColumnsToShow, setCheckedColumnsToShow] = useState(checkedClumns)
  const [checkedSections, setCheckedSections] = useState(initialCheckedSections)

  const filteredColumns = checkedColumnsToShow.filter(c => c.id !=='SESSION_ID' && c.id !== 'appname' && c.id !=='scorecard')

  var key = inputValues.apikey ? `apikey=${inputValues.apikey}` : ''
  var app = inputValues.appname ? `&appname=${inputValues.appname}` : ''
  var scorecard = inputValues.scorecard ? `&scorecard=${inputValues.scorecard}` : ''
  var format = selectedFormat ? `&format=${selectedFormat}` : ''
  const checkedIDs = filteredColumns.map(s => s.id)
  var checked = filteredColumns.length > 0 ? `&checked=${checkedIDs}` : ''
  var dataKey = dataKeyItems.length > 0 ? `&data_key=${dataKeyItems}` : ''

  history.replaceState({}, 'apiv2/', `?${key}${app}${scorecard}${checked}${dataKey}${format}`)
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
        setCheckedColumnsToShow={setCheckedColumnsToShow}
        checkedColumnsToShow={checkedColumnsToShow}
        setSelectedFormat={setSelectedFormat}
        setDataKeyItems={setDataKeyItems}
        dataKeyItems={dataKeyItems}
      />
    </div>
  </section>
}

export default PageContent
