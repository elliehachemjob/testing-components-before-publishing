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
  const [isWidget, setIsWidget] = useState(false);

  return (
    <div className="App">
      <ClientWidget isWidget={isWidget} setIsWidget={setIsWidget} />
    </div>
  );
}

export default App;
