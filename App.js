import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
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
class Settings extends Component {
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

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页', // tab的标签名
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name='ios-home' color={tintColor} size={24} />
      ),
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: '设置', // tab的标签名
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-settings' color={tintColor} size={24} />
      ),
    }
  },
}, { // 路由配置
  initialRouteName: 'Settings', // 初始tab bar 页面
  order: ['Settings', 'Home'], // tab bar的显示顺序
  navigationOptions: {
    tabBarVisible: true, // 是否显示tab bar 默认是true
  },
  tabBarOptions: {
    // 用来style tab bar
    activeTintColor: 'orangered', // 激活时的样式
    inactiveTintColor: 'grey',
    swipeEnabled: true,
    tabStyle: {
      // backgroundColor: 'pink'
    },
    style: {
      backgroundColor: 'blue',
    },
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
