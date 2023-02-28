import React from 'react'
import './dashboard.css'

const dashboard = () => {
  return (
    
    <>
        <div className='sidebar'>
          <ul>
            <h3>My reports</h3>
            <ul className='menu'>
              <li className='submenu'>My Dashboard</li>
              <li className='submenu'>Department</li>
              <li className='submenu'>Skillwise Data</li>
              <li className='submenu'>View Schedule</li>
            </ul>
          </ul>
          <ul>
            <h3>My reports</h3>
            <ul className='menu'>
              <li className='submenu'>Explore Skills</li>
              <li className='submenu'>Placement Tests</li>
              <li className='submenu'>Pre Achevements</li>
            </ul>
          </ul>
          <ul>
            <h3>My reports</h3>
            <ul className='menu'>
              <li className='submenu'>Assign Skills</li>
              <li className='submenu'>Manage Students</li>
              <li className='submenu'>Report</li>
            </ul>
          </ul>
          <div>
            <ul className='name'>
              <li><img src="https://picsum.photos/200/300" className='profile' /></li>
              <li><h4>Abhishek Honnapure</h4>
              <p>Pes University</p></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default dashboard
