import { ChatMessage } from "@/types/chat";


export function useIsUser (msg:ChatMessage, username:string) {
  // เช็คว่าเป็นข้อความของผู้ใช้ปัจจุบันหรือไม่
  const isUser = msg.username === username;

  return { isUser}
}