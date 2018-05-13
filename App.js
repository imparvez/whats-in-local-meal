import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Recipe from './src/Recipe';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
          flexDirection: 'row',
          padding: 20,
        }}>
        <Recipe />
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
