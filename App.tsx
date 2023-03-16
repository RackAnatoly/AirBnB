import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Post} from './src/components/Post';
import {HomeScreen} from './src/screens/Home';
import feed from './assets/data/feed';
import {SearchResultScreen} from './src/screens/SearchResults';
import {DestinationSearchScreen} from './src/screens/DestinationSearch';
import {GuestsScreen} from './src/screens/Guests';
import 'react-native-gesture-handler';
import {Router} from './src/navigation/Router';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}

export default App;
