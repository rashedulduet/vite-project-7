import { Dropdown } from 'bootstrap'
import React, { useState } from 'react'

export default function Menu() {
  const [isactive, setisactive]=useState(true)
  const [isactive1, setisactive1]=useState(true)
  const [isactive2, setisactive2]=useState(true)
  const [isactive3, setisactive3]=useState(true)
  const [isactive4, setisactive4]=useState(true)
 const dropdownMenu=(id)=>{ 
  console.log(id)  
   setisactive(currentvalue=>!currentvalue)
      }
      const dropdownMenu1=()=>{   
        setisactive1(currentvalue=>!currentvalue)
           }
           const dropdownMenu2=()=>{   
            setisactive2(currentvalue=>!currentvalue)
               }
               const dropdownMenu3=()=>{   
                setisactive3(currentvalue=>!currentvalue)
                   }
                   const dropdownMenu4=()=>{   
                    setisactive4(currentvalue=>!currentvalue)
                       }
     const newfunction=(event)=>{
        if(event===3){
          console.log('this is id')
        }
        else{
          console.log('this is not id')
        }
      }
  return (
   
    <nav className="navbar navbar-expand-lg shadow mymenu"> 
  <div className="container">    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ulOfMenu">
        <li className="nav-item">
        <a className="nav-link" href="#" >
        জিটিসি সম্পর্কিত
          </a>
       </li>
        <li className="nav-item" onClick={(id)=>dropdownMenu(3)} id="3" key='3'>
        <a className= "nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
        পরিকল্পনা ও উন্নয়ন
          </a>
          <ul className={isactive? "dropdown-menu":"dropdown-menu show newmenu"}>
            <li><a className="dropdown-item"  href="#">প্রশিক্ষণ পরিকল্পনা</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">হোষ্টেল পরিকল্পনা ও উন্নয়ন</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">সেফটি পরিকল্পনা</a></li> 
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">পানির ফোয়ারা</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">অটোমেটিক গেইট</a></li>
          </ul>
        </li>
        <li className="nav-item" onClick={()=>dropdownMenu1()}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          আর্থিক
          </a>
          <ul className={isactive1? "dropdown-menu":"dropdown-menu show newmenu"}>
            <li><a className="dropdown-item" href="#">স্টোর খাত </a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">আসবাবপত্র ক্রয় খাত</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">মেশিনারিজ এন্ড ইকুইপমেন্ট</a></li>
          </ul>
        </li>
        <li className="nav-item" onClick={()=>dropdownMenu2()}>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        প্রশাসন
          </a>
          <ul className={isactive2? "dropdown-menu":"dropdown-menu show newmenu"}>
            <li><a className="dropdown-item" href="#">সাধারণ শাখা</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">টেকনিক্যাল শাখা</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">নিরাপত্তা শাখা</a></li>
          </ul>
        </li>
        <li className="nav-item" onClick={()=>dropdownMenu3()}>
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        দরপত্র
          </a>
          <ul className={isactive3? "dropdown-menu":"dropdown-menu show newmenu"}>
            <li><a className="dropdown-item" href="#">আর এফ কিউ</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">ওটিএম</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">ডিপিএম</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown" onClick={()=>dropdownMenu4()}>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          খবর ও ঘটনা
          </a>
          <ul className={isactive4? "dropdown-menu":"dropdown-menu show newmenu"}>
            <li><a className="dropdown-item" href="#">সাধারণ নোটিশ</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">জরুরি নোটিশ</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">প্রশিক্ষণ সংক্রান্তক</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">অন্যান</a></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>

</nav>

    )
}
