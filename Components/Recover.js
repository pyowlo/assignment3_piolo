

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const Recovery = ({ onSwitch }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text variant="headlineMedium" style={styles.recoveryText}>Trouble logging in?</Text>
    </View>
    <TextInput label="Username, or Email" mode="outlined" style={styles.input} />
    <Button mode="contained" style={styles.button} onPress={() => {}}textColor="#FFF">
      Send Recovery Link
    </Button>
    <Button mode="text" onPress={onSwitch}textColor="#FFF">
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
    alignItems: 'center',
    marginBottom: 20,
  },
  recoveryText: {
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    marginBottom: 16,
    width: 200,
    alignSelf: 'center',
    backgroundColor: '#000000',
  },
});

export default Recovery;
