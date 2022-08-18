import { useState } from "react";
import Chat from "../Chat";
import History from "../History";
import Players from "../Players";
import "./index.css";

export default function Status() {
  const [currentTab, setCurrentTab] = useState("chat");

  return (
    <div className="flex h-[55vh] mb-5">
      <ul className="Vertical-tabs text-bold">
        <li
          className={
            currentTab === "chat" ? "active h-1/3 lg:h-1/2" : "h-1/3 lg:h-1/2"
          }
          onClick={() => setCurrentTab("chat")}
        >
          CHAT
        </li>
        <li
          className={
            currentTab === "history"
              ? "active h-1/3 lg:h-1/2"
              : "h-1/3 lg:h-1/2"
          }
          onClick={() => setCurrentTab("history")}
        >
          HISTORY
        </li>
        <li
          className={
            currentTab === "players"
              ? "active h-1/3 block lg:hidden"
              : "h-1/3 block lg:hidden"
          }
          onClick={() => setCurrentTab("players")}
        >
          PLAYERS
        </li>
      </ul>
      {currentTab === "chat" ? (
        <Chat></Chat>
      ) : currentTab === "history" ? (
        <History></History>
      ) : (
        <div className="block">
          <Players></Players>
        </div>
      )}
    </div>
  );
}
