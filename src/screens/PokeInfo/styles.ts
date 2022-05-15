import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 33,
    backgroundColor: theme.types.grass,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    position: 'relative',
    zIndex: 3
  },
  headerTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    marginLeft: 20,
    color: theme.colors.background,
    textTransform: "capitalize",
  },
  headerId: {
    position: "absolute",
    right: 24,
    fontFamily: theme.fonts.title700,
    fontSize: 12,
    color: theme.colors.background
  },
  pokeball: {
    position: 'absolute',
    right: 8,
    top: 10,
  },
  squareContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  square: {
    width: '97%',
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    marginBottom: 8,
    borderRadius: 30
  },
  pokeImage: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: '15%',
    left: 90,
    zIndex: 5
  },
  pokeTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,

  }
})