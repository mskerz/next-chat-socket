

import { cookies } from "next/headers";

export async function getSessionRoomChat() {

    const cookieStore = await cookies();
    const roomName = cookieStore.get("roomName")?.value;
    const username = cookieStore.get("username")?.value;


    return {
        roomName: roomName || "default-room",
        username: username || "Anonymous"
    }
}