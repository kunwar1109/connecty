import { MobileViewChats } from "./_components/mobile-view-chats";

export default function ChatPage() {
  return (
    <>
      <div className="hidden md:h-screen md:w-full md:flex md:justify-center md:items-center">
        Chat Page
      </div>
      {/* Mobile All Chats List */}
      <MobileViewChats />
    </>
  );
}
