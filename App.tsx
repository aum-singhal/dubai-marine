import React from 'react';
import {SafeAreaView, StatusBar, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from './components/pages/home/home';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
    padding: 10,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

{/* ============ Home Screen =========== */}
      <HomePage />
    
    </SafeAreaView>
  );
}

export default App;
