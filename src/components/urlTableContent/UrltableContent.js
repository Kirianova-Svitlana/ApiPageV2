import React, {Fragment} from 'react'

import UrlTable from './UrlTable'
import logoBig from '../../../public/cc-logo1.png'

const UrltableContent = ({inputValues}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <img src={logoBig} alt="Call Criteria" />
          <h2><span>Web Service Interface Document</span></h2>  
        </div>
        <div className="col-md-6">
          <p className="ver-release-dates float-right text-right">
            6/25/2015 <br />
            rev 2 12/10/2015 <br />
            rev 3 11/30/2016 <br />
            rev 4 07/10/2017
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p>Once we have created an account for you, you will get a scorecards ID, an appname (name of your application within Call Criteria) and an API key. To POST data to us, you would add the appname and API key to the URL in this format:</p>    
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
      </div>
      <UrlTable inputValues={inputValues}/>
      <div className="row">
        <div className="col-md-12">
          <p>Use the provided, via email, values to populate the data fields , and . The Scorecard Description is there to show which scorecard the ID belongs to.</p>    
          <p>The web service for Call Criteria is used to send records individually to our system without the need to upload data and/or audio files or referential data.</p>
        </div>
      </div>
    </Fragment>
  )
} 

export default UrltableContent