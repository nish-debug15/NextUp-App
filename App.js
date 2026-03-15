import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GoalScreen from './src/screens/GoalScreen';
import TimeEnergyScreen from './src/screens/TimeEnergyScreen';
import NextActionScreen from './src/screens/NextActionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Goal"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          contentStyle: { backgroundColor: '#0A0A0F' },
        }}
      >
        <Stack.Screen name="Goal" component={GoalScreen} />
        <Stack.Screen name="TimeEnergy" component={TimeEnergyScreen} />
        <Stack.Screen name="NextAction" component={NextActionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}