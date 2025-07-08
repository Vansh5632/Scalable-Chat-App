import React from "react";
import MobileChatSidebar from "./MobileChatSidebar";

export default function ChatNav({
  chatGroup,
  users,
  user,
}: {
  chatGroup: ChatGroupType;
  users: Array<GroupChatUserType> | [];
  user?: GroupChatUserType;
}) {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 glass-dark border-b border-gray-700/30 backdrop-blur-lg">
      <div className="flex space-x-4 md:space-x-0 items-center">
        <div className="md:hidden">
          <MobileChatSidebar users={users} />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {chatGroup.title}
          </h1>
          <p className="text-sm text-gray-400">
            {users.length} member{users.length !== 1 ? 's' : ''} • Created {new Date(chatGroup.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        {user && (
          <div className="glass-dark px-3 py-1 rounded-full border border-gray-600/30">
            <p className="text-white font-medium">{user.name}</p>
          </div>
        )}
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </nav>
  );
}