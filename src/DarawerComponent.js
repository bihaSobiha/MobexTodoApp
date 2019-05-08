//This file for manage Drawer Menu
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Header, Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../src/style/style';
import { DrawerActions } from 'react-navigation-drawer'
import {toDoAppMessages as messages} from './constants/messages';
import {toDoAppConstants as constants} from './constants/constants';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: constants.HOME_SCREEN, //set default route to home screen
    };
  }

  //Navigate acording to the drawer item then close the drawer
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
    if (navigateAction.routeName) {
      this.setState({ Name: route })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header style={[styles.header,styles.cardHeader]}>
          <Text style={styles.headerText}>{messages.MENU_TITLE}</Text>
        </Header>
        <ScrollView>
          <View>
            <Button iconLeft transparent onPress={this.navigateToScreen(constants.HOME_SCREEN)}>
              <Icon size={30} name='home' style={(this.state.Name==constants.HOME_SCREEN)? styles.buttonPress: styles.navItemStyle} />
              <Text style={(this.state.Name==constants.HOME_SCREEN)? styles.buttonPress: styles.navItemStyle}>{messages.HOME_LABLE}</Text>
            </Button>
          </View>
          <View>
            <Button iconLeft transparent onPress={this.navigateToScreen(constants.ABOUT_SCREEN)}>
              <Icon size={30} name='cogs' style={(this.state.Name==constants.ABOUT_SCREEN)? styles.buttonPress: styles.navItemStyle} />
              <Text style={(this.state.Name==constants.ABOUT_SCREEN)? styles.buttonPress: styles.navItemStyle}>{messages.SETTINGS_LABLE}</Text>
            </Button>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={styles.navItemStyle}>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;