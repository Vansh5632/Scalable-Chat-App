"use client";
import React, { useEffect, useMemo } from "react";
import { getSocket } from "@/lib/socket.config";

export default function ChatBase({groupId}: {groupId: string}) {
  let socket = useMemo(() => {
    const socket = getSocket();
    socket.auth = {
      room:groupId,
    }
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
