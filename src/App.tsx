import React, { useState } from "react";
import "./App.css";
import { ClientWidget } from "./ClientWidget";
import { AdminPanel } from "./AdminPanel";
import { AdminPanelFilled } from "./AdminPanelFilled";
import { ExpansionAdminPanel } from "./ExpansionAdminPanel";
import { LoginForm, SignUpForm } from "./Forms";
import { SidebarExpansion } from "./SidebarExpansion";
import { VideoCall } from "./VideoCall";
import { VoiceCall } from "./VoiceCall";

function App() {
  const [isWidget, setIsWidget] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [avatarName, setAvatarName] = useState<string>("Avatar Name");
  const [status, setStatus] = useState<string>("dnd");
  const [clientResponder, setClientResponder] = useState<string>("");
  const [avatarIco, setAvatarIco] = useState<string>(
    "https://banner2.cleanpng.com/20180418/ppw/kisspng-client-computer-icons-clip-art-5ad79ac15eb3e0.5159876515240792973879.jpg"
  );
  const sendMessage = async (
    user: string,
    isAdmin: string,
    message: string
  ) => {};
  interface message {
    message: string;
  }

  return (
    <div className="App">
      <ClientWidget
        isWidget={isWidget}
        setIsWidget={setIsWidget}
        sendMessage={sendMessage}
        normalImage="https://i.ibb.co/VS1kYfD/1625823645566-1.jpg"
        flippedImage="https://i.ibb.co/xXsFSqM/1625823645566-e-2159024400-v-beta-t-x-KSyk7s-Gd-Jmqjj6-Y-KKYDzr71x-Ag7wg-E9o-ZBGMd4-E.jpg"
        normalImageAlt="any alt you want"
        flippedimageAlt="any alt you want"
        normalImageStyle=""
        flippedImageStyle=""
        title="Custom Title Ellie"
        subtitle="Welcome to New Extracted Component"
      />
      <AdminPanel
        username={username}
        // chatListAppend={[]}
        sendMessage={sendMessage}
        avatarIco={avatarIco}
        onAttachClick={() => {
          console.log("What to do when someone press the send attachment");
        }}
        onChange={() => {
          console.log("even handler for onChangeEvent");
        }}
        sidebarPosition="right"
        sidebarScrollable={false}
        // mainDivstyle=""
        // messageListContentStyle=""
        avatarName={avatarName}
        status={status}
      />
      {/* <AdminPanelFilled
        setClientResponder={setClientResponder}
        setUsername={setUsername}
        username={username}
        chatListMapping={[]}
        clientMessageArray={[]}
        adminMessageArray={[]}
        sendMessage={sendMessage}
        avatarIco=""
        clientMsgs={[]}
      /> */}
    </div>
  );
}

export default App;
