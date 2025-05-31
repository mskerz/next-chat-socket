"use client";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { MdSend } from "react-icons/md";
import type { ChatMessage } from "@/types/chat";
import { SystemMessage, UserMessage } from "./message";
import ProfileCircle from "./ProfileCircle";

const SOCKET_HOST =
  process.env.NEXT_PUBLIC_SOCKET_HOST || "http://localhost:3001";

export default function ChatClient({
  username,
  roomName,
}: {
  username: string;
  roomName: string;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const socketRef = useRef<Socket | null>(null);
  const now = new Date();
  useEffect(() => {
    // สร้าง socket ครั้งเดียว

    const socket = io(SOCKET_HOST, {
      reconnection: false,
    });

    socketRef.current = socket;

    // Join room
    socket.emit("join-room", { roomName, username });

    const onReceive = (msg: ChatMessage) =>
      setMessages((prev) => [...prev, msg]);
    const onJoin = (msg: ChatMessage) => setMessages((prev) => [...prev, msg]);
    const onLeft = (msg: ChatMessage) => setMessages((prev) => [...prev, msg]);

    socket.on("received-message", onReceive);
    socket.on("user-joined", onJoin);
    socket.on("user-left", onLeft);

    return () => {
      socket.off("received-message", onReceive);
      socket.off("user-joined", onJoin);
      socket.off("user-left", onLeft);
      socket.disconnect();
    };
  }, [roomName, username]); // หากเปลี่ยนห้องหรือ username ให้ reconnect ใหม่

  const handleSend = () => {
    if (input.trim() === "") return;
    socketRef.current?.emit("send-message", {
      roomName,
      username,
      message: input,
    });
    setMessages((prev) => [...prev, { username, message: input }]);
    setInput("");
  };
  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: 16 }}>
      <div className="bg-gray-100 flex items-center justify-start rounded-t-2xl   p-5 gap-2.5 ">
        <ProfileCircle username="John" />
        <div className="flex flex-col">
           <p className="text-sm text-black">{username}</p>
          <p className="text-sm text-black">{now.toUTCString()}</p>
        </div>
      </div>
      <div className="bg-gray-700  items-center justify-center text-center   px-3 py-3 ">
        <p className="text-sm text-white"> -{roomName}-</p>
      </div>
      <div
        style={{
          minHeight: 200,
          marginBottom: 16,
          background: "#eee",
          padding: 8,
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            {msg.username === "System" ? (
              <SystemMessage msg={msg} />
            ) : (
              <UserMessage msg={msg} username={username} />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={input}
          className="outline-1 outline-gray-300 rounded-2xl px-3 py-1"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message"
          style={{ flex: 1 }}
        />
        <button
          className="flex items-center gap-2 bg-blue-500 text-white rounded-2xl px-3 py-1"
          onClick={handleSend}
        >
          <p>Send</p>
          <MdSend size={20} />
        </button>
      </div>
    </div>
  );
}
