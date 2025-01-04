import { useRecoilValue } from "recoil";
import { selectuser } from "../recoil/atom";
import { usegetme } from "./usegetme";

export const usesocket = () => {
  const socket = (newsocket: WebSocket, message: string) => {
    const { getme } = usegetme();
    const usedata:any = useRecoilValue(selectuser);

    if (!usedata || !getme) {
      console.error("User data or getme is not available.");
      return;
    }

    newsocket.onopen = () => {
      try {
        const payload = {
          to: usedata.id,
          userId: getme.id,
          body: message,
        };
        newsocket.send(JSON.stringify(payload));
      } catch (error) {
        console.error("Error sending message via WebSocket:", error);
      }
    };

    newsocket.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log("Message received from WebSocket:", data);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    newsocket.onerror = (error) => {
      console.error("WebSocket error occurred:", error);
    };

    newsocket.onclose = (event) => {
      console.log("WebSocket connection closed:", event.reason);
    };
  };

  return { socket };
};
