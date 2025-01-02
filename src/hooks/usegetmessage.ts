import axios from "axios"
import { useRecoilValue } from "recoil"
import { selectuser } from "../recoil/atom"
import { userdata } from "../components/conversation/ChatHeader"

export const usegetmessage=()=>{
    const userdata:userdata|any=useRecoilValue(selectuser)
    const getmessage=async()=>{
        await axios.post("http://localhost:8000/message/getmessage/"+userdata.id,{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
    }
    return getmessage
}