import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { useFonts } from "expo-font";

export default App = () => {
  const [fontsLoaded] = useFonts({
    Roboto400: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto500: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </>
  );
};
