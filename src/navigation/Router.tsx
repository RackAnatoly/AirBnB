import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import {DestinationSearchScreen} from '../screens/DestinationSearch';

export interface RouterProps {}

const Stack = createStackNavigator();
export function Router(props: RouterProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
