import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const FourthTwo = ({ goBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fourth Scene Detail 2</Text>
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

module.exports = FourthTwo;
