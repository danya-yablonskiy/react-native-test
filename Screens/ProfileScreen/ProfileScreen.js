import { useNavigation } from "@react-navigation/native";

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../RegistrationScreen/bgImage.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <StatusBar
          style="auto"
          backgroundColor="#61dafb"
          barStyle="dark-content"
        />

        <View style={styles.containerForm}>
          <Image
            source={require("../Home/userPhoto.png")}
            style={styles.avatar}
          />
          <Image
            source={require("../ProfileScreen/unionX.png")}
            style={styles.deleteAvatarIcon}
          />

          <Text style={styles.title}>Natali Romanova</Text>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.logOutIcon}
          >
            <Image source={require("../Home/log-out.png")} />
          </Pressable>
          <View style={styles.imageWrapper}>
            <Image source={require("../Home/natureImage-1.png")} />
          </View>
          <Text style={styles.imageText}>Ліс</Text>
          <View style={styles.detailsWrapper}>
            <View style={styles.countWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Image
                  style={styles.shapeIcon}
                  source={require("../ProfileScreen/shapeOrange.png")}
                />
              </TouchableOpacity>
              <Text style={styles.countComents}>8</Text>
            </View>
            <View style={styles.likeCountWrapper}>
              <Image
                style={styles.shapeIcon}
                source={require("../ProfileScreen/likeOrange.png")}
              />
              <Text style={styles.countComents}>153</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Image
                style={styles.mapPinIcon}
                source={require("../CreatePostsScreen/map-pin.png")}
              />
              <Text>Ukraine</Text>
            </View>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require("../Home/natureImage-2.png")} />
          </View>
          <Text style={styles.imageText}>Захід на чорному морі</Text>
          <View style={styles.detailsWrapper}>
            <View style={styles.countWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Image
                  style={styles.shapeIcon}
                  source={require("../ProfileScreen/shapeOrange.png")}
                />
              </TouchableOpacity>
              <Text style={styles.countComents}>3</Text>
            </View>
            <View style={styles.likeCountWrapper}>
              <Image
                style={styles.shapeIcon}
                source={require("../ProfileScreen/likeOrange.png")}
              />
              <Text style={styles.countComents}>200</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Image
                style={styles.mapPinIcon}
                source={require("../CreatePostsScreen/map-pin.png")}
              />
              <Text>Ukraine</Text>
            </View>
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require("../Home/natureImage-3.png")} />
          </View>
          <Text style={styles.imageText}>Старий будиночок у Венеції</Text>
          <View style={styles.detailsWrapper}>
            <View style={styles.countWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Image
                  style={styles.shapeIcon}
                  source={require("../ProfileScreen/shapeOrange.png")}
                />
              </TouchableOpacity>
              <Text style={styles.countComents}>50</Text>
            </View>
            <View style={styles.likeCountWrapper}>
              <Image
                style={styles.shapeIcon}
                source={require("../ProfileScreen/likeOrange.png")}
              />
              <Text style={styles.countComents}>200</Text>
            </View>
            <View style={styles.locationWrapper}>
              <Image
                style={styles.mapPinIcon}
                source={require("../CreatePostsScreen/map-pin.png")}
              />
              <Text>Italy</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  avatar: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,

    borderRadius: 16,
  },
  deleteAvatarIcon: {
    position: "absolute",
    width: 35,
    height: 35,
    top: 15,
    left: 229,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
    color: "#212121",
  },
  containerForm: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginTop: 8,
    flexDirection: "row",
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
    color: "#212121",
  },
  countWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 24,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",

    marginLeft: "auto",
  },

  logOutIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 22,
    right: 16,
  },
});
