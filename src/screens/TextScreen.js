import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    
    return (
        <View>
            <Text>Text Screen</Text>
            <Text>Enter your name: </Text>
            <TextInput
                value={name}
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length < 3 ? <Text>The name should have at least 3 characters.</Text> : null}
            <Text>My name is {name}.</Text>
        </View>
    );
};

const styles  = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;