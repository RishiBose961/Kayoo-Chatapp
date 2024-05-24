import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";

const useDelConversation = () => {
    
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const deleteConversation = async (conversationId) => {
    console.log(conversationId);
    setLoading(true);
    try {
      const res = await fetch(`/v1/m/del/${conversationId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages(data || [])
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {  messages: messages || [], loading, deleteConversation };
};

export default useDelConversation;
