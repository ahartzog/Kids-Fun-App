import React from 'react';
import { WebView } from 'react-native-webview';
import { Text, View } from '../../../components/Themed';
import styles from '../../../lib/styles';
import { useWindowDimensions } from 'react-native';

const HowItsMadeScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.layoutStyles.container}>
      <Text style={styles.layoutStyles.title}>How It's Made</Text>
      <WebView
        style={{ flex: 1, width }}
        //originWhitelist={['*']}
        source={{
          uri: 'https://www.youtube.com/results?search_query=how+it%27s+made',
          // baseUrl: 'https://www.youtube.com',
        }}
      />
    </View>
  );
};

export { HowItsMadeScreen };
