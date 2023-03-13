import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Post} from './src/components/Post';
import {HomeScreen} from './src/screens/Home';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post />
      </SafeAreaView>
    </>
  );
}

export default App;
