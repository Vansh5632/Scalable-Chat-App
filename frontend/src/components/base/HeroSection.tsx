import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <span className="inline-block" style={{animation: 'fade-in-up 1s ease-out'}}>
            Instant Chat Links for
          </span>
          <br />
          <span className="inline-block" style={{animation: 'fade-in-up 1s ease-out 0.2s both'}}>
            Seamless Conversations
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl" style={{animation: 'fade-in-up 1s ease-out 0.4s both'}}>
          QuickChat makes it effortless to create secure chat links and start
          conversations in seconds with our modern glass-morphism interface.
        </p>
        <div style={{animation: 'fade-in-up 1s ease-out 0.6s both'}}>
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-none"
            >
              Start Chatting ✨
            </Button>
          </Link>
        </div>

        <div className="mt-12 w-full max-w-5xl flex justify-center" style={{animation: 'fade-in-up 1s ease-out 0.8s both'}}>
          {/* Enhanced image with glass effect */}
          <div className="glass-dark rounded-2xl p-8 shadow-2xl hover-lift">
            <img
              src="/images/conversation.svg"
              alt="Chat Illustration"
              className="w-full h-auto filter drop-shadow-lg"
              style={{animation: 'float 6s ease-in-out infinite'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}