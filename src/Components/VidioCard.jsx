import React, { useState } from 'react'
import {Button, Card, Modal } from 'react-bootstrap'
import { addHistoryApi, deleteAVideoApi } from '../Services/allApi';


function VidioCard({video,insideCategory,setDeleteVideoResponse}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);

    const {caption,link} = video

    let today = new Date()

    // console.log(new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:'2-digit',second:'2-digit'}).format(today));


    let timeStamp = new Intl.DateTimeFormat('en-US',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:'2-digit',second:'2-digit'}).format(today)

    let videoHistory = {caption,link,timeStamp}
  
    //api call to add to history // make function async

    await addHistoryApi(videoHistory)
    }



    //function for drag and drop

   const  dragStarted = (e,id)=>{
    console.log("video drag started",id);
    e.dataTransfer.setData("video",id)
    

   }

   //function to remove video card 

   const removeVideo = async(id)=>{
    await deleteAVideoApi(id)
    setDeleteVideoResponse(true)

   }


  return (
    <>
    <Card style={{ width: '18rem' }}  className='rounded' draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img width={'100%'} height={'250px'} variant="top"  onClick={handleShow} className='rounded' src={video.url} />
      <Card.Body>
       <div className='justify-content-between d-flex '>
       <Card.Title className='fw-bolder'>{video.caption}</Card.Title>

       {insideCategory? null:<Button onClick={()=>removeVideo(video?.id)} className='text-danger btn' variant=''><i class="fa-solid fa-trash fs-5"></i></Button>}

       </div>

      </Card.Body>
    </Card>

    <Modal  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" className='rounded shadow' src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>

        </Modal.Body>

      </Modal>

    
      
    </>
  )
}

export default VidioCard
