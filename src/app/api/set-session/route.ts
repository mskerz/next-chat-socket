import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { roomName, username } = await req.json();

  const response = NextResponse.json({ success: true });
  response.cookies.set("roomName", roomName);
  response.cookies.set("username", username);
  
  return response;
}
