import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/Home';
import {SearchResultScreen} from '../screens/SearchResults';

const Stack = createStackNavigator();

export default function ExploreNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultScreen}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
}
