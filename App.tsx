import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Home';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Suas telas de navegação */}
        <HomeScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
