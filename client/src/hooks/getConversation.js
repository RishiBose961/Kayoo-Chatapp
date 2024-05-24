import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const getConversation = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const fetchConversations = async () => {
    const res = await fetch(`/v1/conversations/conn/${userInfo?._id}`);
    return res.json();
  };

  const {
    isPending,
    error,
    isError,
    data: conversationData,
  } = useQuery({
    queryKey: ["fetchConversation",userInfo?._id],
    queryFn: fetchConversations,
  });

  

  return { conversationData };
};

export default getConversation;
