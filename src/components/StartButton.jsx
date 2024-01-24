import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const StartButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#EAEDED',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
});
export default StartButton;
