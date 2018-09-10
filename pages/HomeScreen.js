import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import {
  View,
  Image
} from "react-native";

import styles from '../css/style';
import Expo from "expo";

class HomeScreen extends React.Component {
  
//https://reactnavigation.org/docs/en/drawer-based-navigation.html

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  
  render() {
	  if (this.state.loading) {
      return <Expo.AppLoading />;
    }
	
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon style={styles.icon} name="ios-menu"  onPress={() => this.props.navigation.toggleDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title>Home Screen</Title>
          </Body>
          <Right />
	      </Header>
		  <Content contentContainerStyle={{ 
			flex: 1, 
			alignItems: 'center', 
			justifyContent: 'center', 
			}}>
				<Text style={styles.heading}>This is My Home Screen....</Text>
		  </Content>
	  </Container>
    )
  }

}

export default HomeScreen;


