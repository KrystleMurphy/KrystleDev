import React from "react";
import bgImage from "../public/bgImage.jpg"; 

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-2xl text-center text-white bg-slate-900 rounded-lg bg-opacity-90 p-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Krystle.Dev</h1>
        <div className="mt-6 text-lg">
          <h2 className="font-bold">🎉 Exciting News Ahead! 🎉</h2>
          <p className="mt-4">
            Krystle's crafting something extraordinary for you! Stay tuned as we
            gear up to unveil a stunning new showcase of cutting-edge creativity. From sleek designs to seamless interactions, get ready
            to explore the artistry of modern web development firsthand. Keep
            checking back—we can't wait to share it with you!
          </p>
        </div>
      </div>
    </div>
  );
}
