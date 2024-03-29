import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Home from "./screens/Home";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white", alignSelf: "center" },
  headerTintColor: "white",
  gestureEnabled: true,
};
export default function App() {
  return (
    <NavigationContainer style={{ backgroundColor: "orange" }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
