import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Header, Button } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from '../src/style/style';
import { DrawerActions } from 'react-navigation-drawer'

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'HOME',
    };
  }

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
        <Header style={styles.header}>
          <Text style={styles.headerText}>MENU</Text>
        </Header>
        <ScrollView>
          <View>
            <Button iconLeft transparent onPress={this.navigateToScreen('HOME')}>
              <Icon size={30} name='home' style={(this.state.Name=='HOME')? styles.buttonPress: styles.navItemStyle} />
              <Text style={(this.state.Name=='HOME')? styles.buttonPress: styles.navItemStyle}>Home</Text>
            </Button>
          </View>
          <View>
            <Button iconLeft transparent onPress={this.navigateToScreen('ABOUT')}>
              <Icon size={30} name='cogs' style={(this.state.Name=='ABOUT')? styles.buttonPress: styles.navItemStyle} />
              <Text style={(this.state.Name=='ABOUT')? styles.buttonPress: styles.navItemStyle}>Settings</Text>
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