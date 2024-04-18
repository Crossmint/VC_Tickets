import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import EntranceCheckScreen from "./screens/EntranceCheckScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Event app" component={HomeScreen}/>
                <Stack.Screen name="Entrance Checkpoint"  component={EntranceCheckScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
