import React from 'react'

import logo from '../../public/cc-logo.png'
import logoBig from '../../public/cc-logo1.png'

const Header = () => {
  return <header className="masthead mb-auto container py-5 px-5">
    <div className="row header-row">
      <div className="col-md-5 small-logo-row">
        <div className="masthead-brand">
          <div className="nav-brand">
            <a href="#">
              <img src={logo} alt="Call Criteria" />
              <h1><span>Web Service Interface Document</span></h1>
            </a>    
          </div>
        </div>
      </div>
      <img src={logoBig} alt="Call Criteria" />    
    </div>
  </header>
} 

export default Header