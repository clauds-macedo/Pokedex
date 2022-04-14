import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
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
    pokemonContainer: {
        width: '100%',
        paddingTop: 8,
        paddingLeft: 8,
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    searchBox: {
        display: 'flex',
        flexDirection: 'row'
    },
    containerAnimation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
    },
    animation: {
        width: '60%',
        marginRight: 20
    },
    loadingText: {
        fontFamily: theme.fonts.regular400,
        fontSize: 20
    }
})