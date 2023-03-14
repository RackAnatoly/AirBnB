import * as React from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import searchResults from '../../../assets/data/search';
import {styles} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

export interface DestinationSearchScreenProps {}

export function DestinationSearchScreen(props: DestinationSearchScreenProps) {
  const [inputText, setInputText] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
