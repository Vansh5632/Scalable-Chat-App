"use client";
import React from "react";
import ProfileMenu from "../auth/ProfileMenu";

export default function DashNav({
  image,
  name,
}: {
  image?: string;
  name: string;
}) {
  return (
    <nav className="py-4 px-6 flex justify-between items-center glass-dark sticky top-0 z-50 border-b border-gray-700/30">
      <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent glow-effect">
        QuickChat Dashboard
      </h1>
      <div className="flex items-center space-x-4">
        <div className="text-gray-300">
          Welcome back, <span className="text-blue-400 font-semibold">{name}</span>
        </div>
        <ProfileMenu name={name} image={image} />
      </div>
    </nav>
  );
}