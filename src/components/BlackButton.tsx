import React from 'react'
import { StyleProp, ViewStyle, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const BlackButton = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={{
                ...style as any,
                ...styles.backButton
            }}
        >
            <Text style={styles.buttonText}>{title}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    backButton: {
        height: 40,
        width: 150,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        elevation: 8,

        marginTop: 20,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 20,

    }
})