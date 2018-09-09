import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'



class SettingScreen extends React.Component {
  

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
				<Text>This is Setting Screen..</Text>
		  </Content>
	  </Container>

    )
  }

}

export default SettingScreen;


const styles = StyleSheet.create({
  icon: {
	top: 10,
	alignSelf: 'flex-start'
  },
});