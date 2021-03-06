import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    //For all the screens
    container: {            
        flex: 1,
    },
    header: {
        backgroundColor: '#3bbfb2',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flexDirection: 'column',
        marginBottom: 100,
        paddingVertical: 20,
    },
    footer: {
        backgroundColor: '#3bbfb2',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderTopColor: '#ddd',
    },

    //Add screen and update scteen form style
    textInput: {
        margin: 10,
        marginBottom: 0,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
    },

    //Home screen add button style
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 150,
        bottom: 10,
        backgroundColor: '#3bbfb2',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },

    //List component style
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 3,
    },
    listText: {
        paddingLeft: 20,
        borderLeftWidth: 8,
        borderLeftColor: '#3bbfb2',
        flex: 1,
        fontSize: 20,
    },
    listDelete: {
        flex: 1,
        position: 'absolute',
        padding: 10,
        top: 10,
        right: 10,
        bottom: 10,
        backgroundColor: '#3bbfb2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listDeleteText: {
        color: 'black',
        fontSize: 18,
    },
    listUpdate: {
        flex: 1,
        position: 'absolute',
        padding: 10,
        top: 10,
        right: 45,
        bottom: 10,
        backgroundColor: '#3bbfb2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //login screen style
    loginContainer: {
        flex: 1,
        backgroundColor: '#3bbfb2',
        justifyContent: "center",
        paddingRight: 20,
        paddingLeft: 20,
    },
    loginInputStyle: {
        backgroundColor: '#fff',
        marginBottom: 15,
        fontSize: 20,
        paddingLeft: 15,
    },
    loginBtnText: {
        backgroundColor: '#eceef1',
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 18,
        marginTop: 25,
        color: '#26ae90',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    //validation style
    error: {
        borderWidth: 3,
        borderColor: 'red',
    },
    errorText: {
        color: "red",
        fontSize: 16
    },

    //Drawer menue style
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    navItemStyle: {
        padding: 10,
        fontSize: 17,
        color: '#26ae90',
        fontWeight: 'bold',
    },
    buttonPress: {
        padding: 10,
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },

    //Logout screen style
    cardHeader: {
        alignItems: "center",
        justifyContent: "center",
    },
    cardText: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    profileImage: {
        backgroundColor: "#bcbec1",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        marginBottom: 20
    },
});