import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Post} from './src/components/Post';
import {HomeScreen} from './src/screens/Home';
import feed from './assets/data/feed';
import {SearchResultScreen} from './src/screens/SearchResults';
import {DestinationSearchScreen} from './src/screens/DestinationSearch';
import {GuestsScreen} from './src/screens/Guests';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
}

export default App;
