import React from "react";
import { Card } from "@/components/ui/card";

export default function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 glass-dark hover-lift group cursor-pointer border-none shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
      <div className="glow-effect">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300" style={{animation: 'float 4s ease-in-out infinite'}}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Card>
  );
}