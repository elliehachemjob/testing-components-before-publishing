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
        normalImage="https://media-exp1.licdn.com/dms/image/C4E0BAQG9rQefXRgLBQ/company-logo_200_200/0/1625823645566?e=2159024400&v=beta&t=x-KSyk7s-GdJmqjj6Y-KKYDzr71xAg7wgE9oZBGMd4E"
        flippedImage="https://i.ibb.co/xXsFSqM/1625823645566-e-2159024400-v-beta-t-x-KSyk7s-Gd-Jmqjj6-Y-KKYDzr71x-Ag7wg-E9o-ZBGMd4-E.jpg"
      />
    </div>
  );
}

export default App;
