import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { PostsScreen } from "../PostsScreen/PostsScreen";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import user from "../Home/user.png";
import union from "../Home/Union.png";
import grid from "../Home/grid.png";
const Tabs = createBottomTabNavigator();

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconSrc;

          if (route.name === "Profile") {
            iconSrc = user;
          } else if (route.name === "CreatePost") {
            iconSrc = union;
          } else if (route.name === "Posts") {
            iconSrc = grid;
          }
          return <Image source={iconSrc} />;
        },
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
      <Tabs.Screen name="Profile" component={ProfileScreen} />
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
