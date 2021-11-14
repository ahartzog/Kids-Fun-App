import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { Text, View } from '../components/Themed';
type Props = {
  title: string;
  children?: React.ReactChild;
  onPress?: () => void;
};

const FeatureCard = (props: Props) => {
  return (
    <Pressable style={localStyles.container} onPress={props.onPress}>
      <Text style={localStyles.title}>{props.title}</Text>
      <View style={localStyles.iconContainer}>{props.children}</View>
    </Pressable>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flexBasis: '40%',
    height: 150,
    borderWidth: 2,
    borderColor: '#FFF',
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
  },
  iconContainer: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
  },
});

export { FeatureCard };
