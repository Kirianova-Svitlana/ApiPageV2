import React, {Fragment} from 'react'

import InputsTable from './InputsTable'
import StaticSection from './StaticSection'
import CollapsedSection from './CollapsedSection'
import CodePart from './CodePart'

const InputsContent = ({
  sections,
  setSections,
  inputValues,
  setInputValues,
  user,
  checkedSections,
  setCheckedSections,
  initialCheckedSections,
}) => {
  return (
    <Fragment>
      <div className="row py-3" id="inputs" >
        <div className="col-md-12">
          <h2>Inputs</h2>
          <h3>AddRecord Fields</h3>
          <p>The following fields are available, but not required, to post data to. <br />

              Feel free to check the items that you would like to add and then the sample post will populate below.<br />
              
              If the data you are posting does not have the same fields, but you would like to use an existing field feel free to map to that field using Other Data Items
          </p>
        </div>
      </div>
      <InputsTable
        user={user}
        inputValues={inputValues}
        setInputValues={setInputValues}/>
      <StaticSection />
      <div className="row">
        <div className="accordion" id="accordionParams">
          {
            sections.map((section, index) => {
              return <CollapsedSection
                section={section}
                sections={sections}
                key={section.sectionName + '-' + index}
                setSections={setSections}
                setCheckedSections={setCheckedSections}
                initialCheckedSections={initialCheckedSections}
              />
            })
          }
        </div>
      </div>
      <CodePart inputValues={inputValues} checkedSections={checkedSections}/>
    </Fragment>
  )
} 

export default InputsContent