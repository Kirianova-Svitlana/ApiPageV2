import React, {Fragment} from 'react'

import UrlTable from './UrlTable'
import logoBig from '../../../public/cc-logo1.png'

const UrltableContent = ({inputValues, setInputValues, sections, checkedSections}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <h2><span>Web Service Interface Document</span></h2>  
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
      <UrlTable
        sections={sections}
        inputValues={inputValues}
        setInputValues={setInputValues}
        checkedSections={checkedSections}/>
      <div className="row">
        <div className="col-md-12">
          <p>The web service for Call Criteria is used to send records individually to our system without the need to upload data and/or audio files or referential data.</p>
        </div>
      </div>
    </Fragment>
  )
} 

export default UrltableContent