import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableHighlight, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" onPress={() => console.log("Tapped")}/>
    </SafeAreaView>
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
