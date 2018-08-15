import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class LoginScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>登录页面</Text>
        <Button title='导航到主页' onPress={() => this.props.navigation.navigate('Home')} />
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
