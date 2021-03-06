import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! Cool!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
