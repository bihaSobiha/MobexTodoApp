import React, { Component } from 'react';
import styles from '../src/style/style';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import AddScreen from './screens/add';
import UpdateScreen from './screens/update';
import AboutScreen from './screens/about';
import LoginScreen from './screens/login';
import observableListStore from './mobx/TodoStore';
import { Provider } from 'mobx-react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const MainTapNavigator = createBottomTabNavigator({
    HOME: { screen: HomeScreen },
    ABOUT: { screen: AboutScreen },
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 18,
                color: 'white'
            },
            style:styles.footer,
        }
    },
);

MainTapNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return {
        headerTitle: routeName
    };
}

const AboutTapNavigator = createBottomTabNavigator({
    ABOUT: { screen: AboutScreen },
    HOME: { screen: HomeScreen },
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 18,
                color: 'white'
            },
            style:styles.footer,
        }
    },
);

AboutTapNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes
    [navigation.state.index];
    return {
        headerTitle: routeName
    };
}

const MainStackNavigator = createStackNavigator({
    Home: MainTapNavigator,
    // About: AboutScreen
},
    // {
    //     headerMode: 'none'
    // },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: styles.header,
                headerTitleStyle: styles.headerText,
                headerLeft: <Icon style={styles.headerText} size={30} name="bars" onPress={() => navigation.openDrawer()} />
            }
        },
    }
);

const AboutStackNavigator = createStackNavigator({
    // About: MainTapNavigator
    About: AboutTapNavigator
},
    // {
    //     headerMode: 'none'
    // },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerStyle: styles.header,
                headerTitleStyle: styles.headerText,
                headerLeft: <Icon style={styles.headerText} size={30} name="bars" onPress={() => navigation.openDrawer()} />
            }
        },
    }
);

const MainDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MainStackNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: () => <Icon name="dashboard" size={17} />
        }
    },
    About: {
        screen: AboutStackNavigator,
        navigationOptions: {
            drawerLabel: 'About',
            drawerIcon: () => <Icon name="cog" size={17} />
        }
    }
});

const MainSwitchNavigator = createSwitchNavigator({
    login:{screen: LoginScreen},
    home: { screen: MainDrawerNavigator },
    add: { screen: AddScreen },
    update: { screen: UpdateScreen },
});

const AppContainer = createAppContainer(MainSwitchNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider observableListStore={observableListStore}>
                <AppContainer />
            </Provider>
        );
    }
}