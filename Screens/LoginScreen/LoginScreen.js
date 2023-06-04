import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isInputEmailActive, setIsInputEmailActive] = useState(false);
  const [isInputPasswordActive, setIsInputPasswordActive] = useState(false);

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const secureTextEntryToggle = () => {
    setIsSecureTextEntry((prev) => !prev);
  };
  const handleSubmit = () => {
    console.log("email:", email);
    console.log("password:", password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../RegistrationScreen/bgImage.png")}
          resizeMode="cover"
          style={styles.container}
        >
          <StatusBar barStyle="dark-content" />
          {/* Додав в app.json: "softwareKeyboardLayoutMode": "pan" тепер на андроїд все ок, а на IOS кудись зникає відступ*/}
          <KeyboardAvoidingView
            style={styles.containerForm}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              placeholder="Адрес електронної пошти"
              style={isInputEmailActive ? styles.inputFocused : styles.input}
              inputMode="email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsInputEmailActive(true)}
              onBlur={() => setIsInputEmailActive(false)}
            />
            <TextInput
              placeholder="Пароль"
              style={isInputPasswordActive ? styles.inputFocused : styles.input}
              secureTextEntry={isSecureTextEntry}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setIsInputPasswordActive(true)}
              onBlur={() => setIsInputPasswordActive(false)}
            />
            <View>
              <Pressable style={styles.showBtn} onPress={secureTextEntryToggle}>
                <Text style={styles.showBtnText}>{"Показати"}</Text>
              </Pressable>
            </View>

            <View style={styles.padding}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <Pressable>
                <Text style={styles.authText}>
                  Немає акаунту?
                  <Text style={styles.authWord}> Зареєструватися</Text>
                </Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  containerForm: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    // paddingBottom: 111, не працює(((
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
    color: "#212121",
  },
  input: {
    height: 50,
    marginBottom: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
  },
  inputFocused: {
    height: 50,
    marginBottom: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    padding: 16,
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
  authText: {
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  showBtn: {
    position: "absolute",
    top: -52,
    right: 16,
  },
  showBtnText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  authWord: {
    textDecorationLine: true,
  },
  padding: {
    paddingBottom: 111,
  },
});
export default LoginScreen;
