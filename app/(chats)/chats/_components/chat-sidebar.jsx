import { ChatBox } from "./chat-box";
import { ProfileMenu } from "./profile-menu";

export const ChatSideBar = () => {
  //fetch all chats for user
  return (
    <aside className="md:w-[390px] lg:w-[490px] h-screen overflow-auto border-r relative">
      <div className="flex items-center justify-between px-4 py-4 border-b sticky top-0 left-0 bg-background ">
        <h2 className="text-2xl font-bold ">Chats</h2>
        <div>
          <ProfileMenu />
        </div>
      </div>
      <div className="my-2">
        <ChatBox />
      </div>
    </aside>
  );
};
