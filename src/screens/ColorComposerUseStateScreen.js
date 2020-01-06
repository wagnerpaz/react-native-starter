import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const ColorComposerScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const changeColor = (color, change) => {
        switch(color) {
            case 'red': setRed( Math.max( Math.min(red + change, 255), 0) ); break;
            case 'green': setGreen( Math.max( Math.min(green + change, 255), 0) ); break;
            case 'blue': setBlue( Math.max( Math.min(blue + change, 255), 0) ); break;
        }
    }

    return (
        <View>
            <ColorCounter color="Red" onIncrease={() => changeColor('red', COLOR_INCREMENT)} onDecrease={() => changeColor('red', -COLOR_INCREMENT)}/>
            <ColorCounter color="Green" onIncrease={() => changeColor('green', COLOR_INCREMENT)} onDecrease={() => changeColor('green', -COLOR_INCREMENT)}/>
            <ColorCounter color="Blue" onIncrease={() => changeColor('blue', COLOR_INCREMENT)} onDecrease={() => changeColor('blue', -COLOR_INCREMENT)}/>
            <View style={{width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorComposerScreen;