import React, { useState } from 'react'

export default function Assignment7() {
  const [inputData, setInputdata]=useState('');
  const [items, setItem]=useState([]);
  const [complete, setComplete]=useState(true);

  const addJob=()=>{
    if(inputData!==''){
    setItem([...items,inputData]);
    setInputdata('');}
    else{
      alert('please give a job name')
    }
  }
  const deletedItem=(id)=>{
    const updatedArray=items.filter((elm, ind)=>{
      return ind!=id
    })
    setItem(updatedArray)
  }
  const deleted=()=>{
    setItem([])
  }
  
  return (
    <div className='container text-center'>
      <h1>Add your Job Here</h1>
      <div className="addItems text-center">
        <input type="text" placeholder='add Items...' 
        value={inputData} onChange={(e)=>setInputdata(e.target.value)}/>
        <button className='btn btn-primary' onClick={addJob}>Add job</button>
      </div>
      <div className="showItem allItem">
        {
          items.map((elm, index)=>{
              return(
              <div className="eachItem" key={index}>
              <h3>{elm} 
              <button className='btn btn-primary ms-2' onClick={()=>deletedItem(index)}>Delete</button>
              
              </h3>
              
            </div>)
          })
        }
       </div>

       <button className='btn btn-primary' onClick={deleted}>Delete all work</button>
      
    </div>
  )
}
