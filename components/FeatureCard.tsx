import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
type Props = {
  title: string;
  children?: React.ReactChild;
};

const FeatureCard = (props: Props) => {
  return (
    <View style={localStyles.container}>
      <Text style={localStyles.title}>{props.title}</Text>
      <View style={localStyles.iconContainer}>{props.children}</View>
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
