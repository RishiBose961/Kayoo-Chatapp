import { Send } from 'lucide-react'
import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
 <div className="flex justify-start items-center space-x-3">
      <input
        type="text"
        placeholder="Type Message"
        className="input input-bordered w-full"
        value={message}
          onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit' className="bg-violet-500 h-10 w-10 flex justify-center items-center cursor-pointer rounded-xl">
        <Send className=" text-black" />
      </button>
    </div>
    </form>
   
  )
}

export default MessageInput