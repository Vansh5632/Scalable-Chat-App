"use client";
import React, { useEffect, useMemo } from "react";
import { getSocket } from "@/lib/socket.config";

export default function ChatBase() {
  let socket = useMemo(() => {
    const socket = getSocket();

    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("the message is", data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = ()=>{
    
  }

  return <div>Chat</div>;
}
