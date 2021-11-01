import React, { useState } from "react";
import "./App.css";
import { AdminPanel } from "./AdminPanel";
import { AdminPanelFilled } from "./AdminPanelFilled";
import { ClientWidget } from "./ClientWidget";
import { ExpansionAdminPanel } from "./ExpansionAdminPanel";
import { LoginForm, SignUpForm } from "./Forms";
import { SidebarAdminPanel } from "./SidebarAdminPanel";
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
  const [password, setPassword] = useState<string>("");
  const [sendEmailVerification, setSendEmailVerification] =
    useState<string>("");

  const [avatarIco, setAvatarIco] = useState<string>(
    "https://banner2.cleanpng.com/20180418/ppw/kisspng-client-computer-icons-clip-art-5ad79ac15eb3e0.5159876515240792973879.jpg"
  );
  const sendMessage = async (
    user: string,
    isAdmin: string,
    message: string
  ) => {};
  const joinRoom = async (user: string) => {};

  interface message {
    message: string;
  }

  const loginHandler = () => {
    console.log("replace this console.log with  a loginHandler function here");
  };

  const signUpHandler = () => {
    console.log("replace this console.log with  a signUpHandler function here");
  };

  const onClickExpanstionPanelData1 = () => {
    console.log(
      "replace this console.log with  a onClickExpanstionPanelData1 function here"
    );
  };
  const onClickExpanstionPanelData2 = () => {
    console.log(
      "replace this console.log with  a onClickExpanstionPanelData2 function here"
    );
  };
  const onClickExpanstionPanelData3 = () => {
    console.log(
      "replace this console.log with  a onClickExpanstionPanelData3 function here"
    );
  };
  const onClickExpanstionPanelData4 = () => {
    console.log(
      "replace this console.log with  a onClickExpanstionPanelData4 function here"
    );
  };

  const onClickVideoCall = () => {
    console.log(
      "replace this console.log with a onClickVideoCall function here"
    );
  };

  const onClickVoiceCall = () => {
    console.log(
      "replace this console.log with a onClickVoiceCall function here"
    );
  };

  return (
    <div className="App">
      {/* <AdminPanel
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
      /> */}
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
      {/* <ExpansionAdminPanel
        title="title"
        expanstionPanelData1="dynamicdata1"
        expanstionPanelData2="dynamicdata2"
        expanstionPanelData3="dynamicdata3"
        expanstionPanelData4="dynamicdata4"
        onClickExpanstionPanelData1={onClickExpanstionPanelData1}
        onClickExpanstionPanelData2={onClickExpanstionPanelData2}
        onClickExpanstionPanelData3={onClickExpanstionPanelData3}
        onClickExpanstionPanelData4={onClickExpanstionPanelData4}
      /> */}
      {/* <LoginForm
        joinRoom={joinRoom}
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
        loginHandler={loginHandler}
        title="change title as you please here in title props"
        fieldOneType="email"
        fieldOnePlaceholder="fieldOnePlaceholder/type usually email"
        containerStyle=""
        fieldOneIcon=""
        fieldTwoIcon=""
        textAlign="center"
        loginHandlertitle="Login"
        rememberMe="rememberMe"
        checkIcon=""
        titleColor=""
        fieldTwoIconLeft={true}
        titleBackground=""
        fieldTwoType=""
        fieldTwoPlaceholder="fieldOnePlaceholder/type usually password"
        checkIconSize=""
        checkIconAlign=""
        faEnvelopeSize=""
        faEnvelopeAlign=""
      /> */}
      {/* <SignUpForm
        joinRoom={joinRoom}
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
        signUpHandler={signUpHandler}
        title="SignUp Card Title"
        fieldOneType="email"
        fieldOnePlaceholder="fieldOnePlaceholder/type usually email"
        containerStyle=""
        fieldOneIcon=""
        fieldTwoIcon=""
        textAlign="center"
        signUpHandlertitle="SignUp"
        checkIcon=""
        titleColor=""
        fieldTwoIconLeft={true}
        titleBackground=""
        fieldTwoType=""
        fieldTwoPlaceholder="fieldOnePlaceholder/type usually password"
        checkIconSize=""
        checkIconAlign=""
        faEnvelopeSize=""
        faEnvelopeAlign=""
        sendEmailVerification={sendEmailVerification}
        setSendEmailVerification={setSendEmailVerification}
        fieldThreeType="email"
        fieldThreePlaceholder="Send Email Verification"
        fieldThreeIcon=""
      /> */}
      {/* <SidebarAdminPanel position="right" data="data here can be anything" /> */}
      {/* <SidebarExpansion
        title="title"
        position="right"
        expanstionPanelData1="expanstionPanelData1"
        expanstionPanelData2="expanstionPanelData2"
        expanstionPanelData3="expanstionPanelData3"
        expanstionPanelData4="expanstionPanelData4"
        onClickExpanstionPanelData1={onClickExpanstionPanelData1}
        onClickExpanstionPanelData2={onClickExpanstionPanelData2}
        onClickExpanstionPanelData3={onClickExpanstionPanelData3}
        onClickExpanstionPanelData4={onClickExpanstionPanelData4}
      /> */}
      {/* <VideoCall onClick={onClickVideoCall} />
      <VoiceCall onClick={onClickVoiceCall} /> */}
    </div>
  );
}

export default App;
