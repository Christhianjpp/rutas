import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../pages/MapScreen';
import { PermissionsScreen } from '../pages/PermissionsScreen';
import React, { useContext } from 'react';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../pages/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {


    const { permissions } = useContext(PermissionsContext)


    if (permissions.locationStatus === 'unavailable') {
        console.log(permissions.locationStatus)
        return <LoadingScreen />
    }

    return (
        <Stack.Navigator
            // initialRouteName='PermissionsScreenr'
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {
                (permissions.locationStatus === 'granted')
                    ? <Stack.Screen name="MapScreen" component={MapScreen} />
                    : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
            }
        </Stack.Navigator>
    );
}