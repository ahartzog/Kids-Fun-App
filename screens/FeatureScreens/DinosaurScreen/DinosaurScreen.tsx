import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from '../../../components/Themed';
import styles from '../../../lib/styles';
import { Pressable } from 'react-native';
import { useApiData } from '../../../lib/api/useApiData';

interface DinosaurData {
  Description: string;
  Name: string;
}
const DinosaurScreen = () => {
  //Get a random dinosaur

  const [dinoCount, setDinosaurCount] = useState(1);

  const urlString =
    'https://dinosaur-facts-api.shultzlab.com/dinosaurs/random' +
    '?count=' +
    dinoCount;
  const { data, isError, isLoading } = useApiData(urlString);

  const dinoData = data as DinosaurData[];
  const getNewDino = () => {
    setDinosaurCount((e) => e + 1);
  };
  console.log('Random dinosaur?', data);
  if (isError) {
    return (
      <View>
        <Text>Error getting Dinosaurs :-(</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>DINOSAURS</Text>
      <View>
        <View>
          <Text
            style={[
              styles.typographyStyles.h1,
              styles.typographyStyles.textCenter,
            ]}
          >
            {dinoData[0].Name}
          </Text>
        </View>
        <View style={styles.layoutStyles.mt10}>
          <Text>{dinoData[0].Description}</Text>
        </View>
      </View>
      <Pressable style={styles.buttonStyles.primary} onPress={getNewDino}>
        <Text>Get Another Dinosaur</Text>
      </Pressable>
    </View>
  );
};

export { DinosaurScreen };
