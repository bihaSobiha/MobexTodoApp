import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3bbfb2',
        alignItems: 'center',
        justifyContent: 'center',
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
    // footer: {
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     zIndex: 10,
    // },
    textInput: {
        // alignSelf: 'stretch',
        // color: '#fff',
        // padding: 20,
        // backgroundColor: '#252525',
        // borderTopWidth: 2,
        // borderTopColor: '#ededed',
        margin: 10,
        marginBottom: 0,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 18,
        // color: 'black',
    },
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 3,
    },
    list: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        flex: 1,
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
});