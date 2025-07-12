// App.tsx

import React, { useEffect, useState } from "react";
import { SafeAreaView, ViewStyle, ActivityIndicator } from "react-native";
import {
  CometChatUIKit,
  CometChatUiKitConstants,
  CometChatConversations,
  CometChatThemeProvider,
  UIKitSettings,
} from "@cometchat/chat-uikit-react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";

import Messages from "./src/components/Messages";
import { globalStyles } from "./src/components/AppTheme";
import LoginScreen from "./src/screens/LoginScreen";
import UsersListScreen from "./src/screens/UsersListScreen";

/* 🔐 Replace with your real CometChat credentials */
const APP_ID = "278702d5acd2788b";
const AUTH_KEY = "ee217882a89f3757f9c783585e93c85c4f6f6418";
const REGION = "us"; // e.g., "us", "in", "eu"



const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUid, setCurrentUid] = useState<string>();
  const [selectedUser, setSelectedUser] = useState<CometChat.User>();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<CometChat.User[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);

  const handleLogin = async (uid: string) => {
    setLoading(true);
    try {
      const uiKitSettings: UIKitSettings = {
        appId: APP_ID,
        authKey: AUTH_KEY,
        region: REGION,
        subscriptionType:
          CometChat.AppSettings
            .SUBSCRIPTION_TYPE_ALL_USERS as UIKitSettings["subscriptionType"],
      };
      await CometChatUIKit.init(uiKitSettings);
      await CometChatUIKit.login({ uid });
      setCurrentUid(uid);
      setLoggedIn(true);
      // Fetch users after login
      setUsersLoading(true);
      const usersRequest = new CometChat.UsersRequestBuilder().setLimit(30).build();
      const userList = await usersRequest.fetchNext();
      setUsers(userList);
      setUsersLoading(false);
    } catch (e) {
      alert("Login failed");
      setUsersLoading(false);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <ActivityIndicator size="large" color="#1976D2" />
      </SafeAreaView>
    );
  }

  const handleLogout = async () => {
    setLoading(true);
    try {
      await CometChatUIKit.logout();
    } catch (e) {}
    setLoggedIn(false);
    setCurrentUid(undefined);
    setSelectedUser(undefined);
    setUsers([]);
    setLoading(false);
  };

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (!selectedUser) {
    return (
      <UsersListScreen
        onUserSelect={setSelectedUser}
        onBack={handleLogout}
        users={users}
        loading={usersLoading}
      />
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <CometChatThemeProvider>
        <Messages
          user={selectedUser}
          onBack={() => setSelectedUser(undefined)}
        />
      </CometChatThemeProvider>
    </SafeAreaView>
  );
};



export default App;
function alert(arg0: string) {
  throw new Error("Function not implemented.");
}

