import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { AppTheme } from "./AppTheme";

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<Props> = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress} activeOpacity={0.8}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppTheme.colors.primary,
    borderRadius: AppTheme.borderRadius,
    paddingVertical: AppTheme.spacing(1.5),
    alignItems: "center",
    marginVertical: AppTheme.spacing(1),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomButton;
