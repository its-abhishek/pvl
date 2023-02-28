import React from 'react'
import './cards.css'
import {RxAvatar} from 'react-icons/rx'
import {BsFillShareFill} from 'react-icons/bs'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {IoHardwareChipSharp} from 'react-icons/io5'
import {DiMagento} from 'react-icons/di'

const cards = () => {
  return (
    <>
        <div>
            <ul className='cards'>
                <li>
                  <div className='card' style={{background:"red",color:"white",paddingLeft:"1rem"}}>
                    <h3>Students<span style={{paddingLeft:"13rem",}}><RxAvatar/></span></h3>
                    <h1>26</h1>
                  </div>
                </li>
                <li>
                  <div className='card' style={{background:"blue",color:"white",paddingLeft:"1rem"}}>
                  <h3>Students<span style={{paddingLeft:"13rem",}}><RxAvatar/></span></h3>
                    <h1>5</h1>
                  </div>
                </li>
                <li>
                  <div className='card' style={{background:"green",color:"white",paddingLeft:"1rem"}}>
                  <h3>Students<span style={{paddingLeft:"13rem",}}><RxAvatar/></span></h3>
                    <h1>0</h1>
                  </div>
                </li>
            </ul>
        </div>
        <div className='card' id='share'>
              <p> Share with Freshers <BsFillShareFill/></p>
        </div>
        <div className='text' >
          <p>Upcoming Placement Opportunity</p>
        </div>
        <div>
          <ul className='big-card'>
            <li>
              <h3 style={{color:"blue"}}>Placement Tests</h3>
              <h4 style={{color:"gray"}}>No Placement Tests scheduled yet</h4>
              <div className='big-cards'>
                <h4 style={{color:"Red",marginLeft:"1rem"}}>Placement Exams History<BsThreeDotsVertical style={{color:"Red",marginLeft:"27rem",overflow:"hidden"}}/></h4>
                <div className='circle1'>
                  <div className='circle2'>
                    <h2>3.8%</h2>
                  </div>
                </div>
                <div>
                  <ul className='tests'>
                    <li>
                      <h4 style={{color:"blue"}}><IoHardwareChipSharp/> Total Students Atempted</h4>
                      <div style={{width:"10rem",height:"2rem",background:"green",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>86</h3></div>
                    </li>
                    <li>
                      <h4 style={{color:"blue"}}>Total Students Cleared</h4>
                      <div style={{width:"10rem",height:"2rem",background:"green",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>8</h3></div>
                    </li>
                  </ul>
                </div>
                <p style={{color:"gray",textAlign:"center",fontSize:"1rem"}}><DiMagento/> Graphic design, Lorem ipsum is a placeholder tex</p>
                <div>
                  <ul className='small'>
                    <li>
                      <div style={{width:"5rem",height:"2rem",background:"purple",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>58</h3></div>
                    </li>
                    <li>
                      <div style={{width:"5rem",height:"2rem",background:"purple",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>1</h3></div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <h3 style={{color:"blue"}}>Pre-assesments</h3>
              <h4 style={{color:"gray"}}>No Pre Assesments scheduled yet</h4>
              <div className='big-cards'>
                <h4 style={{color:"Red",marginLeft:"1rem"}}>Pre-assesments Report<BsThreeDotsVertical style={{color:"Red",marginLeft:"27rem",overflow:"hidden"}}/></h4>
                  <div className='circle1'>
                    <div className='circle2'>
                      <h2>30.8%</h2>
                    </div>
                  </div>
                <div>
                  <ul className='tests'>
                    <li>
                      <h4 style={{color:"blue"}}><IoHardwareChipSharp/> Total Students Atempted</h4>
                      <div style={{width:"10rem",height:"2rem",background:"green",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>86</h3></div>
                    </li>
                    <li>
                      <h4 style={{color:"blue"}}>Total Students Cleared</h4>
                      <div style={{width:"10rem",height:"2rem",background:"green",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>8</h3></div>
                    </li>
                  </ul>
                </div>
                <p style={{color:"gray",textAlign:"center",fontSize:"1rem"}}><DiMagento/> Graphic design, Lorem ipsum is a placeholder tex</p>
                <div>
                  <ul className='small'>
                    <li>
                      <div style={{width:"5rem",height:"2rem",background:"purple",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>358</h3></div>
                    </li>
                    <li>
                      <div style={{width:"5rem",height:"2rem",background:"purple",borderRadius:"2rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}><h3>88</h3></div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </>
  )
}

export default cards

