import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import GroupChatCardMenu from "./GroupChatCardMenu";

export default function GroupChatCard({
  group,
  user,
}: {
  group: ChatGroupType;
  user: CustomUser;
}) {
  return (
    <Card className="glass-dark border-gray-600/30 hover:border-gray-500/50 hover-lift group transition-all duration-300 relative overflow-hidden">
      <div className="glow-effect">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
            {group.title}
          </CardTitle>
          <GroupChatCardMenu user={user} group={group} />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="glass-dark rounded-lg p-3 border border-gray-600/20">
            <p className="text-gray-300 text-sm mb-1">Passcode</p>
            <p className="text-white font-mono text-lg font-bold">{group.passcode}</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Created</span>
            <span className="text-gray-300">{new Date(group.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm">Active</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}