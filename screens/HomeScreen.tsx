import * as React from 'react';
import { StyleSheet } from 'react-native';
import styles from '../lib/styles';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>Select your Feature</Text>
      <View
        style={styles.layoutStyles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />

      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  );
}
