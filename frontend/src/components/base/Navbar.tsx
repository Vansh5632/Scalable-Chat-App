"use client";
import React from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import LoginModal from "../auth/LoginModal";
export default function Navbar({ user }: { user?: CustomUser }) {
  return (
    <nav className="p-6 flex justify-between items-center glass-dark sticky top-0 z-50 transition-all duration-300">
      <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent glow-effect">
        QuickChat
      </h1>
      <div className="flex items-center space-x-2 md:space-x-6 text-gray-100">
        <Link href="/" className="hover:text-blue-400 transition-colors duration-200 hover-lift">
          Home
        </Link>
        <Link href="#features" className="hover:text-blue-400 transition-colors duration-200 hover-lift">
          Features
        </Link>
        {!user ? (
          <LoginModal />
        ) : (
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-none text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Dashboard
            </Button>
          </Link>
        )}{" "}
      </div>
    </nav>
  );
}
