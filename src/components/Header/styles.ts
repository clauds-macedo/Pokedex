import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
    },
    header: {
        display: 'flex',
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
        borderWidth: 0.4,
        borderRadius: 8,
        marginVertical: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontFamily: theme.fonts.regular400,
    },
    searchBox: {
        display: 'flex',
        flexDirection: 'row'
    },

})