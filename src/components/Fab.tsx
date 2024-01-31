import React from 'react'
import { StyleProp, View, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    onPress: () => void;
    style: StyleProp<ViewStyle>
}

export const Fab = ({ iconName, onPress, style }: Props) => {
    return (
        <View style={{
            ...style as any
        }}>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.backButton}
            >
                <Icon
                    name={iconName}
                    color='white'
                    size={35}
                    style={{ left: 1, top: 1 }}
                />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    backButton: {
        zIndex: 999,
        height: 50,
        width: 50,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
})