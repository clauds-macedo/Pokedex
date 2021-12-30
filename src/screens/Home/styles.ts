import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textLogo: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        marginLeft: 10
    },
    search: {
        width: '90%',
        borderWidth: 0.4,
        borderRadius: 8,
        marginVertical: 16,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    pokemonContainer: {
        width: 120,
        height: 150,
        paddingTop: 8,
        paddingLeft: 8,
        justifyContent: 'center'
    },
    pokemonCard: {
        height: 112,
        width: 328,
        paddingTop: 8,
    },
    pokemon: {
        width: 104,
        height: 112,
        borderRadius: 8,
        borderWidth: 0.6,
        paddingLeft: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangle: {
        position: "absolute",
        width: 104,
        height: 24,
        bottom: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#000',
        alignItems: 'center'
    }
})