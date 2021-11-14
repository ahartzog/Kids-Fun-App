import React from 'react';
import { Audio, AVPlaybackNativeSource } from 'expo-av';
import { Pressable } from 'react-native';
import { startCase } from 'lodash';
import * as sounds from '../../../assets/sounds';
import { Text, View } from '../../../components/Themed';
import styles from '../../../lib/styles';

const SoundsScreen = () => {
  const [sound, setSound] = React.useState<Audio.Sound>();

  async function playSound(soundFile: AVPlaybackNativeSource) {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);

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

      {Object.entries(sounds).map(([key, value]) => {
        return (
          <Pressable
            key={key}
            style={[styles.buttonStyles.primary, styles.layoutStyles.mt10]}
            onPress={() => playSound(value)}
          >
            <Text style={{ fontSize: 20 }}>{startCase(key)}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export { SoundsScreen };
