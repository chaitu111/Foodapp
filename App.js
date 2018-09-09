import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View 
} 
from 'react-native';


// importing  Library 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator } from 'react-navigation'

// importing  Custom Screens
import HomeScreen from './pages/HomeScreen';
import SettingScreen from './pages/SettingScreen';


class App extends React.Component {
  render() {
    return (
      <MyNav />
    );
  }
}


const MyNav = createDrawerNavigator ({

  Home: { screen: HomeScreen },
  Setting: { screen: SettingScreen }
})

export default App;

const styles = StyleSheet.create({
  
});
