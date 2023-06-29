import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home/Home";
import CommentsScreen from "./Screens/CommenstScreen/CommentsScreen";
import { Pressable, StyleSheet } from "react-native";
import { Image } from "react-native";
import MapScreen from "./Screens/MapScreen/MapScreen";
import { useState } from "react";

export default App = () => {
  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto700: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  // const navigation = useNavigation();
  const MainStack = createStackNavigator();

  
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerTitle: "Коментарі",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: "#bdbdbd",
            },
            headerTitleStyle: {
              fontFamily: "Roboto500",
              fontSize: 17,
              lineHeight: 22,
              color: "#212121",
            },
            headerLeft: () => (
              // <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={require("./Screens/Home/arrow-left.png")}
                style={styles.arrowIcon}
              />
              // </Pressable>
            ),
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
      
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});
