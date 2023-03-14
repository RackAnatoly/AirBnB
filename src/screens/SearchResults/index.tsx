import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import {Post} from '../../components/Post';

export interface SearchResultScreenProps {}

export function SearchResultScreen(props: SearchResultScreenProps) {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}
