import { Link, Stack } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";
import Card from "../components/Card";
import BottomCard from "../components/BottomCard";

export default function Home() {
  return (
    <View style={styles.container}> 
      <Stack.Screen
        options={{
          title: false,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Card />
      <BottomCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});
