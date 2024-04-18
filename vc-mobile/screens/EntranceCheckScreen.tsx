import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import {PermissionStatus} from "expo-modules-core/src/PermissionsInterface";
import {CameraView} from "expo-camera/next";
import {Camera} from "expo-camera";
import {BarcodeScanningResult} from "expo-camera/src/next/Camera.types";


export enum ScreenState {
    SCANNING = 0,
    LOADING = 1,
    CONGRATS = 2,
    INVALID_TICKET = 3,
}

export default function EntranceCheckScreen() {
    const [hasPermission, setHasPermission] = useState(false);
    const [screenState, setScreenState] = useState(ScreenState.SCANNING);


    useEffect(() => {
        const getCameraPermissions = async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === PermissionStatus.GRANTED);
        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = async ({data}: BarcodeScanningResult) => {
        setScreenState(ScreenState.LOADING);

        try {
            const response = await fetch("http://192.168.31.149:3010/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({data}),

            })

            response.status === 200 ? setScreenState(ScreenState.CONGRATS) : setScreenState(ScreenState.INVALID_TICKET);
        } catch (e) {
            console.error(e);
            setScreenState(ScreenState.INVALID_TICKET);
        }

    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (!hasPermission) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {screenState == ScreenState.SCANNING && (
                <CameraView
                    onBarcodeScanned={screenState !== ScreenState.SCANNING ? undefined : handleBarCodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417"],
                    }}
                    style={StyleSheet.absoluteFillObject}
                />
            )}
            {screenState == ScreenState.LOADING && (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text>
                        Loading...
                    </Text>
                </View>
            )}
            {screenState == ScreenState.CONGRATS && (
                <View
                    style={{
                        backgroundColor: "#81c883",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 50,
                        }}
                    >
                        ✅
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 25,
                        }}
                    >
                        Valid ticket. Let the human in!
                    </Text>
                   <TouchableOpacity
                       onPress={() => setScreenState(ScreenState.SCANNING)}
                       style={{padding: 10, backgroundColor: "#fff", borderRadius: 5}}
                     >
                          <Text
                              style={{
                                  fontWeight: "bold",
                                  fontSize: 20,
                              }}
                          >Scan another ticket</Text>
                    </TouchableOpacity>
                </View>
            )}

            {screenState == ScreenState.INVALID_TICKET && (
                <View
                    style={{
                        backgroundColor: "#f48784",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 50,
                        }}
                    >
                        ❌
                    </Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 25,
                        }}
                    >
                        Invalid ticket GTFO!
                    </Text>

                    <TouchableOpacity
                        onPress={() => setScreenState(ScreenState.SCANNING)}
                        style={{padding: 10, backgroundColor: "#fff", borderRadius: 5}}
                    >
                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: 20,
                            }}
                        >Scan another ticket</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
});