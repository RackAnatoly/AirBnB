import * as React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {styles} from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

export function HomeScreen({navigation}: any) {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.text}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('explore btn pressed')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
