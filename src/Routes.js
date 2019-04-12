import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import AddScreen from './screens/add';
import UpdateScreen from './screens/update';
import observableListStore from './mobx/TodoStore';
import {Provider} from 'mobx-react';

const MainNavigator = createStackNavigator({
    home: { screen: HomeScreen },
    add: {screen: AddScreen},
    update: {screen: UpdateScreen},
},
    {
        headerMode: 'none'
    });

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider observableListStore={observableListStore}>
                <AppContainer />
            </Provider>
        );
    }
}