import { StyleSheet } from "react-native";

export const AppTheme = {
  colors: {
    primary: "#5B2E91", // deep purple
    background: "#e7e7ebff", // soft light purple
    card: "#fff",
    text: "#232946", // dark blue
    border: "#E0E0E0",
    inputBg: "#F6F7FB",
    inputBorder: "#B0B8D1",
    error: "#E63946",
    header: "#5B2E91", // same as primary
    button: "#5B2E91", // deep purple
    buttonText: "#fff",
    buttonSecondary: "#E0E7FF", // light blue
    buttonSecondaryText: "#5B2E91",
  },
  spacing: (factor: number) => factor * 8,
  borderRadius: 14,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.background,
    padding: AppTheme.spacing(2),
  },
  card: {
    backgroundColor: AppTheme.colors.card,
    borderRadius: AppTheme.borderRadius,
    padding: AppTheme.spacing(2),
    marginVertical: AppTheme.spacing(1),
    shadowColor: "#5B2E91",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  input: {
    backgroundColor: AppTheme.colors.inputBg,
    borderColor: AppTheme.colors.inputBorder,
    borderWidth: 1,
    borderRadius: AppTheme.borderRadius,
    padding: AppTheme.spacing(1.5),
    marginVertical: AppTheme.spacing(1),
    fontSize: 16,
    color: AppTheme.colors.text,
  },
  button: {
    backgroundColor: AppTheme.colors.button,
    borderRadius: AppTheme.borderRadius,
    paddingVertical: AppTheme.spacing(1.5),
    alignItems: "center",
    marginVertical: AppTheme.spacing(1),
    shadowColor: "#3D5AFE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: AppTheme.colors.buttonText,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: AppTheme.colors.primary,
    marginBottom: AppTheme.spacing(2),
    textAlign: "center",
    letterSpacing: 0.5,
  },
  // userItem and userName styles moved to UsersList.tsx
});
