import React from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  let height = screen?.height;
  useListenMessage();

  return (
    <div
    className="md:min-w-[450px] flex flex-col" style={{ height: height/1.5 }}
    >
      <div className=" overflow-auto">
     
          {messages.map((message) => (
            <div key={message._id}>
              <Message message={message} />
            </div>
          ))}

      </div>
    </div>
  );
};

export default Messages;
