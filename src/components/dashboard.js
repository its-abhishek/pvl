import React from 'react'
import './dashboard.css'
import { RxButton } from 'react-icons/rx'

const dashboard = () => {
  return (
    
    <>
        <div className='sidebar'>
          <ul>
            <h3>My reports</h3>
            <ul className='menu'>
              <li className='submenu'><RxButton/> My Dashboard</li>
              <li className='submenu'><RxButton/> Department</li>
              <li className='submenu'><RxButton/> Skillwise Data</li>
              <li className='submenu'><RxButton/> View Schedule</li>
            </ul>
          </ul>
          <ul>
            <h3>My reports</h3>
            <ul className='menu'>
              <li className='submenu'><RxButton/> Explore Skills</li>
              <li className='submenu'><RxButton/> Placement Tests</li>
              <li className='submenu'><RxButton/> Pre Achevements</li>
            </ul>
          </ul>
          <ul>
            <h3>My reports</h3>
            <ul className='menu'>
              <li className='submenu'><RxButton/> Assign Skills</li>
              <li className='submenu'><RxButton/> Manage Students</li>
              <li className='submenu'><RxButton/> Report</li>
            </ul>
          </ul>
          <div>
            <ul className='name'>
              <li><img src="https://picsum.photos/200/300" className='profile' /></li>
              <li><h4>Abhishek Honnapure</h4><p style={{paddingTop:"-2rem"}}>Pes University</p></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default dashboard
