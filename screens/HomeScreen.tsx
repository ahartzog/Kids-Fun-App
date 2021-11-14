import * as React from 'react';
import { StyleSheet } from 'react-native';
import styles from '../lib/styles';
import EditScreenInfo from '../components/EditScreenInfo';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { FeatureCard } from '../components/FeatureCard';
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>Select your Feature</Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <FeatureCard title='Dinosaurs'>
          <FontAwesome5 name='canadian-maple-leaf' size={60} color='white' />
        </FeatureCard>
        <FeatureCard title='Sounds'>
          <FontAwesome5 name='soundcloud' size={60} color='white' />
        </FeatureCard>
        <FeatureCard title='Space'>
          <FontAwesome5 name='space-shuttle' size={60} color='white' />
        </FeatureCard>
        <FeatureCard title="How It's Made">
          <FontAwesome5 name='head-side-virus' size={40} color='white' />
        </FeatureCard>
      </View>

      <View style={styles.layoutStyles.mt10}>
        <Text>Click one of the features above to play with it!</Text>
      </View>
    </View>
  );
}
