import { View, Text, StyleSheet,Image,Link } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Link } from 'expo-router';
import Map from '../app/Map';
const carImg = require('../assets/car2.jpg')
const foodImg = require('../assets/food2.jpeg')
export default function Card() {
  return (
    <>
    <View >
        <Text style={styles.head}> Uber</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.card1}>
        <Image source={carImg} style={styles.cardImage1} />
        <Text style={styles.cardText}>
          GO TO Ride
        </Text>
        <MaterialCommunityIcons name="arrow-right-box" size={25} color="#000" />

      </View>
      <View style={styles.card2}>
        <Image source={foodImg} style={styles.cardImage} />
        <Text style={styles.cardText}>
          Order Food
        </Text>
        <MaterialCommunityIcons  style={styles.Icon} name="arrow-right-box" size={25} color="#000" />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    gap:15,
    // backgroundColor: '#FFFFFF',
    
  },
  card1: {
    width: 170,
    height: 300,
    backgroundColor: '#F6F6F6',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card2: {
    width: 170,
    height: 300,
    backgroundColor: '#F6F6F6',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    fontSize:14,
    fontWeight: 'bold',
  },
  cardImage1: {
    height: 180,
    marginBottom: 10,
    marginRight:10,
    objectFit:"contain",
    borderRadius:50,    
  },
  cardImage: {
    height: 125,
    marginBottom: 10,
    objectFit:"contain",
    // borderRadius:50,    
  },
  head:{
    fontSize:40,
    fontWeight:"bold",
    // fontFamily:"sans",
    color:"#000",
},
});
