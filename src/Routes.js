//This file for manage Navigation
import React, { Component } from 'react';
import styles from '../src/style/style';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import AddScreen from './screens/add';
import UpdateScreen from './screens/update';
import AboutScreen from './screens/about';
import LoginScreen from './screens/login';
import observableListStore from './mobx/TodoStore';
import { Provider } from 'mobx-react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import customDrawer from './DarawerComponent';
import LogoutScreen from './screens/logout';
import { Text} from 'react-native';
import {toDoAppConstants as constants} from './constants/constants';
import {toDoAppMessages as messages} from './constants/messages';

//Main screen stack navigation
const MainStackNavigator = createStackNavigator({
    HOME: { screen: HomeScreen },
    ADD: { screen: AddScreen },
    UPDATE: { screen: UpdateScreen },
    LOGOUT:{screen: LogoutScreen},
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                title: `${navigation.state.routeName}`,
                headerStyle: styles.header,
                headerTitleStyle: styles.headerText,
                headerLeft: <Icon style={styles.headerText} size={30} name="bars" onPress={() => navigation.openDrawer()} />,
                headerRight: <Icon style={styles.headerText} size={40} name="sign-out" onPress={() => navigation.navigate(constants.LOGOUT_SCREEN)}><Text>{messages.LOGOUT_LABLE}</Text></Icon>
            }
        },
    }
);

//About stack navigation
const AboutStackNavigator = createStackNavigator({
    ABOUT: { screen: AboutScreen },
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                title: `${navigation.state.routeName}`,
                headerStyle: styles.header,
                headerTitleStyle: styles.headerText,
                headerLeft: <Icon style={styles.headerText} size={30} name="bars" onPress={() => navigation.openDrawer()} />
            }
        },
    }
);

//Tap Navigation
const MainTapNavigator = createBottomTabNavigator({
    HOME: { screen: MainStackNavigator },
    ABOUT: AboutStackNavigator,
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 18,
                color: 'white',
            },
            style: styles.footer,
        }
    },
);

//Drawer Navigation
const MainDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MainTapNavigator,
    }
},
    {
        drawerPosition: 'left',
        contentComponent: customDrawer,
    },
);

//Login screen stack navigator
const StackNavigator = createStackNavigator({
    // login: { screen: LoginScreen },
    drawer: { screen: MainDrawerNavigator },
},
    {
        headerMode: 'none'
    }
)

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider observableListStore={observableListStore}>
                <AppContainer />
            </Provider>
        );
    }
}