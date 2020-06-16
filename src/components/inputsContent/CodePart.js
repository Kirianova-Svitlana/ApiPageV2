import React from 'react'

const CodePart = ({sections, inputValues}) => {
  const checkedSections = []
  const jsonObject = {
    appname: inputValues.appName,
    SESSION_ID: 'String content',
    scorecard: inputValues.scorecardId 
  }
  sections.map(section => {
    const checkedInSection = section.sectionFilds.filter(sectionRow => sectionRow.isChecked)
    if (checkedInSection.length !== 0) {
      const option = {
        name: section.sectionName,
        options: checkedInSection
      }
      checkedSections.push(option)
    }
    checkedInSection.forEach(s => {
      jsonObject[s.id] = 'String content'
    })
    return false
  })
  return (
    <div className="row output-area mb-5">
      <div className="col-md-12">
        <div className="output">
          {
            inputValues.format === 'XML' ?
            (
              <pre>
                <div>{`<CallCriteriaAPI.AddRecordData xmlns=&#x22;http://schemas.datacontract.org/2004/07/>`}</div>
                <div>{`<!--Call Criteria will give data after sign up -->`}</div>
                <div>{`<appname>${inputValues.appName}</appname>`}</div>
                <div>{`<SESSION_ID>String content</SESSION_ID>`}</div>
                <div>{`<scorecard>${inputValues.scorecardId}</scorecard>`}</div>
                {
                  checkedSections.map((section, index) => {
                    return <div key={section.name + '-' + index}>
                      <div>{`<!-- ${section.name} detail -->`}</div>
                      {
                        section.options.map((option, key) => {
                          return <div key={'option-' + option.id}>
                            {`<${option.id}>String content<${option.id}>`}
                          </div>
                        })
                      }
                    </div>
                  })
                }
                <div>{`</CallCriteriaAPI.AddRecordData>`}</div>
              </pre>
            ) : 
            (
              <pre>
                {JSON.stringify(jsonObject)}
              </pre>
            )
          }
        </div>
      </div>
    </div>
  )
} 

export default CodePart