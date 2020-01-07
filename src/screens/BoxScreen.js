import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.child1}></View>
            <View style={styles.child2}></View>
            <View style={styles.child3}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    child1: {
        width: 50,
        height: 50,
        backgroundColor: 'red'
    },
    child2: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        top: 50,
    },
    child3: {
        width: 50,
        height: 50,
        backgroundColor: 'purple'
    },
});

export default BoxScreen;