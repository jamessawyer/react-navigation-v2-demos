import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          主页
        </Text>
      </View>
    );
  }
}
class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          设置页面
        </Text>
      </View>
    );
  }
}
class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          个人主页
        </Text> 
      </View>
    );
  }
}
class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          主页
        </Text>
      </View>
    );
  }
}


export default createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home' color={tintColor} size={24} />
      ),
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: '设置',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-settings' color={tintColor} size={24} />
      ),
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-list-box' color={tintColor} size={24} />
      ),
    }
  },
  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarLabel: '反馈',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-microphone' color={tintColor} size={24} />
      ),
    }
  },
}, {
  initialRouteName: 'Settings',
  // order: ['Settings', 'Home'],
  activeTintColor: 'black',
  inactiveTintColor: '#333',
  // 缩放图标的效果
  shifting: true, // 默认在大于3个路由时为true, 如果显式的设置为true了则少于3个时也会显示效果
  barStyle: {
    backgroundColor: 'orange',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
