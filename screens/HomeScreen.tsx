import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
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
        <FeatureCard
          onPress={() => navigation.navigate('Dinosaurs')}
          title='Dinosaurs'
        >
          <Image
            source={require('../assets/images/diplodocus.png')}
            height={60}
            width={60}
            style={{ height: 60, width: 60 }}
          />
        </FeatureCard>
        <FeatureCard
          title='Sounds'
          onPress={() => navigation.navigate('Sounds')}
        >
          <FontAwesome5 name='soundcloud' size={60} color='white' />
        </FeatureCard>
        <FeatureCard title='Space'>
          <FontAwesome5 name='space-shuttle' size={60} color='white' />
        </FeatureCard>
        <FeatureCard
          title="How It's Made"
          onPress={() => navigation.navigate('HowItsMade')}
        >
          <FontAwesome5 name='head-side-virus' size={40} color='white' />
        </FeatureCard>
        <FeatureCard
          title='Dino Egg Hunt'
          onPress={() => navigation.navigate('EggHunt')}
        >
          <FontAwesome5 name='eye' size={40} color='white' />
        </FeatureCard>
      </View>

      <View style={styles.layoutStyles.mt10}>
        <Text>Click one of the features above to play with it!</Text>
      </View>
    </View>
  );
}
