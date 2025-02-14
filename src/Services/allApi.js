

import { commonApi } from "./commonApi"
import { server_url } from "./Server_url"

//allVideos //////


//addVideo Api

export const uploadVideoApi = async(video)=>{
    return await commonApi("POST",`${server_url}/allVideos`,video)

}

//getAllVideosApi

export const getAllVideosApi = async()=>{
    return await commonApi("GET",`${server_url}/allVideos`,"")

}

//getAVideoApi

export const getAVideoApi = async(id)=>{
    return await commonApi("GET",`${server_url}/allVideos/${id}`,"")

}


//deleteAVideoApi

export const deleteAVideoApi = async(id)=>{
    return await commonApi("DELETE",`${server_url}/allVideos/${id}`,{})

}



//history //// /// 


//addHistoryApi
export const addHistoryApi = async(video)=>{
    return await commonApi("POST",`${server_url}/history`,video)
}

//getHistory
export const getHistoryApi = async()=>{
    return await commonApi("GET",`${server_url}/history`,"")
}


//deleteHistory

export const deleteHistoryApi = async(id)=>{
    return await commonApi("DELETE",`${server_url}/history/${id}`,{})

}




//// category //////

//addCategory

export const addCategoryApi = async(category)=>{
    return await commonApi("POST",`${server_url}/category`,category)
}

//getCategory

export const getCategoryApi = async()=>{
    return await commonApi("GET",`${server_url}/category`,"")
}


//deleteCategory

export const deleteCategoryApi = async(id)=>{
    return await commonApi("DELETE",`${server_url}/category/${id}`,{})

}

//updateCategoryApi

export const updateCategoryApi=async(id,categoryDetails)=>{
    return await commonApi("PUT",`${server_url}/category/${id}`,categoryDetails)

}