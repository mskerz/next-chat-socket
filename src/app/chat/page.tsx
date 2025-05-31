
import ChatClient from "@/components/chat/ChatClient";
import { Metadata } from "next";
import { metadata } from "../layout";
import { getSessionRoomChat } from "@/libs/session";
import type { MetaDataProps , PageProps } from "@/types/props";


 

export async function generateMetadata(): Promise<Metadata> {
  const { roomName, username } = await getSessionRoomChat();
  return {
    ...metadata,
    title: `Chat Room - ${roomName}`,
    description: `Join the chat as ${username} in the room ${roomName}.`,
  };
}



export default async function ChatPage() {
  const { roomName, username } = await getSessionRoomChat();
  console.log("ChatPage - roomName:", roomName, "username:", username);
  
  return (
    <>
      <ChatClient username={username} roomName={roomName} />
    </>
  );
}
