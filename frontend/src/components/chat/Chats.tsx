import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { getSocket } from "@/lib/socket.config";
import { Input } from "../ui/input";
import { v4 as uuidv4 } from "uuid";
export default function Chats({
  group,
  oldMessages,
  chatUser,
}: {
  group: ChatGroupType;
  oldMessages: Array<MessageType> | [];
  chatUser?: GroupChatUserType;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<MessageType>>(oldMessages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  let socket = useMemo(() => {
    const socket = getSocket();
    socket.auth = {
      room: group.id,
    };
    return socket.connect();
  }, []);
  useEffect(() => {
    socket.on("message", (data: MessageType) => {
      console.log("The message is", data);
      setMessages((prevMessages) => [...prevMessages, data]);
      scrollToBottom();
    });

    return () => {
      socket.close();
    };
  }, []);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const payload: MessageType = {
      id: uuidv4(),
      message: message,
      name: chatUser?.name ?? "Unknown",
      created_at: new Date().toISOString(),
      group_id: group.id,
    };
    socket.emit("message", payload);
    setMessage("");
    setMessages([...messages, payload]);
  };

  return (
    <div className="flex flex-col h-[94vh] p-4 glass-dark rounded-lg">
      <div className="flex-1 overflow-y-auto flex flex-col-reverse custom-scrollbar pr-2">
        <div ref={messagesEndRef} />
        <div className="flex flex-col gap-3">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`max-w-sm rounded-2xl p-3 shadow-lg message-slide ${
                message.name === chatUser?.name
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white self-end transform hover:scale-105 transition-transform duration-200"
                  : "glass-dark text-gray-100 self-start border border-gray-600/30 hover:border-gray-500/50 transition-colors duration-200"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {message.name !== chatUser?.name && (
                <div className="text-xs text-blue-400 mb-1 font-medium">
                  {message.name}
                </div>
              )}
              <div className="break-words">{message.message}</div>
              <div className={`text-xs mt-1 ${
                message.name === chatUser?.name ? 'text-blue-100' : 'text-gray-400'
              }`}>
                {new Date(message.created_at).toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            className="w-full glass-dark border border-gray-600/50 rounded-xl p-4 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg px-4 py-2 transition-all duration-200 disabled:cursor-not-allowed font-medium"
          >
            Send ✨
          </button>
        </div>
      </form>
    </div>
  );
}