import React from 'react'
import { useRef } from 'react'

export default function Useref() {
    let fname,lname,fullName,myclass=useRef();
    let myData=useRef();
    let showallData=useRef();
    const loadData=async()=>{
        const Deta=await fetch('https://dummyjson.com/products/1');
        myData.current=await Deta.json();
    }
    const showData=()=>{
      showallData.current.innerHTML=JSON.stringify(myData.current)
    }
    const rashedul=()=>{
       let fastName= fname.value;  
       let lastName= lname.value;  
       fullName.innerHTML=`${fastName} ${lastName}`;
       myclass.classList.remove('text-danger')
       myclass.classList.add('text-primary')
    }
  return (
    <div>
        <input type="text" placeholder='this is first name' ref={(a)=>fname=a} />
        <input type="text" placeholder='this is last name' ref={(b)=>lname=b}/>
        <p ref={(c)=>fullName=c}></p>
        <p className='text-danger' ref={(d)=>myclass=d}>this is Rashedul Islam</p>
        <p ref={showallData}></p>
      <button onClick={rashedul}>click</button>
      <button onClick={loadData}>click</button>
      <button onClick={showData}>showData</button>
    </div>
  )
}
