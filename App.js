import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ScreenOne"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}