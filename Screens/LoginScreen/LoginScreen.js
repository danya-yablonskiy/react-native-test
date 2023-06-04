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
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../RegistrationScreen/bgImage.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" />
        <KeyboardAvoidingView
          style={styles.containerForm}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Увійти</Text>
          <TextInput
            placeholder="Адрес електронної пошти"
            style={styles.inputEmail}
            inputMode="email"
          />
          <TextInput
            placeholder="Пароль"
            style={styles.inputPass}
            secureTextEntry={true}
          />
          <View style={styles.btnContainer}>
            <Pressable style={styles.showBtn}>
              <Text style={styles.showBtnText}>{"Показати"}</Text>
            </Pressable>
          </View>

          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <Pressable>
              <Text style={styles.authText}>
                Немає акаунту? <Text style={styles.authWord }>Зареєструватися</Text>
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
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
    paddingBottom: 111,
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
  inputEmail: {
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
  inputPass: {
    height: 50,
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

  button: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 43,
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
    marginBottom: 111,
  },

  showBtn: {
    position: "absolute",
    top: -35,
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
  }
});
export default LoginScreen;
