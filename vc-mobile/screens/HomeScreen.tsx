import {Button, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: "stretch",

                gap: 10,

                margin: 10

            }}>
            <Text
                style={{

                    flexDirection: "row",
                    fontSize: 30,
                    fontWeight: "bold",
                    paddingTop: 40,

                }}
            >
                Event app
            </Text>
            <View
                style={{
                    flex: 1,

                    justifyContent: "center",
                    flexDirection: "column",


                }}
            >
                <Text
                    style={{
                        fontSize: 100,
                        textAlign: "center",
                        marginTop: -60,

                    }}
                >
                    🎟️
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Entrance Checkpoint" as never)
                    }}

                    style={{...BUTTON_STYLES, backgroundColor: "#5cb85c",}}>
                    <Text
                        style={{

                            fontSize: 20,
                            fontWeight: "bold"
                        }}>
                        Entrance checkpoint
                    </Text>

                </TouchableOpacity>

            </View>
        </View>
    );
}

const BUTTON_STYLES: ViewStyle = {
    height: 100, marginTop: 10,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
}