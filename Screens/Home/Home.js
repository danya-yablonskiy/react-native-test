import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";

import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { useNavigation } from "@react-navigation/native";

import { unionImg, userImg, gridImg } from "./tabBarImages";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { useState } from "react";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconSrc;

          if (route.name === "Profile") {
            iconSrc = userImg();
          } else if (route.name === "CreatePost") {
            iconSrc = unionImg();
          } else if (route.name === "Posts") {
            iconSrc = gridImg();
          }
          return iconSrc;
        },
        tabBarStyle: {
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#E8E8E8",
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 9,
          paddingBottom: 9,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerTitle: "Публікації",
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
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={styles.logOutIcon}
            >
              <Image source={require("../Home/log-out.png")} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          headerTitle: "Створити публікацію",
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
            <Pressable onPress={() => navigation.navigate("Posts")}>
              <Image
                source={require("../Home/arrow-left.png")}
                style={styles.arrowIcon}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  logOutIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 19,
  },
  bottomMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#b3b3b3",
    backgroundColor: "#fff",
  },
  imageGrid: {
    width: 24,
    height: 24,
    marginRight: 31,
  },
  btnPlus: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPlusImg: {
    width: 13,
    height: 13,
  },
  imageUser: {
    width: 24,
    height: 24,
    marginLeft: 31,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default Home;
