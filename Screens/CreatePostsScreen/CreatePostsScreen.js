import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

export function CreatePostsScreen() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  console.log(location);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.addPhotoContainer}>
            <Image
              source={require("../CreatePostsScreen/camera.png")}
              style={styles.addPhotoIcon}
            />
          </View>
          <Text style={styles.addPhotoText}>Завантажте фото</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inputName}
            placeholder="Назва..."
            placeholderStyle={{ fontFamily: "Roboto400" }}
          />
          <View>
            <TextInput
              value={location}
              onChangeText={setLocation}
              style={styles.inputLocation}
              placeholder="Місцевість..."
              placeholderStyle={{ fontFamily: "Roboto400" }}
            />
            <Image
              style={styles.mapPinIcon}
              source={require("../CreatePostsScreen/map-pin.png")}
            />
          </View>

          {name && location !== "" ? (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.publishTextWrapper}>
              <Text style={styles.publishText}>Опублікувати</Text>
            </View>
          )}
          <View style={styles.trashIconWrapper}>
            <TouchableOpacity style={styles.trashIconTouchable}>
              <Image
                style={styles.trashIcon}
                source={require("../CreatePostsScreen/trash.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#E8E8E8",
    paddingTop: 16,
    paddingBottom: 16,
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
    width: "100%",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 48,
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

  trashIconWrapper: {
    alignItems: "center",
    // ЗМІНИТИ МАРЖИН!!!
    marginTop: 40,
    backgroundColor: "#F6F6F6",
    width: 70,
    height: 40,
    borderRadius: 20,
    alignSelf: "center",
  },
  trashIconTouchable: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
});
