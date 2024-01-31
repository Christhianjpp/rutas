import { createContext, useEffect, useState } from 'react';
import { check, openSettings, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { AppState, AppStateStatus, Platform } from 'react-native';



export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps)

export const PermissonsProvider = ({ children }: any) => {


    // const handleAppStateChange = (state: AppStateStatus) => {
    //     if (state !== 'active') return
    //     checkLocationPermission()
    // }

    useEffect(() => {
        // handleAppStateChange(AppState.currentState) // en algunas ocaciones el AppState no es ejecutado
        checkLocationPermission()

        AppState.addEventListener('change', state => {
            if (state !== 'active') return;

            checkLocationPermission()
        })
    }, [])




    const askLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        if (permissionStatus === 'blocked') {
            openSettings()
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })

    }

    const checkLocationPermission = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })

    }

    const [permissions, setPermissions] = useState(permissionsInitState)

    return (
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            {children}
        </PermissionsContext.Provider>
    )
}