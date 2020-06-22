import React from 'react'

const CodePart = ({checkedSections, inputValues}) => {
  const jsonObj = {}
  checkedSections.map(s => {
    if (s.id === 'audios') {
      const values = []
      s.value.map(v => {
        const val = {}
        val[v.id] = v.value
        values.push(val)
      })
      jsonObj[s.id] = values
    } else {
      jsonObj[s.id] = s.value
    }
  })
  const string = JSON.stringify(jsonObj)
  return (
    <div className="row output-area mb-5">
      <div className="col-md-12">
        <div className="output">
          {
            inputValues.format === 'XML' ?
            (
              <div>
                <pre>{`<CallCriteriaAPI.AddRecordData xmlns="http://schemas.datacontract.org/2004/07/">`}</pre>
                {
                  checkedSections.map((section, index) => {
                    return <div key={section.id}>
                      {
                        section.id === 'audios' ?
                        <pre>
                          {`    <audios>`}<br/>
                          {`        <CallCriteriaAPI.AudioFile>`}<br/>
                          {
                            section.value.map((v, i) => {
                              return <pre key={v.id}>{`             <${v.id}>${v.value}</${v.id}>`}</pre>
                            })
                          }
                          {`        <CallCriteriaAPI.AudioFile>`}<br/>
                          {`    <audios>`}
                        </pre> :
                        section.id === 'OtherDataItems' ?
                        <pre>
                          {`    <OtherDataItems>`}<br/>
                          {`        <CallCriteriaAPI.OtherData>`}<br />
                          {
                            section.value.map((v, i) => {
                              return <pre key={v.id}>{`             <${v.id}>${v.value}</${v.id}>`}</pre>
                            })
                          }
                          {`         </CallCriteriaAPI.OtherData>`}<br />
                          {`    <OtherDataItems>`}
                        </pre> :
                        <pre>     {`<${section.id}>${section.value}</${section.id}>`}</pre>
                      }
                    </div>
                  })                     
                }
                <pre>{`</CallCriteriaAPI.AddRecordData>`}</pre>
              </div>
            ) : 
            (
              <div>
                <pre>
                 {`{`}<br/>
                      {
                        checkedSections.map(section => {
                          return <pre key={section.id}>
                            {
                              section.id === 'audios' ?
                              <pre>
                                {`  "audios" : [{`}<br/>
                                {
                                  section.value.map((v, i) => {
                                    return <pre key={v.id}>         {`"${v.id}": "${v.value}",`}</pre>
                                  })
                                }
                                {`}]`}<br/>
                              </pre> :
                              section.id === 'OtherDataItems' ?
                              <pre>
                                {`  "OtherDataItems" : [{`}<br/>
                                {
                                  section.value.map((v, i) => {
                                    return <pre key={v.id}>         {`"${v.id}": "${v.value}",`}</pre>
                                  })
                                }
                                {`}]`}<br/>
                              </pre> :
                              <pre>    {`"${section.id}": "${section.value}",`}</pre>
                            }
                          </pre>
                        })
                      }
                 {`}`}
                </pre>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
} 

export default CodePart