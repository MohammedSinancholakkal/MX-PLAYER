import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import Footer from '../Components/Footer'

function Home() {

  const [uploadVideoResponses,setUploadVideoResponses]=useState({})
  const [dropVideoResponses,setDropVideoResponses]=useState({})

  return (
    <>
     <div className="container mt-5 d-flex justify-content-between mb-3">
      <div className="add-videos">
       <Add setUploadVideoResponses={setUploadVideoResponses}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:'none'}} className='fw-bolder fs-2 
      text-dark '>Watch-History <i class="fa-solid fa-clock-rotate-left"></i></Link>
      </div>

      <div className="container-fluid mt-5 w-100 row">
        <div className="col-lg-9 all-videos">
        <View uploadVideoResponses={uploadVideoResponses} setDropVideoResponses={setDropVideoResponses}/>
        </div>
        <div className="col-lg-3 all-Category">
        <Category dropVideoResponses={dropVideoResponses}/>
        </div>
      </div>
      <Footer/>
     
    </>
  )
}

export default Home
