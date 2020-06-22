import React, {Fragment} from 'react'

const UrlTable = ({inputValues, setInputValues, sections, checkedSections}) => {
  const handleChange = (e, key) => {
    setInputValues({
      ...inputValues, 
      [key]: e.target.value,
    })
  }

  let urlPost = ''
  checkedSections.map(s => {
    if (s.id !== 'apikey' && s.id !== 'scorecard' && s.id !== 'appname' && s.id !== 'audios' && s.id !== 'OtherDataItems') {
      urlPost = urlPost +  '&' + s.id + '=' + s.value
    }
  })
  return (
    <Fragment>
      <div className="row method-table py-3">
        <div className="col-md-3">
          <h4>URL</h4>
        </div>
        <div className="col-md-3">
          <h4>METHOD</h4>
        </div>
        <div className="col-md-3">
          <h4>DESCRIPTION</h4>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <select
              id="metod-type"
              className="form-control"
              name="metodType"
              value={inputValues.metodType}
              onChange={(e) => handleChange(e, 'metodType')}
            >
              <option>Add Record</option>
              <option>Post Record</option>
            </select>
          </div>
        </div>
    </div>
    <div className="row method-output">
      <div className="col-md-12 py-3">
        <p>
          {
            inputValues.metodType === 'Add Record' ?
            `http://app.callcriteria.com/callcriteriaAPI.svc/${inputValues.format}/AddRecord?apikey=${inputValues.apikey}&appname=${inputValues.appname}` :
            `https://app.callcriteria.com/CallCriteriaAPI.svc/${inputValues.format}/PostRecord?apikey=${inputValues.apikey}&scorecard=${inputValues.scorecard}&appname=${inputValues.appname}${urlPost}`
          }
        </p>
      </div>
    </div>
    </Fragment>
  )
} 

export default UrlTable