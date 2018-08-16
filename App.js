import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name='ios-home' size={24} style={{color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          主页
        </Text>
      </View>
    );
  }
}
class SettingsScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name='ios-settings' size={24} style={{color: tintColor}}/>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          设置页面
        </Text>
      </View>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center',
          justifyContent: 'center' }}>
      <Image source={require('./telphone.png')} resizeMode='contain'
        style={{
          height: 128,
          width: 128,
          borderRadius: 64,
          
      }} />
    </View> 
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: 'orange'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
