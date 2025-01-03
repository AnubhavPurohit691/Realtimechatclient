import axios from "axios";
import { useRecoilValue } from "recoil";
import { userdata } from "../components/conversation/ChatHeader";
import { selectuser } from "../recoil/atom";
import { useCallback } from "react";

export const usesendmessage = () => {
    const usedata: userdata | any = useRecoilValue(selectuser);

    const sendmessage = useCallback(
        async (body: string) => {
            if (!usedata?.id) {
                console.error("User data is not available.");
                return;
            }

            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token not found. Please login again.");
                return;
            }

            try {
                const response = await axios.post(
                    ` http://localhost:8000/message/sendmessage/${usedata?.id}`,
                    { body },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                console.log("Message sent successfully:", response.data);
            } catch (error: any) {
                console.error("Error sending message:", error.response?.data || error.message);
            }
        },
        [usedata?.id] // Dependencies
    );

    return { sendmessage };
};
