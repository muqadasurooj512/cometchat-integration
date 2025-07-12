import React from "react";
import { FlatList, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { CometChat } from "@cometchat/chat-sdk-react-native";
import { AppTheme } from "./AppTheme";

interface Props {
  users: CometChat.User[];
  onUserSelect: (user: CometChat.User) => void;
}


const styles = StyleSheet.create({
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: AppTheme.spacing(2),
    backgroundColor: AppTheme.colors.card,
    borderRadius: AppTheme.borderRadius,
    marginVertical: AppTheme.spacing(0.5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    
  },
  userName: {
    fontSize: 18,
    color: AppTheme.colors.text,
    marginLeft: AppTheme.spacing(1),
    flex: 1,
  },
});

const UsersList: React.FC<Props> = ({ users, onUserSelect }) => (
  <FlatList
    data={users}
    keyExtractor={(item) => item.getUid()}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.userItem} onPress={() => onUserSelect(item)}>
        <Image
          source={{ uri: item.getAvatar() || undefined }}
          style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: AppTheme.colors.inputBorder }}
        />
        <Text
          style={styles.userName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.getName() || item.getUid()}
        </Text>
      </TouchableOpacity>
    )}
    contentContainerStyle={{ paddingTop: 80, paddingBottom: 24 }}
  />
);

export default UsersList;
