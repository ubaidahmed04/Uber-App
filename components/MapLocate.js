import React, { useEffect, useState, useCallback } from "react";
import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

export default function MapLocate({ val, whereTo, data,location }) {

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {data?.map((marker) => (
          <Marker
            key={marker?.id}
            coordinate={{ latitude: marker?.latitude, longitude: marker?.longitude }}
            title={marker?.name}
            description={marker?.location}
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
