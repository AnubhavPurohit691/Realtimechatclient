import axios from "axios"
import { useEffect, useState } from "react"

export const usegetme=()=>{
    const [getme,setgetme]=useState({
        id:"",
        fullName:''
    })

    useEffect(()=>{
        const getme=async()=>{
            const response=await axios.get("http://localhost:8000/user/getme",{headers:{ Authorization: "Bearer " + localStorage.getItem("token"),}})

            setgetme(response.data)
        }
        getme()
    },[])
    
    return {getme}
}