import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/groovyWalkAnimation.json";
const NoSelectedChat = () => {
  return (
    <div>
      <Lottie
        animationData={groovyWalkAnimation}
        loop={true}
        className="h-96"
      />
      <div className="text-center">
        <p className=" text-2xl font-mono">Select To Start Conversation</p>
        <p className=" text-2xl font-bold">Kayoo</p>
      </div>
    </div>
  );
};

export default NoSelectedChat;
