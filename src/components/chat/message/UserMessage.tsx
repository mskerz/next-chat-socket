"use client";

import { useIsUser } from "@/hook/useIsUser";
import { ChatMessage } from "@/types/chat";
import ProfileUserMessage from "../ProfileUserMessage";

function UserMessage({
  msg,
  username,
}: {
  msg: ChatMessage;
  username: string;
}) {
  const { isUser } = useIsUser(msg, username);

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* ซ้าย/ขวาสลับตาม isUser */}
      {!isUser && <ProfileUserMessage  isUser={isUser} username={username} />}

      <div className="flex flex-col gap-1 max-w-[70%]">
        <p
          className={`text-[8px] text-gray-400 ${
            isUser ? "text-end mr-2" : "text-start ml-2"
          }`}
        >
          {msg.username}
        </p>
        <p
          className={`px-3 py-1 rounded-xl break-words ${
            isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {msg.message}
        </p>
      </div>

      {isUser && <ProfileUserMessage isUser={isUser} username={username} />}
    </div>
  );
}

export default UserMessage;
