import axios from "axios";
import { useEffect, useState } from "react";

export const useGetuser = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get("http://localhost:8000/message/getconversation", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
                setUserData(response.data); // Store the data
                console.log(userData)
                setLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                setLoading(false); // Set loading to false even if there's an error
            }
        };

        getUser(); // Call the getUser function
    }, []); // Empty dependency array means this runs once after the component mounts

    return { userData, loading};
};
