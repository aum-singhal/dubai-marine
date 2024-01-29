import React from 'react';
import {SafeAreaView, StatusBar, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from './components/pages/home/home';
import QrScannerPage from './components/pages/qrScanner/qrScanner';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
    flex: 1
  };

  const Stack = createNativeStackNavigator();

  // Array to store all the navigation screens 
  const StackComponents = [
    {name:"Home", component: HomePage},
    {name:"QrScanner", component: QrScannerPage, options: {headerShown: true}}
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

    {/* ============ Main Stack Navigator =========== */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          {
            StackComponents.map((item, index)=>{
              return <Stack.Screen key={index} name={item.name} component={item.component} options={item.options} />
            })
          }
        </Stack.Navigator>
      </NavigationContainer>
    
    </SafeAreaView>
  );
}

export default App;
