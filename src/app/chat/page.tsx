
import ChatClient from "@/components/chat/ChatClient";
import { Metadata } from "next";
import { metadata } from "../layout";
import type { MetaDataProps , PageProps } from "@/types/props";


 

export async function generateMetadata({
  searchParams,
}: MetaDataProps): Promise<Metadata> {
  const params = searchParams;
  const username = Array.isArray(params.username)
    ? params.username[0]
    : params.username ?? "Anonymous";

  const roomName = Array.isArray(params.roomName)
    ? params.roomName[0]
    : params.roomName ?? "default-room";

  return {
    ...metadata,
    title: `Chat Room - ${roomName}`,
    description: `Join the chat as ${username} in the room ${roomName}.`,
  };
}



export default async function ChatPage({
  searchParams,
}:  PageProps) {
  const params = await searchParams;
  const username = Array.isArray(params.username)
    ? params.username[0]
    : params.username ?? "Anonymous";

  const roomName = Array.isArray(params.roomName)
    ? params.roomName[0]
    : params.roomName ?? "default-room";

  return (
    <>
      <ChatClient username={username} roomName={roomName} />
    </>
  );
}
