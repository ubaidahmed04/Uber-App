import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import MapLocate from "./../components/MapLocate";
import * as Location from "expo-location";

export default function mapCard() {
  const [val, setVal] = useState("");
  const [whereTo, setWhereTo] = useState("");
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState({});
  const [whereToLocation, setWhereToLocation] = useState(null);
  const [isTrue, setIsTrue] = useState(false);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    try {
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData.coords);
      setErrorMsg(null);
    } catch (error) {
      console.error("Error getting location: ", error);
      setErrorMsg("Error getting location. Please try again later.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleGetLocation = () => {
    setVal("your device location");
    getLocation();
  };

  const fetchData = async (location) => {
    try {
      const encodedLocation = encodeURIComponent(location);
      const response = await fetch(
        `https://api.foursquare.com/v3/places/search?near=${encodedLocation}`,
        {
          method: "GET",
          headers: {
            Authorization: "fsq3bDfgMuZCsrSM5ulfMj3ZPmDZcebZ9X7ZRp2mFJllaNk=",
            Accept: "application/json",
          },
        }
      );
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }

      const responseData = await response.json();

      const updateData = responseData?.results?.slice(0, 4).map((data) => ({
        longitude: data?.geocodes?.main?.longitude,
        latitude: data?.geocodes?.main?.latitude,
        id: data?.fsq_id,
        distance: data?.distance,
        location: data?.location?.address,
        name: data?.name,
      }));

      console.log(updateData)
      setData(updateData);
    } catch (error) {
      setIsTrue(false);
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData(whereTo);
  }, [whereTo]);

  // useEffect(() => {
  //   console.log(location);
  //   console.log(whereToLocation);
  // }, [whereTo]);

  return (
    <View style={styles.mapContainer}>
      <View style={styles.mapView}>
        <MapLocate whereTo={whereToLocation} location={location} />
      </View>
      <View style={styles.mapModal}>
        <SafeAreaView>
          <View style={styles.texts}>
            <TextInput
              style={styles.input}
              onChangeText={(e) => setVal(e)}
              value={val}
              placeholder="your location"
            />
            <TextInput
              style={styles.input}
              onChangeText={(e) => {
                setIsTrue(true);
                setWhereTo(e);
              }}
              value={whereTo}
              placeholder="Where to go"
            />
            {isTrue &&
              data.map((v) => (
                <Button
                  key={v.id}
                  onPress={() => {
                    setIsTrue(false);
                    setWhereToLocation(v);
                    setWhereTo(v.location);
                  }}
                  title={v.location}
                />
              ))}
            {!val && (
              <Button title="use my location" onPress={handleGetLocation} />
            )}
          </View>
        </SafeAreaView>
        <View style={styles.card1}>
          <View>
            <MaterialIcons name="group-work" size={25} color="#000" />
          </View>
          <View>
            <Text style={styles.bold}>Work</Text>
            <Text style={styles.light}>1024,Market Street</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <View style={{ marginTop: 18 }}>
            <FontAwesome6 name="street-view" size={25} color="#000" />
          </View>
          <View>
            <Text style={styles.bold}>burnsRoad Street</Text>
            <Text style={styles.light}>Karachi</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  mapContainer: {
    display: "flex",
  },
  mapView: {
    flex: 0.5,
  },
  mapModal: {
    flex: 0.5,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: 10,
    // margin:10,
    borderTopWidth: 1,
    borderTopColor: "transparent",
    shadowColorshadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    // backgroundColor:"green"
  },
  texts: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "20px",
  },
  input: {
    height: 50,
    width: 340,
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderBlockColor: "#c3c3c3",
    borderRadius: 10,
  },
  card1: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // marginTop:50,
    alignItems: "center",
    gap: 9,
    height: 70,
    width: 387,
    padding: 10,

    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.5,
    backgroundColor: "#F6F6F6",
  },
  card2: {
    width: 387,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    //   alignItems:"center",
    gap: 9,
    height: 75,
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.5,
    backgroundColor: "#F6F6F6",
  },
  bold: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 9,
  },
  light: {
    fontSize: 12,
    color: "#D9D9D9",
  },
});
