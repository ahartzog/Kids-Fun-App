import React from 'react';
import { Text, View } from '../../../components/Themed';
import styles from '../../../lib/styles';
const SoundsScreen = () => {
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>Sounds</Text>
      <View
        style={styles.layoutStyles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
    </View>
  );
};

export { SoundsScreen };
