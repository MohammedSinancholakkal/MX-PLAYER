import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <>
    <Row className="mt-5 align-items-center justify-content-between w-100" >
      <Col></Col>
      <Col lg={5}>
      <h1 style={{color:'black',fontSize:'40px'}} className='fw-bolder'>Welcome to <span className='text-primary'>Mx Player</span> </h1>
      <p className='fw-bolder'>Experience the ultimate video playback solution with MX Player, the most popular video player app in the world. With its powerful features and sleek design, MX Player is the perfect choice for watching your favorite videos, movies, and TV shows.
      </p>
     <Link to={'/home'}> <Button  className='btn btn-primary rounded shadow fw-bolder'>Get Started</Button></Link>
      </Col>

      <Col lg={5}>
      <img className='rounded shadow' src="https://cdn.dribbble.com/users/422171/screenshots/5353624/video_player.gif" width={'100%'} alt="" />
      </Col>

      <Col></Col>

    </Row>

    {/* card section */}
    <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
      <h2 className='text-center mt-5 fw-bolder text-primary' style={{color:''}}>Features</h2>
      <div className='card mb-5 mt-4 d-flex flex-row justify-content-between align-items-center w-100 '>

      <Card style={{ width: '350px',  border:'none'}} className='rounded shadow'>
      <Card.Img variant="top" height={"300px"}  src="https://www.icegif.com/wp-content/uploads/2024/01/icegif-109.gif" />
      <Card.Body>
        <Card.Title className='text-center text-primary fw-bolder'>Managing Videos</Card.Title>
        <Card.Text className='fw-bolder' >
        Allow users to upload videos from their devices or import them from other platforms like YouTube, Vimeo, or Facebook.

        
        </Card.Text>
       
      </Card.Body>
    </Card>
      <Card style={{width: '350px' }}>
      <Card.Img variant="top" height={"300px"}  src="https://cdn.dribbble.com/users/1242979/screenshots/7099165/music.gif" />
      <Card.Body>
        <Card.Title className='text-center text-primary fw-bolder'>Catagorize Video</Card.Title>
        <Card.Text className='fw-bolder' >
        Explosive action sequences, thrilling stunts, and heroic adventures.Support subtitle and closed caption files, making videos more accessible.

        </Card.Text>
        
      </Card.Body>
    </Card>
      <Card style={{width: '350px'}}>
      <Card.Img variant="top" height={"300px"} src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif" />
      
      <Card.Body>
        <Card.Title className='text-center text-primary fw-bolder'>Watch History</Card.Title>
        <Card.Text className='fw-bolder' >
        Display a list of videos that the user has recently watched, including the title, thumbnail, and timestamp of when they last watched it.

        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
    </div>


    {/* detail section */}
    <div style={{height:'380px'}} className="container border border-3 border-primary d-flex align-items-center justify-content-center mt-5  p-2 mb-5  rounded">
      <div className="col-lg-6">
        <h4 className='text-primary fw-bolder '>Simple,Powerfull, & Fast</h4>
        <h6 className='m-2'><span className='text-primary fw-bolder'>Play Everything</span><span/>:  Allow users to autoplay all videos in a playlist, category, or search results, one after the other.
        Provide an option for users to enable continuous playback, where the next video in the queue starts playing automatically after the current one finishes.

        .</h6>

        <h6 className='m-2'><span className='text-primary fw-bolder'>Catagorize Videos</span><span/>: 
        - Romance: Heartwarming love stories, romantic getaways, and swoon-worthy moments.
- Thriller: Suspenseful mysteries, mind-bending twists, and heart-pumping suspense.


</h6>

        <h6 className='m-2'><span className='text-primary fw-bolder'>Watch History</span><span/>:  Use watch history to provide personalized video recommendations to users, based on their viewing habits and interests.
        Make it easy for users to find and resume watching videos they've already started, or to discover new content that's similar to what they've watched before.
        .</h6>
      </div>
      <div className="col-lg-6 ">
      <iframe  className='rounded shadow' width="550" height="300" src="https://www.youtube.com/embed/S7-4xSY1vsA?si=7lIBx3VjblCMRwYX&amp;start=74" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
    </div>
    </div>
    </>
  )
}

export default LandingPage
