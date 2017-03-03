import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const FourthScene = ({ goBack, fourthOne, fourthTwo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fourth Scene</Text>
      <Text>This Path Ends Here</Text>
        <Button
          title='Back'
          onPress={goBack}
          style={styles.button}
        />
        <Text>Or... Check these out</Text>
        <Button
          title='Fourth Scene Part 1'
          onPress={fourthOne}
          style={styles.button}
        />
        <Button
          title='Fourth Scene Part 2'
          onPress={fourthTwo}
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

module.exports = FourthScene;
