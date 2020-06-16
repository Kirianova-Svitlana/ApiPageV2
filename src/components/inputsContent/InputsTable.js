import React from 'react'

const InputsTable = ({inputValues, setInputValues}) => {
  
  const handleChange = (e, key) => {
    setInputValues({
      ...inputValues, 
      [key]: e.target.value,
    })
  }

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
          <input
            type="text"
            className="form-control"
            value={inputValues.scorecardId || ''}
            onChange={(e) => handleChange(e, 'scorecardId')}
          />
        </div>
      </div>
      <div className="col-md-3">
        <div className="form-group">
          <label>APP NAME</label>
          <input
            type="text"
            className="form-control"
            value={inputValues.appName || ''}
            onChange={(e) => handleChange(e, 'appName')}
          />
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