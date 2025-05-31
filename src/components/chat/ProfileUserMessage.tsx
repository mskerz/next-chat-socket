"use client";


function ProfileUserMessage({
  isUser,
  username,
}: {
  isUser: boolean;
  username: string;
}) {

  const bgColor = isUser ? "bg-indigo-400" : "bg-cyan-400";
  const outlineColor = isUser ? "outline-indigo-500" : "outline-cyan-500";

  return (
    <div
      className={`w-6 h-6 mb-0.5 rounded-full flex items-center justify-center outline-2 ${bgColor} ${outlineColor}`}
    >
      <p className="text-white text-sm">
        {username.charAt(0).toUpperCase()}
      </p>
    </div>
  );
}

export default ProfileUserMessage;
