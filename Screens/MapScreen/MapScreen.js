import { View } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
const MapScreen = ({ route }) => {
  const { currentPlace } = route.params;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...currentPlace,
        }}
        showsUserLocation={true}
      >
        {currentPlace && (
          <Marker
            title="I am here"
            coordinate={currentPlace}
            description="Hello"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
