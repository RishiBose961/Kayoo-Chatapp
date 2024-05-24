import React from "react";
import { useSelector } from "react-redux";
import useConversation from "../../zustand/useConversation";
import { Trash2 } from "lucide-react";
import useDelConversation from "../../hooks/useDelConversation";

const Message = ({ message }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { deleteConversation } = useDelConversation();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === userInfo._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const chatFlex = fromMe ? "justify-end" : "";
  const profilePic = fromMe
    ? userInfo.username
    : selectedConversation?.[0]?.username;
  const profileName = fromMe
    ? userInfo.username
    : selectedConversation?.[0]?.username;

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              className="bg-gradient-to-r from-fuchsia-500 to-cyan-500"
              alt="Tailwind CSS chat bubble component"
              src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${profilePic}`}
            />
          </div>
        </div>
        <div className="chat-header capitalize font-bold">
          {profileName}
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className={`flex ${chatFlex} items-center`}>
          <div className="chat-bubble">{message.message}</div>
          <Trash2
            className=" cursor-pointer"
            onClick={()=>deleteConversation(message._id)}
          />
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;
