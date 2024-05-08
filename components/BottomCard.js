import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 ,MaterialIcons,
} from '@expo/vector-icons';

export default function BottomCard() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Go Again</Text>
        <View  style={styles.card1}>
            <View style={{marginTop:18}}>
        <MaterialIcons name="group-work" size={25} color="#000" />
            </View>
        <View>
            <Text style={styles.bold}>Work</Text>
            <Text style={styles.light}>1024,Market Street</Text>
        </View>
        </View>
        <View  style={styles.card2}>
            <View style={{marginTop:18}}>
        <FontAwesome6 name="street-view" size={25} color="#000" />
            </View>
        <View>
            <Text style={styles.bold}>burnsRoad Street</Text>
            <Text style={styles.light}>Karachi</Text>
        </View>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display:"flex",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      marginTop:15,
    
      
    },
    card1:{
      width:"100%",
      display:"flex",
      flexDirection:"row",
    //   alignItems:"center",
    gap:9,
      height:70,
      borderBottomColor:"#c3c3c3",
      borderBottomWidth:.5,
    backgroundColor: '#F6F6F6',
    },
    card2:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
      //   alignItems:"center",
      gap:9,
        height:70,
        borderBottomColor:"#c3c3c3",
        borderBottomWidth:.5,
      backgroundColor: '#F6F6F6',
    },
    bold:{
        fontSize:23,
        fontWeight:"bold",
        marginTop:9,

    },
    light:{
        fontSize:12,
        color:"#D9D9D9"
    },
    text:{
        fontSize:16,
        fontWeight:"bold",
        color:"#ACACAC"
    }


})