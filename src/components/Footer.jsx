import React from 'react'

export default function Footer({name,quote}) {
  return (
    <div>
      <div className="main mb-1 bg-danger">
      <div className="container">
      <div className="row me-auto">
       
        <div className="col-md-9 col-11 text-center">
        <p className='fs-1'>this is footer sectoin </p>
          <h1 className="pdbName fw-bolder">{name}</h1>
          <p>{quote}</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
