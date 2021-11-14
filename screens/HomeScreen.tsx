import * as React from 'react';
import { StyleSheet } from 'react-native';
import styles from '../lib/styles';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { FeatureCard } from '../components/FeatureCard';
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>Select your Feature</Text>
      <View
        style={styles.layoutStyles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <FeatureCard title='Dinosaurs' />
        <FeatureCard title='Sounds' />
        <FeatureCard title='Space' />
        <FeatureCard title="How It's Made" />
      </View>

      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
    </View>
  );
}
