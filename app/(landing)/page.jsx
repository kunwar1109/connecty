"use client";

import { useEffect } from "react";
import io from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:8000/chat");
  }, []);
  return (
    <div>
      <h1>Hello Project</h1>
    </div>
  );
}
