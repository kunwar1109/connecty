import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ChatBox = () => {
  return (
    <Link href="/chats/sss">
      <div className="flex items-center justify-between px-2 py-4 m-2 hover:bg-accent rounded-md">
        <div className="flex items-center justify-center gap-4">
          {/* profile-image and name */}
          {false ? (
            <Image src="" width={40} height={40} alt="profile-picture" fill />
          ) : (
            <User2 className="w-[40px] h-[40px] rounded-full" />
          )}
          <h2>Name</h2>
        </div>
      </div>
    </Link>
  );
};
