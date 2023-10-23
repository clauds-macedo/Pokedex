import { StyleSheet, StatusBar } from "react-native";
import { theme } from "../../global/theme";

console.log(StatusBar.currentHeight);

const statusBarHeight = () => {
  const averageHeight = 28
  if(StatusBar.currentHeight) {
    return StatusBar.currentHeight
  }
  return averageHeight
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: statusBarHeight() + 8 
  },
  header: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 16,
    position: 'relative',
    zIndex: 3
  },
  headerTitleContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  headerTitle: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.background,
    textTransform: "capitalize",
  },
  headerId: {
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
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  square: {
    width: '97%',
    height: '63%',
    alignItems: 'center',
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.colors.background,
    marginBottom: 8,
    borderRadius: 30
  },
  pokeImage: {
    width: 220,
    height: 220,
    position: 'absolute',
    top: "14%",
    alignSelf: "center",
    zIndex: 5
  },
  pokeTypeContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    marginTop: 16,
    marginBottom: 16,
    textAlign: "center"

  }
})