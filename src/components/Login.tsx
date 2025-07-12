import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { globalStyles } from "./AppTheme";
import CustomButton from "./CustomButton";

const Login = ({ onLogin }: { onLogin: (uid: string) => void }) => {
  const [uid, setUid] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!uid.trim()) {
      setError("User ID required");
      return;
    }
    setError("");
    onLogin(uid.trim());
  };

  return (
    <View style={[globalStyles.container, { justifyContent: "center" }]}> 
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Welcome to CometChat</Text>
        <TextInput
          value={uid}
          onChangeText={setUid}
          placeholder="Enter your User ID"
          style={globalStyles.input}
          autoCapitalize="none"
        />
        {!!error && (
          <Text style={{ color: "#D32F2F", marginBottom: 8 }}>{error}</Text>
        )}
        <CustomButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;
