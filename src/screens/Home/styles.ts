import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center'
    },
    headerContainer: {
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
    changePage: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        flexDirection: 'row'
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
    modalView: {
        flex: 0.7, 
        backgroundColor: '#fff', 
        width: 300, 
        borderRadius: 15,
        padding: 12
    },
    modalText: {
        fontSize: 24,
        fontFamily: 'Poppins_400Regular',
        marginBottom: 30
    },
    genChoose: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    genButton: {
        borderWidth: 0.3,
        paddingHorizontal: 12,
        borderRadius: 20
    }
})