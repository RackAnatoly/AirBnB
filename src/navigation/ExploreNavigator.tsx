import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/Home';
import {SearchResultScreen} from '../screens/SearchResults';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';

export const Stack = createStackNavigator();

export default function ExploreNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
}
