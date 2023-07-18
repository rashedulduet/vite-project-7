import { faParagraph } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

export default function Content() {
  const [current, setcurrent]=useState('please write here....')
 const handleChange=(e)=>{
  setcurrent(e.target.value)
  }
  const showpara=()=>{
     document.querySelector('.insidepara').innerHTML=`<p>${current}</p>`
  }
  return (
    <div>
       <div className="container">
        <div className="row mt-3">
            <div className="col-md-6 col-11">
               <input type="text" name="textarea" id="textarea"  
               value={current} onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="col-md-6 col-11">
                <button onClick={showpara}>click here</button>
            </div>
            <p>{current}</p>
           <div className='insidepara'></div>
        </div>
       </div>
    </div>
  )
}
