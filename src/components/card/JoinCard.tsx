"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

function JoinCard() {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const navigate = useRouter();
  const handleJoin = () => {
    if (username.trim() === "" || roomName.trim() === "") {
      alert("Please enter a username and room name");
      return;
    }
    // Save the username and room name to local storage
    // socket.emit("join-room", { roomName: roomName, username: username });
    // Navigate to the chat page
    navigate.push("/chat?username=" + username + "&roomName=" + roomName);
  }
  return (
    <div className="flex flex-col justify gap-2  bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto">
      <div className="p-2">
        <p className="font-bold">Join Chat</p>
      </div>
      <div className="p-2">
        <input
          className="outline-1 outline-gray-300 p-2 rounded-2xl"
          placeholder="enter your username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="p-2">
        <div className="flex flex-col gap-2 items-center ">
          <input
            className="outline-1 outline-gray-300 p-2 rounded-2xl"
            placeholder="enter room name"
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <button onClick={handleJoin} className="bg-blue-600 hover:bg-blue-500 text-white mt-2 p-3 w-full rounded-2xl transition-all">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
export default JoinCard;
