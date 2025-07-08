import CreateChat from "@/components/groupChat/CreateChat";
import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/groupChat/GroupChatCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOption);
  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
    session?.user?.token!
  );
  return (
    <div className="min-h-screen dark animated-bg">
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="container mx-auto px-4">
        <div className="mt-8 text-end">
          <CreateChat user={session?.user!} />
        </div>

        {/* If Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pb-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <div 
                key={index}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in-up 0.5s ease-out both'
                }}
              >
                <GroupChatCard group={item} user={session?.user!} />
              </div>
            ))}
        </div>
        
        {groups.length === 0 && (
          <div className="text-center mt-16">
            <div className="glass-dark rounded-2xl p-12 max-w-md mx-auto">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Chats Yet</h3>
              <p className="text-gray-300 mb-6">Create your first chat room to get started!</p>
              <CreateChat user={session?.user!} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}