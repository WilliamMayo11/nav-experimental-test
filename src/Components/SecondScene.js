import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const SecondScene = ({ onPress, fourthScene, goBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second Scene</Text>
        <Button
          title='Third Scene'
          onPress={onPress}
          style={styles.button}
        />
        <Button
          title='Fourth Scene'
          onPress={fourthScene}
        />
        <Button
          title='Back'
          onPress={goBack}
          style={styles.button}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 600,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    height: 40,
    width: 100,
    color: '#F7A213',
  },
  title: {
    fontSize: 30,
  }
})

module.exports = SecondScene;
