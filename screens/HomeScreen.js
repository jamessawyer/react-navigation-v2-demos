import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class LoginScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>主页</Text>
        <Button title='返回到登录页面' onPress={() => this.props.navigation.goBack(null)} />
        <Button title='回到栈中最上层的路由' onPress={() => this.props.navigation.popToTop(null)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
