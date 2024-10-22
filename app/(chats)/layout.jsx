import { ChatSideBar } from "./chats/_components/chat-sidebar";

export default function ChatLayout({ children }) {
  return (
    <section className="flex">
      {/* sidebar */}
      <ChatSideBar />
      {children}
    </section>
  );
}
