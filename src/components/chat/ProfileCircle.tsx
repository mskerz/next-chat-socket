"use client";

function ProfileCircle({ username }: { username: string }) {
  return (
    <div className="w-8 h-8 outline-2 outline-gray-600 bg-gray-800 rounded-full flex items-center justify-center">
      <p className="text-white">{username.charAt(0).toUpperCase()}</p>
    </div>
  );
}
export default ProfileCircle;
