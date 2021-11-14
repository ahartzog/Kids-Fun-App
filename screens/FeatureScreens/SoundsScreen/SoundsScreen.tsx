import React from 'react';
import { Audio } from 'expo-av';
import { Pressable } from 'react-native';
import { fart1 } from '../../../assets/sounds';
import { Text, View } from '../../../components/Themed';
import styles from '../../../lib/styles';
const SoundsScreen = () => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(fart1);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>Sounds</Text>
      <Pressable style={styles.buttonStyles.primary} onPress={playSound}>
        <Text style={{ fontSize: 20 }}>Fart 1</Text>
      </Pressable>
    </View>
  );
};

export { SoundsScreen };
