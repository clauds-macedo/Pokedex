import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container: {
        height: 112,
        width: 104,
        marginTop: 8,
        marginRight: 8,
    },
    card: {
        width: 104,
        height: 112,
        borderRadius: 8,
        borderWidth: 0.8,
        paddingLeft: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangle: {
        opacity: 0.9,
        position: "absolute",
        width: 104,
        height: 24,
        bottom: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 85,
        height: 85
    },
    text: {
        textTransform: "capitalize",
        fontFamily: 'Poppins_400Regular',
        fontSize: 10,
        color: '#fff'
    },
    id: {
        display: 'flex',

    },
    idText: {
        fontFamily: theme.fonts.regular400,
        fontSize: 12,
        marginLeft: 60 //consertar isso
    
    }


})