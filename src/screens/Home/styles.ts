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
        marginTop: 10,
        paddingHorizontal: 8,
        paddingVertical: 4,
    }
})