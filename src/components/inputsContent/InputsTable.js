import React from 'react'

const InputsTable = ({inputValues, setInputValues, user}) => {
  
  const handleChange = (e, key) => {
    setInputValues({
      ...inputValues, 
      [key]: e.target.value,
    })
  }
  const apiKeys = []
  let scorecards
  let apps
  if (user) {
    apps = user.session.apps
    scorecards = user.session.scorecards
  }

  console.log("apps------->", apps)
  console.log("scorecards------->", scorecards)
  return (
    <div className="row blue-back api-box-form py-2" >
      <div className="col-md-3">
        <div className="form-group">
          <label>API KEY</label>
          <input
            type="text"
            className="form-control"
            value={inputValues.apiKey || ''}
            onChange={(e) => handleChange(e, 'apiKey')}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <label>SCORECARD ID</label>
          {
            !user || !scorecards || scorecards.length === 0 ?
            <input
              type="text"
              className="form-control"
              value={inputValues.scorecardId || ''}
              onChange={(e) => handleChange(e, 'scorecardId')}
            /> : 
            <select
              id="scorecardId"
              className="form-control"
              name="scorecardId"
              value={inputValues.scorecardId}
              onChange={(e) => handleChange(e, 'scorecardId')}
            >
              <option>Select</option>
              {
                scorecards.map(s => {
                  return <option value={s.scorecard}>{s.scorcard_name}</option>
                })
              }
            </select>
          }
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <label>APP NAME</label>
          {
            !user || !apps || apps.length === 0 ?
            <input
              type="text"
              className="form-control"
              value={inputValues.appName || ''}
              onChange={(e) => handleChange(e, 'appName')}
            /> : 
            <select
              id="appName"
              className="form-control"
              name="appName"
              value={inputValues.appName}
              onChange={(e) => handleChange(e, 'appName')}
            >
              <option>Select</option>
              {
                apps.map(app => {
                  return <option>{app.appname}</option>
                })
              }
            </select>
          }
        </div>
      </div>
        <div className="col-md-3">
          <div className="form-group">
            <select
              id="format"
              className="form-control"
              name="format"
              value={inputValues.format}
              onChange={(e) => handleChange(e, 'format')}
            >
              <option>XML</option>
              <option>JSON</option>
            </select>
          </div>
        </div>
    </div>
  )
} 

export default InputsTable