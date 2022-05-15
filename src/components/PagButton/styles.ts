import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    marginRight: 4,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray250,
    borderRadius: 5,
  },
  text: {
    fontFamily: theme.fonts.regular400
  }
})