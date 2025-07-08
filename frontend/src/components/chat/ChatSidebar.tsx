import React from "react";

export default function ChatSidebar({
  users,
}: {
  users: Array<GroupChatUserType> | [];
}) {
  return (
    <div className="hidden md:block h-screen overflow-y-auto w-1/5 glass-dark border-r border-gray-700/30 custom-scrollbar">
      <div className="p-4">
        <h1 className="text-2xl font-extrabold py-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Online Users
        </h1>
        <div className="space-y-3">
          {users.length > 0 &&
            users.map((item, index) => (
              <div 
                key={index} 
                className="glass-dark rounded-xl p-4 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-200 hover-lift group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.5s ease-out both'
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      Joined {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
        </div>
        
        {users.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            <div className="text-4xl mb-2">👥</div>
            <p>No users online</p>
          </div>
        )}
      </div>
    </div>
  );
}