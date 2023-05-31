import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import "./Login.css"

const Login = () => {
     let buttonTag= useRef(null)
     let[terms,stTerms] =useState(false)
   let  accptHandler=(event)=>{
    stTerms(event.target.checked)
      
    if(event.target.checked=== true){
    buttonTag.current.disabled=false
    } else
    {
        buttonTag.current.disabled=true
    }
 }
  return (
    <>
    <div className='login-box'>
      <h2>login</h2>
      <form action="">
        <div className='user-box'>
       <input type="text" name='' required="" />
        <label > UserName</label>
        </div>
        <div className='user-box'>
       <input type="password" name='' required="" />
        <label > Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          submit
        </a>
      </form>
       </div>
    </>
  )
}

export default Login