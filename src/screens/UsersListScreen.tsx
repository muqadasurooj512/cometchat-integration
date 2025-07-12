import React from "react";
import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import UsersList from "../components/UsersList";
import CustomHeader from "../components/CustomHeader";
import { globalStyles, AppTheme } from "../components/AppTheme";

interface Props {
  users: any[];
  loading: boolean;
  onUserSelect: (user: any) => void;
  onBack?: () => void;
}


const UsersListScreen: React.FC<Props> = ({ users, loading, onUserSelect, onBack }) => (
  <View style={globalStyles.container}>
    <CustomHeader
      title="Users"
      onBack={onBack}
      rightButton={null}
    />
    {loading ? (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={AppTheme.colors.primary} />
      </View>
    ) : users.length === 0 ? (
      <Text style={{ textAlign: "center", marginTop: 32, color: AppTheme.colors.text }}>
        No users found.
      </Text>
    ) : (
      <UsersList users={users} onUserSelect={onUserSelect} />
    )}
  </View>
);

export default UsersListScreen;
