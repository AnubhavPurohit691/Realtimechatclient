import axios from "axios"
import { useCallback } from "react"

export const usesignin=()=>{
    const signin= useCallback(async(email:string,password:string)=>{
    try {
    const response = await axios.post("http://localhost:8000/user/signin",{
        email,password
    })
    localStorage.setItem("token",response.data.token)
    
    } catch (error) {
        console.log(error)
    } },[])
        return {signin};
    }

