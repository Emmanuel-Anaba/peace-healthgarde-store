"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Header() {
  const [headText] = useTypewriter({
    words: [
      "Welcome to Peace's Healthgarde store!",
      "From nature’s best, to your best self 🌿",
      "Feel the difference — naturally! 🌱",
      "The power of nature, in every capsule! 💊",
    ],
    loop: Infinity,
    delaySpeed: 2000,
  });
  return (
    <header>
      <div>
        <h1>
          {headText}
          <Cursor />
        </h1>
        <p>Where health meets happiness!</p>
      </div>
    </header>
  );
}
