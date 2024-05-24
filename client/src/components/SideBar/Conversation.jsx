import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import { useScoketContext } from "../../context/ScoketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ i }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const { userInfo } = useSelector((state) => state.auth);

  const friendId = i.participants?.find((m) => m !== userInfo?._id);

  const fetchSearchConvs = async () => {
    const res = await fetch(`/v1/conversations/search?userId=${friendId}`);
    return res.json();
  };

  const {
    isPending,
    error,
    isError,
    data: fetchSearchConvData,
  } = useQuery({
    queryKey: ["fetchSearchConv", friendId],
    queryFn: fetchSearchConvs,
  });
  //Online User

  const { onlineUsers } = useScoketContext();

  const isOnline = onlineUsers.includes(fetchSearchConvData?._id);

  const isSelected = selectedConversation?.[0]?._id === fetchSearchConvData?._id;

  return (
    <div
      className="mt-4 mx-3 lg:w-[550px]"
      onClick={() => setSelectedConversation([fetchSearchConvData,i?._id])}
    >
      <div
        className={`flex justify-between items-center cursor-pointer border ${
          isSelected
            ? "bg-gradient-to-r from-violet-200 to-pink-200 text-black"
            : ""
        } border-violet-500 rounded-xl  px-6 py-2`}
      >
        <div className="flex justify-start items-center space-x-3">
          <img
            className="mask mask-hexagon-2 h-20 w-20 bg-gradient-to-r from-fuchsia-500 to-cyan-500"
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${fetchSearchConvData?.username}`}
          />
          <div>
            <div className="text-xl font-bold">
              <span className="">{fetchSearchConvData?.username}</span>
            </div>
          </div>
        </div>
        <div>
          <p>{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
