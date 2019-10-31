//Part 1 - Import dependencies
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

//Part 2 - Create a component
const ComponentsScreen = () => {
    const name = 'Wagner';

    return (
        <View>
            <Text style={styles.headerText}>Getting started with React Native!</Text>
            <Text style={styles.subHeaderText}>My name is {name}</Text>
        </View>
    );
};

//Part 3 - Create a stylesheet
const styles = StyleSheet.create({
    headerText: {
        fontSize: 45
    },
    subHeaderText: {
        fontSize: 20
    }
});

export default ComponentsScreen;
