import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    //state === {red: 0, green: 0, blue: 0}
    //action === {type: 'change_red'||'change_green'||'change_blue', payload: number}

    switch(action.type) {
        case 'change_red':
            return { ...state, red: Math.max( Math.min(state.red + action.payload, 255), 0) };
        case 'change_green':
            return { ...state, green: Math.max( Math.min(state.green + action.payload, 255), 0) };
        case 'change_blue':
            return { ...state, blue: Math.max( Math.min(state.blue + action.payload, 255), 0) };
        default:
            return state;
    }
};

const ColorComposerScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_red', payload: -COLOR_INCREMENT})}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -COLOR_INCREMENT})}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -COLOR_INCREMENT})}
            />
            <View style={{width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorComposerScreen;