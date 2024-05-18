import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Link,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Ionicons,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import home from "../app/index";
const drawerBg = require("../assets/avatar2.png");
const Bg = require("../assets/bg.png");

export default function DrawerContent() {
  const navigation = useNavigation();

  const onPressHome = () => {
    navigation.navigate("Home"); // Assuming 'Map' is the name of your Map screen
  };
  const onPressMap = () => {
    navigation.navigate("Map"); // Assuming 'Map' is the name of your Map screen
  };
  return (
    <View style={Styles.container}>
      <ImageBackground source={Bg} style={Styles.backgroundImage}>
        <View style={Styles.profile}>
          <View style={{ marginTop: 20 }}>
            <Image source={drawerBg} style={Styles.Image} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "#000", fontSize: 15 }}>Ubaid ahmed</Text>
            <Text style={{ color: "#000", fontSize: 10 }}>
              Ubaidahmed123@gmail.com
            </Text>
            <Text style={{ color: "#000", fontSize: 10 }}>
              karachi @expoapp
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={Styles.drawerTab}>
        <View style={Styles.homeTab}>
          <View>
            <MaterialCommunityIcons name="home" size={40} color={"#747B83"} />
          </View>

          <View>
            <Pressable >
              <Text style={{ color: "#747B83", fontSize: 15 }}>Home</Text>
            </Pressable>
          </View>
        </View>
        <View style={Styles.mapTab}>
          <View>
            <FontAwesome6
              name="location-crosshairs"
              size={40}
              color={"#747B83"}
            />
          </View>
          <View>
            <Pressable onPress={onPressMap}>
              <Text style={{ color: "#747B83", fontSize: 15 }}>Map</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    // flex: 1,
    objectFit: "cover",
    padding: 10,
    resizeMode: "contain",
    height: 250,
    opacity: 0.8,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginRight: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
  drawerTab: {
    display: "flex",
    marginTop: 30,
    // marginVertical: 20,
    paddingHorizontal: 20,
    gap: 20,
    justifyContent: "flex-start",
  },
  homeTab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#c3c3c3",
    gap: 30,
  },
  mapTab: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});
