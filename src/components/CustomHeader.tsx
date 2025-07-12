import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { AppTheme } from "./AppTheme";

interface Props {
  title: string;
  onBack?: () => void;
  rightButton?: React.ReactNode;
}

const CustomHeader: React.FC<Props> = ({ title, onBack, rightButton }) => (
  <View style={styles.headerContainer}>
    <View style={styles.header}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.iconBtn}>
          <Text style={styles.iconText}>{Platform.OS === "android" ? "←" : "⟵"}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.iconBtn} />
      )}
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      {rightButton ? rightButton : <View style={styles.iconBtn} />}
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 10,
    
    backgroundColor: AppTheme.colors.primary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: AppTheme.colors.primary,
    paddingTop: Platform.OS === "android" ? 10 : 20,
    paddingBottom: AppTheme.spacing(2),
    paddingHorizontal: AppTheme.spacing(2),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    borderBottomLeftRadius: AppTheme.borderRadius,
    borderBottomRightRadius: AppTheme.borderRadius,
  },
  iconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutIcon: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  iconText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
    marginHorizontal: 8,
  },
});

export default CustomHeader;
