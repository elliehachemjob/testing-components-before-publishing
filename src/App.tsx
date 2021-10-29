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
  const [user, setUser] = useState<string>("");

  const sendMessage = async (user: string, isAdmin: string) => {};

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
    </div>
  );
}

export default App;
