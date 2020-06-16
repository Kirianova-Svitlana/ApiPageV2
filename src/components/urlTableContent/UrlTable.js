import React, {Fragment} from 'react'

const UrlTable = ({inputValues}) => {
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
    </div>
    
    <div className="row method-output">
      <div className="col-md-12 py-3">
        <p>
          {`app.callcriteria.com/API/?apikey=${inputValues.apiKey}&scorecard=${inputValues.scorecardId}&appName=${inputValues.appName}`}   
        </p>
      </div>
    </div>
    </Fragment>
  )
} 

export default UrlTable