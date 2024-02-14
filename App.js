import { SafeAreaView, StatusBar} from 'react-native';
import HomePage from './pages/home/home';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Scanner from './pages/scanner/scanner';


export default function App() {
  const backgroundStyle = {
    backgroundColor: Colors.white,
    flex: 1
  };

  const Stack = createStackNavigator();
  const stackScreens = [
    {name: "Home", component : HomePage},
    {name: "Scanner", component: Scanner,  options: {headerShown: true}},
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor} 
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          {
            stackScreens.map((item, index)=> <Stack.Screen key={index} name={item.name} component={item.component} options={item.options} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
