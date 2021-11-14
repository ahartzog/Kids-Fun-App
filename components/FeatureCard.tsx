import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
type Props = {
  title: string;
};

const FeatureCard = (props: Props) => {
  return (
    <View style={localStyles.container}>
      <Text style={localStyles.title}>{props.title}</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flexBasis: '40%',
    height: 150,
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop: 20,
    padding: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
  },
});

export { FeatureCard };
