import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';


class App extends React.Component {
  navigation
  _onPress = () =>{
    this.props.navigation.push('next')
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='下一頁' onPress={this._onPress}/>
        <Text>Open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class Next extends React.Component {
  render() {
    return(
      <View>
        <Button title="goBack" onPress={() => this.props.navigation.goBack()} />
        <Text>hi!</Text></View>
    )
  }
}

export default createStackNavigator({
  home: App,
  next: Next
})
