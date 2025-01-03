import axios from "axios";
import { useRecoilValue } from "recoil";
import { selectuser } from "../recoil/atom";
import { userdata } from "../components/conversation/ChatHeader";
import { useEffect, useState } from "react";
import { messages } from "../page/Conversation";

export const useGetMessage = () => {
  const usedata: userdata |any= useRecoilValue(selectuser);
  const [message, setMessage] = useState<messages[] | null>(null);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token is missing");
          return;
        }
       

        const response = await axios.get(
          `http://localhost:8000/message/getmessage/${usedata?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Extract messages from the "data" field in the API response
        setMessage(response.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    getMessage();
  }, [usedata]);

  return { message };
};
