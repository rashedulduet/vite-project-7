import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.jsx'
import Menu from './components/Menu.jsx'

import Footer from './components/Footer.jsx'
import Assignment7 from './components/Assignment7.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar name="বাংলাদেশ বিদ্যুৎ উন্নয়ন বোর্ড" address="ঘোড়াশার প্রশিক্ষণ কেন্দ্র"/>   
    <Menu/>
    <Assignment7/>
   
    <Footer name="All right resurved by" quote="ঘোড়াশার প্রশিক্ষণ কেন্দ্র" />
    </React.StrictMode>,
)
