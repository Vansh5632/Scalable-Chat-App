import React from "react";
import { Card } from "@/components/ui/card";

export default function UserReviews() {
  return (
    <section className="p-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          <Card className="p-6 text-center glass-dark border-gray-600/30 hover-lift group">
            <div className="glow-effect">
              <p className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                "QuickChat is a game-changer! The fastest way to start a chat with this amazing glass design."
              </p>
              <div className="mt-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div className="mt-3 text-gray-300 group-hover:text-blue-300 transition-colors duration-300">
                  John Doe, Developer
                </div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-6 text-center glass-dark border-gray-600/30 hover-lift group">
            <div className="glow-effect">
              <p className="text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                "The encryption is top-notch and the UI is stunning. I feel secure using QuickChat."
              </p>
              <div className="mt-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg">
                  JS
                </div>
                <div className="mt-3 text-gray-300 group-hover:text-pink-300 transition-colors duration-300">
                  Jane Smith, Designer
                </div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
