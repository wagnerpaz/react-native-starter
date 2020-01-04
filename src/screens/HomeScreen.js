import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          console.log('Button pressed');
          navigation.navigate('Components');
        }}
      />
      <Button
        title="Go to List Demo"
        onPress={ () => {
          navigation.navigate('List');
        }}
      />
      <Button
        title="Go to Image Demo"
        onPress={ () => {
          navigation.navigate('Image');
        }}
      />
      <Button
        title="Go to Counter Demo"
        onPress={ () => {
          navigation.navigate('Counter');
        }}
      />

      {/* DEMONSTRATE THE USE OF TouchableOpacity
      <TouchableOpacity
        onPress={() => {
          console.log('List pressed')
          navigation.navigate('List');
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
