import { StyleSheet } from "react-native";
import { theme } from "../../../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100
    },
    animation: {
        width: "100%"
    },
    text: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.darkGray,
        fontSize: 26,
        textAlign: "center"
    }
})