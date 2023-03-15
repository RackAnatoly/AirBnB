import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';

export interface GuestsScreenProps {}

export function GuestsScreen(props: GuestsScreenProps) {
  const [adults, setAdults] = React.useState(0);
  const [childrens, setChildrens] = React.useState(0);
  const [infants, setInfants] = React.useState(0);

  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Childrens</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setChildrens(Math.max(0, childrens - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{childrens}</Text>
          <Pressable
            onPress={() => setChildrens(childrens + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: '#8d8d8d'}}>Under 2</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'grey'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: 'grey'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
