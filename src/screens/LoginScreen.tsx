import React from "react";
import { View } from "react-native";
import Login from "../components/Login";

import { globalStyles } from "../components/AppTheme";

interface Props {
  onLogin: (uid: string) => void;
  onLogout?: () => void;
}

const LoginScreen: React.FC<Props> = ({ onLogin, onLogout }) => (
  <View style={[globalStyles.container, { paddingTop: 0 }]}> 
    
    <Login onLogin={onLogin} />
  </View>
);

export default LoginScreen;
