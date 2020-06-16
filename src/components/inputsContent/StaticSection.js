import React, {Fragment} from 'react'

const StaticSection = () => {
  return (
    <Fragment>
      <div className="row params">
        <div className="col-md-1">
          <div className="form-control">
            <input type="checkbox" id="checkbox-4" name="appname" checked disabled />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-control">
            <label htmlFor="checkbox-4">appname</label>
          </div>
        </div>
        <div className="col-md-8">
            <p>Appname is provided to you when you signed up with Call Criteria. 
  Every post must have an Appname associated with it.</p>
        </div>
      </div> 
       <div className="row params">
        <div className="col-md-1">
          <div className="form-control">
            <input type="checkbox" id="checkbox-5" name="session-id" checked disabled />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-control">
            <label htmlFor="checkbox-5">SESSION_ID</label>
          </div>
        </div>
        <div className="col-md-8">
          <p>The audio files will get renamed to the records ID.mp3</p>
        </div>
      </div> 
      <div className="row params">
        <div className="col-md-1">
          <div className="form-control">
           <input type="checkbox" id="checkbox-6" name="scorecard" checked disabled />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-control">
            <label htmlFor="checkbox-6">scorecard</label>
         </div>
        </div>
        <div className="col-md-8">
          <p>Use the integer provided to assign this record directly to a specific scorecard</p>
        </div>
      </div> 
    </Fragment>
  )
} 

export default StaticSection