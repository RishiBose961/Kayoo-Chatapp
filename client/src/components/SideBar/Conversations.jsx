import React from "react";
import Conversation from "./Conversation";
import getConversation from "../../hooks/getConversation";
import { useQuery } from "@tanstack/react-query";


const Conversations = () => {
    let height = screen?.height;

    const { conversationData } = getConversation();

  return (
    <>

    <div className="flex sm:h-[450px] mt-10 rounded-lg overflow-hidden" style={{ height: height/1.5 }}>
      <div className=" overflow-auto">
        {conversationData?.map((i) => (
          <Conversation i={i}/>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Conversations;
