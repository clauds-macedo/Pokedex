import { StyleSheet } from "react-native";
import { JumpingTransition } from "react-native-reanimated";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontFamily: theme.fonts.regular400,
    fontSize: 12,
    marginLeft: 8,
  },
  description: {
    color: theme.colors.gray500,
    fontSize: 10
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRightWidth: 1,
    borderRightColor: theme.colors.gray250,
  },
  rowInfo: {
    marginBottom: 10

  },
  abilities: {
    paddingHorizontal: 24,
  },
  abilitiesInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})