import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function PostsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={require("../Home/userPhoto.png")}
          style={styles.userPhoto}
        />
        <View>
          <Text style={styles.userName}>Natalia Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View style={styles.imageWrapper}>
            <Image source={require("../Home/natureImage-1.png")} />
          </View>
          <Text style={styles.imageText}>Ліс</Text>
        </View>
        <View style={styles.detailsWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <Image
              style={styles.shapeIcon}
              source={require("../Home/shape.png")}
            />
          </TouchableOpacity>
          <Text style={styles.countComents}>0</Text>
          <Image
            style={styles.mapPinIcon}
            source={require("../CreatePostsScreen/map-pin.png")}
          />
          <Pressable onPress={() => navigation.navigate("Map")}>
            <Text>Ivano-Frankivs'k Region, Ukraine</Text>
          </Pressable>
        </View>
        <View>
          <View style={styles.imageWrapper}>
            <Image source={require("../Home/natureImage-2.png")} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userPhoto: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 8,
  },
  userName: {
    fontFamily: "Roboto700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  imageWrapper: {
    marginTop: 32,
    borderRadius: 8,
  },
  imageText: {
    marginTop: 8,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },
  detailsWrapper: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  shapeIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  mapPinIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  countComents: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginRight: 65,
  },
});
