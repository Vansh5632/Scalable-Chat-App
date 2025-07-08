"use client";
import React, { useState, useEffect, useMemo, Fragment } from "react";
import ChatNav from "./ChatNav";
import ChatUserDialog from "./ChatUserDialog";
import ChatSidebar from "./ChatSidebar";
import Chats from "./Chats";

export default function ChatBase({
  group,
  users,
  oldMessages,
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
  oldMessages: Array<MessageType> | [];
}) {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();
  useEffect(() => {
    const data = localStorage.getItem(group.id);
    if (data) {
      const pData = JSON.parse(data);
      setChatUser(pData);
    }
  }, [group.id]);
  return (
    <div className="flex min-h-screen dark animated-bg">
      <ChatSidebar users={users} />
      <div className="w-full md:w-4/5 flex flex-col">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav chatGroup={group} users={users} user={chatUser} />
        )}

        {/* Messages */}
        <div className="flex-1 p-4">
          <Chats oldMessages={oldMessages} group={group} chatUser={chatUser} />
        </div>
      </div>
    </div>
  );
}