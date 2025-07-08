import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      <div style={{animation: 'fade-in-up 1s ease-out 0.2s both'}}>
        <FeatureCard
          icon="🚀"
          title="Instant Setup"
          description="Generate a room link in seconds. No account required."
        />
      </div>
      <div style={{animation: 'fade-in-up 1s ease-out 0.4s both'}}>
        <FeatureCard
          icon="🔒"
          title="Secure"
          description="Passcode protection for your private conversations."
        />
      </div>
      <div style={{animation: 'fade-in-up 1s ease-out 0.6s both'}}>
        <FeatureCard
          icon="💻"
          title="Cross-Platform"
          description="Works on any device with a modern web browser."
        />
      </div>
    </section>
  );
}