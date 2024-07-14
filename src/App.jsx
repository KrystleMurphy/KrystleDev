import React from "react";
import bgImage from "../public/bgImage.jpg";
import CV from "../public/CV.pdf";

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
            I'm currently crafting something extraordinary for you! Stay tuned as we
            gear up to unveil a stunning new showcase portfolio. From sleek designs to seamless interactions, get ready
            to explore the artistry of modern web development firsthand. Keep
            checking back, I can't wait to share it with you!
          </p>
          <p className="mt-4">
            If you can't wait, you can 
            <a 
              href="https://reliable-arithmetic-010ab5.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 p-2 m-2 inline-block"
            >
              view an old portfolio
            </a>
            However, I've come a long way since then!
          </p>
          <p>
            <a 
              href={CV} 
              download 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 p-2 m-2 inline-block"
            >
              Download my CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

