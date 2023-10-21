import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.types.fighting,
        borderRadius: 8,
        marginTop: 24
    },
    text: {

        fontFamily: theme.fonts.regular400,
        fontSize: 16,
        color: "#fff"

    }
})