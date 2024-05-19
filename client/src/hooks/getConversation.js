import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
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



  
  // const friendId = conversationData?.map((i)=>(
  //   i.participants?.find((m) => m !== userInfo?._id)
  //  ))
  //  const friendId = conversationData?.flatMap((conversation) => {
  //   // Ensure participants exist and userInfo is defined before accessing ._id
  //   if (conversation.participants && userInfo) {
  //     return conversation.participants.find((participant) => participant !== userInfo._id);
  //   }
  //   return null; // Or handle missing participants/userInfo gracefully (e.g., return undefined)
  // });
   


  return { conversationData };
};

export default getConversation;
