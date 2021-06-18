import React from 'react'

const CodePart = ({checkedSections, inputValues, checkedColumnsToShow, dataKeyItems}) => {
    console.log("dataKeyItems------------>", dataKeyItems)
  checkedSections.map(s => {
    if (s.id === 'appname') {
      s.value = inputValues.appname ? inputValues.appname : 'String content'
    }
    if (s.id === 'scorecard') {
      s.value = inputValues.scorecard ? inputValues.scorecard : 'String content'
    }
    return s
  })
  const columns = checkedColumnsToShow

  checkedSections.map(s => {
    const inCol = columns.find(c => c.id === s.id)
    if (!inCol) {
        columns.push(s)
    }
  })
  return (
    <div className="row output-area mb-5">
      <div className="col-md-12">
        <div className="output">
          {
            inputValues.metodType === 'Post Record' && inputValues.format === 'XML' ?
            (
              <div>
                <pre>{`<CallCriteriaAPI.AddRecordData xmlns="https://schemas.datacontract.org/2004/07/">`}</pre>
                {
                  columns.map((section, index) => {
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
                            dataKeyItems.map((item, i) => {
                                return <pre key={'key-item-' + i}>{`             <key>${item}</key>`}</pre>
                            })
                          }
                          {
                            section.value.map((v, i) => {
                              return <pre key={v.id}>{`             <${v.id}>${v.value}</${v.id}>`}</pre>
                            })
                          }
                          {`    </CallCriteriaAPI.OtherData>`}<br />
                          {`<OtherDataItems>`}
                        </pre> :
                        <pre>     {`<${section.id}>${section.value}</${section.id}>`}</pre>
                      }
                    </div>
                  })
                }
                <pre>{`</CallCriteriaAPI.AddRecordData>`}</pre>
              </div>
            ) : inputValues.metodType === 'Post Record' && inputValues.format === 'JSON' ?
            (
              <div>
                <pre>
                 {`{`}<br/>
                      {
                        columns.map(section => {
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
                                    dataKeyItems.map((item, i) => {
                                    return <pre key={'od-' + i}>         {`"key": "${item}",`}</pre>
                                  })
                                }
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
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default CodePart
