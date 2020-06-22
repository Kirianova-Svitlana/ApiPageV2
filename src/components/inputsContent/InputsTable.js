import React from 'react'

const InputsTable = ({inputValues, setInputValues, user}) => {
  
  const handleChange = (e, key) => {
    setInputValues({
      ...inputValues, 
      [key]: e.target.value,
    })
  }
  const apikeys = []
  let scorecards
  let apps
  if (user) {
    apps = user.session.apps
    const selectedApp = user.session.apps.find(a => a.appname === inputValues.appname)
    if (selectedApp) {
      scorecards = selectedApp.scorecards
    }
  }

  return (
    <div className="row blue-back api-box-form py-2" >
      <div className="col-md-3">
        <div className="form-group">
          <label>API KEY</label>
          <input
            type="text"
            className="form-control"
            value={inputValues.apikey || ''}
            onChange={(e) => handleChange(e, 'apikey')}
          />
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
              value={inputValues.appname || ''}
              onChange={(e) => handleChange(e, 'appname')}
            /> : 
            <select
              id="appname"
              className="form-control"
              name="appname"
              value={inputValues.appname}
              onChange={(e) => handleChange(e, 'appname')}
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
          <label>SCORECARD ID</label>
          {
            !user || !scorecards || scorecards.length === 0 ?
            <input
              type="text"
              className="form-control"
              value={inputValues.scorecard || ''}
              onChange={(e) => handleChange(e, 'scorecard')}
            /> : 
            <select
              id="scorecard"
              className="form-control"
              name="scorecard"
              value={inputValues.scorecard}
              onChange={(e) => handleChange(e, 'scorecard')}
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