import { Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const unionImg = () => {
  return (
    <TouchableOpacity style={styles.imgPlusWrapper}>
      <Image source={require("../Home/Union.png")} style={styles.plusImg} />
    </TouchableOpacity>
  );
};

export const gridImg = () => {
  return (
    <Image source={require("../Home/grid.png")} style={styles.imgTabBar} />
  );
};

export const userImg = () => {
  return (
    <Image source={require("../Home/user.png")} style={styles.imgTabBar} />
  );
};

const styles = StyleSheet.create({
  imgTabBar: {
    width: 24,
    height: 24,
  },
  plusImg: {
    width: 13,
    height: 13,
  },
  imgPlusWrapper: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: 70,
    height: 40,
  },
});
