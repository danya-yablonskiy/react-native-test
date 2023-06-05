import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isInputLoginActive, setIsInputLoginActive] = useState(false);
  const [isInputEmailActive, setIsInputEmailActive] = useState(false);
  const [isInputPasswordActive, setIsInputPasswordActive] = useState(false);

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const navigation = useNavigation();
  const secureTextEntryToggle = () => {
    setIsSecureTextEntry((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log("login:", login);
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
          <StatusBar
            style="auto"
            backgroundColor="#61dafb"
            barStyle="dark-content"
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* Додав в app.json: "softwareKeyboardLayoutMode": "pan" тепер на андроїд все ок, а на IOS кудись зникає відступ*/}
            <View style={styles.containerForm}>
              <View style={styles.avatar}>
                <Image
                  source={require("../RegistrationScreen/add.png")}
                  style={styles.addButton}
                />
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <TextInput
                placeholder="Логін"
                style={isInputLoginActive ? styles.inputFocused : styles.input}
                inputMode="text"
                value={login}
                onChangeText={setLogin}
                onFocus={() => setIsInputLoginActive(true)}
                onBlur={() => setIsInputLoginActive(false)}
              />
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
                style={
                  isInputPasswordActive ? styles.inputFocused : styles.input
                }
                secureTextEntry={isSecureTextEntry}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setIsInputPasswordActive(true)}
                onBlur={() => setIsInputPasswordActive(false)}
              />
              <View>
                <Pressable
                  style={styles.showBtn}
                  onPress={secureTextEntryToggle}
                >
                  <Text style={styles.showBtnText}>Показати</Text>
                </Pressable>
              </View>

              <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.authText}>Уже є акаунт? Увійти</Text>
                </Pressable>
              </View>
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
  avatar: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    left: 106,
    top: 79,
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
    paddingBottom: 45,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 45,
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
});
export default RegistrationScreen;
