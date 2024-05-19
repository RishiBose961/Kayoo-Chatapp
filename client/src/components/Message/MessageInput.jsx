import { Send } from 'lucide-react'
import React from 'react'

const MessageInput = () => {
  return (
    <div className="flex justify-start items-center space-x-3">
      <input
        type="text"
        placeholder="Type Message"
        className="input input-bordered w-full"
      />
      <div className="bg-violet-500 h-10 w-10 flex justify-center items-center cursor-pointer rounded-xl">
        <Send className=" text-black" />
      </div>
    </div>
  )
}

export default MessageInput