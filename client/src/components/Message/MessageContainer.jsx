import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import NoSelectedChat from "./NoSelectedChat";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div>
      {!selectedConversation ? (
        <NoSelectedChat />
      ) : (
        <>
          <div className="bg-indigo-600 rounded-xl px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="text-center font-medium sm:text-left">
              {selectedConversation?.username}
            </p>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
