import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
//import styles from '../css/main


class HomeScreen extends React.Component {
  
//https://reactnavigation.org/docs/en/drawer-based-navigation.html

  render() {
    return (
      <Container>
	  <Header>
	   <Left>
			<Icon style={styles.icon} name="ios-menu"  onPress={() => this.props.navigation.toggleDrawer()} />
	   </Left>
	  </Header>
	  
		  <Content contentContainerStyle={{ 
			flex: 1, 
			alignItems: 'center', 
			justifyContent: 'center', 
			}}>
				<Text>This is My Home Screen....</Text>
		  </Content>
	  </Container>
    )
  }

}

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
	top: 10,
	alignSelf: 'flex-start',
	right: 0
  },
});
