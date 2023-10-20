import { StyleSheet } from "react-native";
import { theme } from '../../../../global/theme';

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogo: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        marginLeft: 10,
        marginTop: 5
    },
    search: {
        width: '90%',
        fontFamily: theme.fonts.regular400,
    },



})