import React from 'react';
import {AppFontLoader} from './src/util/AppFontLoader.js';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import TimeList from './components/TimeList/index.js'

export default class App extends React.Component {

  render() {
    return (
      <AppFontLoader>
        <View style={styles.container}>
          <TimeList > String here </TimeList>
        </View>
      </AppFontLoader>
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

AppRegistry.registerComponent('zmedminder',() => App);
