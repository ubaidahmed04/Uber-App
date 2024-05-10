import { View, Text, StyleSheet, Image, Link } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
// import { Link } from 'expo-router';
import Map from "../app/Map";
const carImg = require("../assets/car-bg.png");
const foodImg = require("../assets/food-loc.png");
export default function Card() {
  return (
    <>
      <View>
        <Text style={styles.head}> Uber</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card1}>
          <Image source={carImg} style={styles.cardImage1} />
          <View style={styles.cardDiv}>
            <Text style={styles.cardText}>Go to ride</Text>
            <FontAwesome6
              name="circle-arrow-right"
              size={35}
              color="#000"
            />
          </View>
        </View>
        <View style={styles.card1}>
          <Image source={foodImg} style={styles.cardImage2} />
          <View style={styles.cardDiv}>
            <Text style={styles.cardText2}>Order Food</Text>
            <FontAwesome6
              name="circle-arrow-right"
              size={35}
              color="#000"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    gap: 15,
  },
  head: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 40,
  },
  card1: {
    width: 170,
    height: 270,
    backgroundColor: "#DFE3E6",
    marginVertical: 10,
    position: "relative",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: "left",
    paddingHorizontal: 10,
  },
 
  cardText: {
    color: "#000",
    fontSize:18,
    fontWeight: "bold",
    marginBottom:9,
    
  },
  cardText2: {
    color: "#000",
    marginTop: 17,
    fontSize:18,
    fontWeight: "bold",
    marginBottom:9,

   
  },
  cardDiv:{
    textAlign: 'left',
    alignSelf: 'flex-start',
    padding:10,
  },
  cardImage1: {
    height: 160,
    padding: 10,
    objectFit: "contain",
  },
  cardImage2: {
    height: 110,
    padding: 10,
    marginTop:25,
    marginBottom: 10,
    objectFit: "contain",
  },
 
});
