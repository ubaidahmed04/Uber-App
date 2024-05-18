import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function MapLocate({ whereTo, location }) {
  let markers = [];

  if (whereTo && whereTo !== null && typeof whereTo === "object") {
    markers.push(whereTo);
  }

  if (location && location !== null && typeof location === "object") {
    markers.push(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {Array.isArray(markers) &&
          markers.map((v, i) => (
            <Marker
              key={i}
              title="This is marker"
              coordinate={{ latitude: v.latitude, longitude: v.longitude }}
              description="This is Marker 1"
            />
          ))}
        
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
