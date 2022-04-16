import React, { useState } from 'react';
import { Pressable } from 'react-native';

import { Text, View } from '../../../components/Themed';
import styles from '../../../lib/styles';

interface DinosaurData {
  Description: string;
  Name: string;
}
export const EggHuntScreen = () => {
  const onStartPress = () => {};
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>EGG HUNT</Text>
      <Pressable style={styles.buttonStyles.primary} onPress={onStartPress}>
        <Text>Get Another Dinosaur</Text>
      </Pressable>
    </View>
  );
};
