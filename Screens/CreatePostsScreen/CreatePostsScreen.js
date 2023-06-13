import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Keyboard } from "react-native";
import { KeyboardAvoidingView } from "react-native";

import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export function CreatePostsScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.container}>
        <View style={styles.addPhotoContainer}>
          <Image
            source={require("../CreatePostsScreen/camera.png")}
            style={styles.addPhotoIcon}
          />
        </View>
        <Text style={styles.addPhotoText}>Завантажте фото</Text>
        <TextInput
          style={styles.inputName}
          placeholder="Назва..."
          placeholderStyle={{ fontFamily: "Roboto400" }}
        />
        <View>
          <TextInput
            style={styles.inputLocation}
            placeholder="Місцевість..."
            placeholderStyle={{ fontFamily: "Roboto400" }}
          />
          <Image
            style={styles.mapPinIcon}
            source={require("../CreatePostsScreen/map-pin.png")}
          />
        </View>
        <View style={styles.publishTextWrapper }>
          <Text style={styles.publishText}>Опублікувати</Text>
        </View>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Опублікувати</Text>
        </TouchableOpacity> */}
      </View>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
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
  addPhotoContainer: {
    backgroundColor: "#F6F6F6",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  addPhotoText: {
    fontFamily: "Roboto400",
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  addPhotoIcon: {
    width: 24,
    height: 24,
  },
  inputName: {
    height: 50,
    fontFamily: "Roboto500",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    padding: 16,
    marginTop: 32,
  },
  inputLocation: {
    height: 50,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    marginTop: 32,
    paddingLeft: 28,
  },
  mapPinIcon: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 46,
  },
  button: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 27,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto400",
  },
  publishTextWrapper: {
    alignItems: "center",
  },
  publishText: {
    marginTop: 48,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
