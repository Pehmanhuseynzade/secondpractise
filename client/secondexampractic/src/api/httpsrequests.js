import axios from "axios";
// import {BASE_URL} from "./base_URL"

//GET ALL DATAS

export const getAlldatas=async()=>{
     let globalData;
     await axios.get(`http://localhost:7070/api/robot`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData;
} 

//GET ALL DATAS BY ID

export const getAlldatasID = async(id)=>{
     let globalData;
     await axios.get(`http://localhost:7070/api/robot/${id}`)
     .then((res)=>{
          globalData=res.data
     })
     return globalData
}

//Post

export const postAlldatas = async(payload)=>{
     let globalData;
     await axios.post(`http://localhost:7070/api/robot`,payload)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

//DELETE

export const deleteDatas = async(id)=>{
     await axios.delete(`http://localhost:7070/api/robot/${id}`)
}

//PUT 
export const putDatas = async(update,id)=>{
     await axios.put(`http://localhost:7070/api/robot/${id}`,update)
}