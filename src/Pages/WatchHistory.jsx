import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../Services/allApi'


function WatchHistory() {


  const [history,setHistory] = useState([])

  const getHistory = async()=>{
    const result = await getHistoryApi()
    if(result.status == 200){
      setHistory(result.data)
    }else{
      console.log("API failed");   
      setHistory(result.message)
    }
  }
  console.log(history);


  const removeVideoHistory = async(id)=>{
     await deleteHistoryApi(id)
     getHistory()

  }
 
  
  useEffect(()=>{
    getHistory()
  },[])
  return (
    <>
       <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2 className='fw-bolder text-primary'>Watch History</h2>
        <Link style={{ textDecoration: "none", fontSize:'25px' }} className='fw-bolder text-dark' to="/home">
          Back To Home <i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i>
        </Link>
      </div>

      <div className="container mt-5 mb-3 w-100">
        <table className="table shadow w-100 p-3 m-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>

          </thead>
        { 
        history?.length>0?history.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video.caption}</td>
          <td><a href={video.link} target='_blank'>{video.link}</a></td>
          <td>{video.timeStamp}</td>
          <td><button onClick={()=> removeVideoHistory(video?.id)} ><i class="fa-solid fa-trash fs-5" ></i></button></td>
        </tr>

        )):<p className='text-danger'>Nothing to Display</p>
        
          }
          </table>
          </div>
    </>
  )
}

export default WatchHistory
