/**
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

import ClockScreen from './src/screens/ClockScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <ClockScreen />
    </SafeAreaProvider>
  );
}

export default App;
