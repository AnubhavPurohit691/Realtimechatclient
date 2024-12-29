import axios from "axios"
import { useCallback } from "react"

export const usesignin=()=>{
    const signin= useCallback(async(email:string,password:string)=>{
    try {
    await axios.post("http://localhost:8000/user/signin",{
        email,password
    })
    return 
    
    } catch (error) {
        console.log(error)
    } },[])
        return {signin};
    }

