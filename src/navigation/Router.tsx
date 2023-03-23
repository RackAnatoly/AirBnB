import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import {DestinationSearchScreen} from '../screens/DestinationSearch';
import {GuestsScreen} from '../screens/Guests';
import {HomeTabNavigator} from './HomeTabNavigator';

export interface RouterProps {}

const Stack = createStackNavigator();

export function Router(props: RouterProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{
            title: 'How many people',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
