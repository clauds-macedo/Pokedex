import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 15
  },
  name: {
    textTransform: 'uppercase',
    fontFamily: theme.fonts.title700,
    fontSize: 16,
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: theme.colors.gray250
  },
  value: {
    fontFamily: theme.fonts.regular400,
    paddingHorizontal: 12,
    fontSize: 16,

  }
})