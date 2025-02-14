
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { uploadVideoApi } from '../Services/allApi';




function Add({setUploadVideoResponses}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // setting state to hold all the details in input field

  const [uploadVideo,setUploadVideo]= useState({
    id:"", caption:"", url:"", link:""

  })
  console.log(uploadVideo);


  //https://www.youtube.com/embed/VFkjBy2b50Q" -- embed link
  //https://www.youtube.com/watch?v=VFkjBy2b50Q -- normal link 

  //both id are same so slice the last id to get the video 

  const getYoutubeLink = (e)=>{

    const {value} = e.target

    if(value.includes("v=")){

      let VID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})

    }else{
      setUploadVideo({...uploadVideo,link:""})

    }

  }

  //upload button click

  const handleAdd = async ()=>{

    const {id,caption,url,link} = uploadVideo

    if(!id || !caption || !url || !link){
      alert("please fill the missing field")
    }else{
      //api call to upload the video into json server 
       const result = await uploadVideoApi(uploadVideo)
       console.log(result);

       if(result.status >= 200 && result.status <300){
        alert("video uploaded ")
        handleClose()
        setUploadVideoResponses(result.data)
       }else{
        alert("something went wrong please check the data")
       }
       
    }
  }
  


  return (
    <>
    <div className='d-flex'>
        <h2 className='fw-bolder text-primary'>Upload Videos</h2>
        <button onClick={handleShow} className='btn'>
          <i className="fa-solid fa-arrow-up-from-bracket fa-beat fs-3 text-primary"></i>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>

         <FloatingLabel  controlId="floatingInput1" label="Video Id" className="mb-3 rounded shadow">
              <Form.Control 
                type="text" 
                placeholder="Video Id" 
                onChange={(e)=> setUploadVideo({...uploadVideo,id:e.target.value})}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput2" label="Video Title" className="mb-3 rounded shadow">
              <Form.Control 
                type="text" 
                placeholder="Video Title" 
                onChange={(e)=> setUploadVideo({...uploadVideo,caption:e.target.value})}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput3" label="Image URL" className="mb-3 rounded shadow">
              <Form.Control 
                type="text" 
                placeholder="Image URL" 
                onChange={(e)=> setUploadVideo({...uploadVideo,url:e.target.value})}             
              />
            </FloatingLabel>  
                       
            <FloatingLabel controlId="floatingInput4" label="Video URL" className="mb-3 rounded shadow">
              <Form.Control 
                type="text" 
                placeholder="Video URL"        
                onChange={getYoutubeLink}     
              />
            </FloatingLabel>

         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger rounded " onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary rounded" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Add
