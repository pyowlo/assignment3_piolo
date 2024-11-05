

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Recovery = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Trouble logging in?</Text>
    </View>
    <TextInput label="Username, or Email" mode="outlined" style={styles.input} />
    <Button mode="contained" style={styles.button} onPress={() => {}}>
      Send Recovery Link
    </Button>
    <Button mode="text" onPress={onSwitch}>
      Back to Login
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    alignItems: 'center', // Center the text
    marginBottom: 20,
  },
  recoveryText: {
    fontWeight: 'bold', // Make the text bold
    color: 'white',
  },
  input: {
    marginBottom: 16,
    width: '90%', // Set width to 80% of the container (1cm less on both sides)
    alignSelf: 'center', // Center the input boxes
  },
  button: {
    marginBottom: 16,
    width: 200, // Set width to 60 pixels
    alignSelf: 'center', // Center the button
  },
});

export default Recovery;
