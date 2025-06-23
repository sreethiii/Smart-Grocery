"use client";

import { useState, useRef, useEffect } from "react";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

const emojis = ["🍅", "🥕", "🍆", "🍄", "🌶️", "🥔", "🧅", "🍎"];

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      document.querySelectorAll(".bubble").forEach((b) => b.classList.add("burst"));
      setTimeout(() => router.push("/dashboard"), 800);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: string) => {
    if (e.key === "Enter") {
      if (field === "email") passwordRef.current?.focus();
      if (field === "password") handleAuth();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const container = document.getElementById("bubble-container");
      if (!container) return;
      const bubble = document.createElement("div");
      bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      bubble.className = "bubble emoji-bubble";
      bubble.style.left = `${Math.random() * 90}%`;
      bubble.style.animationDuration = `${6 + Math.random() * 3}s`;
      bubble.style.setProperty("--x-move", `${Math.random() * 100 - 50}px`);
      container.appendChild(bubble);
      setTimeout(() => bubble.remove(), 9000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        id="bubble-container"
        style={{ pointerEvents: "none" }}
      ></div>

      <div className="z-10 w-96 p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 text-white">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h1>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "email")}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, "password")}
        />
        <button
          onClick={handleAuth}
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-bold"
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>
        <p
          className="mt-4 text-sm text-center text-blue-300 cursor-pointer hover:underline"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Already have an account? Log in" : "New user? Sign up"}
        </p>
      </div>

      <style jsx global>{`
        .emoji-bubble {
          position: absolute;
          bottom: -60px;
          font-size: 1.8rem;
          animation: floatBubble var(--duration, 8s) linear forwards;
          z-index: 1;
        }

        .bubble.burst {
          animation: pop 0.5s forwards;
        }

        @keyframes floatBubble {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translateY(-200px) translateX(var(--x-move)) rotate(20deg);
          }
          50% {
            transform: translateY(-400px) translateX(calc(var(--x-move) * -1)) rotate(-20deg);
          }
          75% {
            transform: translateY(-600px) translateX(var(--x-move)) rotate(10deg);
          }
          100% {
            transform: translateY(-800px) translateX(0) rotate(0deg);
            opacity: 0;
          }
        }

        @keyframes pop {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
