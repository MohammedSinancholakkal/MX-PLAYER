import React, { useEffect, useState } from 'react'
import VidioCard from './VidioCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideosApi, getCategoryApi, updateCategoryApi } from '../Services/allApi'


function View({uploadVideoResponses,setDropVideoResponses}) {

const [allVideos,setAllVideos] = useState([])
const [deleteVideoResponse,setDeleteVideoResponse] = useState(false)
const getAllVideos = async()=>{
  const result = await getAllVideosApi()
  console.log(result);
  
  if(result.status == 200){
    setAllVideos(result.data)
  }else{
    alert("Api Failed")
    setAllVideos([])
  }
}
console.log(allVideos);


useEffect(()=>{
  getAllVideos()
  setDeleteVideoResponse(false)


},[uploadVideoResponses,deleteVideoResponse])



const dragOver = (e) => {
  e.preventDefault()
}

const videoDropped =async (e)=>{
  const {videoId,categoryId}= JSON.parse(e.dataTransfer.getData("data"))
  // console.log(videoId,categoryId);
  const {data}= await getCategoryApi()
  const selectedCategory= data.find(item => item.id == categoryId)
  let result = selectedCategory.allVideos.filter (video=> video.id !== videoId)
  console.log(result);

  let {id,categoryName}= selectedCategory
  let newCategory = {id,categoryName,allVideos:result}
  const res = await updateCategoryApi(categoryId,newCategory)
  setDropVideoResponses(res)





}


  return (
    <>
    <h2 className='text-primary fw-bolder'>All Videos</h2>

    <Row className='mb-5'  droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDropped(e)}>

{/* //apply the allVideos into the view cards by wrapping it */}
      {
         allVideos?.length>0?allVideos.map((video,index)=>(
          <Col key={index} sm={12} md={6} lg={4} className='mt-3'>
          <VidioCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>  
          </Col>
       
         )):<p className='text-danger'>Nothing to Display</p>
             
      }
    </Row>
      
    </>
  )
}


export default View
