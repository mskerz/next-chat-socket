"use client";

import { ChatMessage } from "@/types/chat";

function SystemMessage({msg}:{msg:ChatMessage}) {
  
  return (
    <div className="text-center">
      <p className="text-sm text-white bg-gray-500/70 px-3 py-1 inline-block rounded-xl">
        {msg.message}
      </p>
    </div>
  );
}
export default SystemMessage;
