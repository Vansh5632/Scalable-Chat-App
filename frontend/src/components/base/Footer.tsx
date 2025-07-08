import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-6 glass-dark text-white border-t border-gray-700/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            © 2025 QuickChat. All rights reserved.
          </div>
          <div className="space-x-4 mt-2">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="space-y-4 w-full md:w-auto">
          <Input
            placeholder="Subscribe to our newsletter"
            className="glass-dark border-gray-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 transition-colors duration-200"
          />
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full md:w-auto border-none text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Subscribe ✨
          </Button>
        </div>
      </div>
    </footer>
  );
}