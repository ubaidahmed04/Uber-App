import React, { useEffect, useState,useCallback } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { debounce } from 'lodash';
export default function MapLocate({ val, whereTo }) {
  const [data, setData] = useState([])

  
       const fetchData = async (location) => {
       console.log("success")
        try {          
            const response = await fetch(`https://api.foursquare.com/v3/places/search?near=${encodeURIComponent(location)}`, 
            {
                method: 'GET',
                headers: {
                    'Authorization': 'fsq3bDfgMuZCsrSM5ulfMj3ZPmDZcebZ9X7ZRp2mFJllaNk=',
                    'Accept': 'application/json'
                }
            });
            const res = await response.json();
            const updateData = res?.results?.slice(0, 8).map(data => {
                let obj = {
                    lon: data.geocodes?.main?.longitude,
                    lat: data.geocodes?.main?.latitude,
                    id: data.fsq_id,
                    distance: data.distance,
                    location: data.location?.address,
                    name:data.name,
                }
                return obj
            })
            setData(updateData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const debounced = React.useCallback(debounce(fetchData, 5000), []);

    React.useEffect(() => {
      // for the first render load
      fetchData(val,whereTo);
    }, [val]);
    
console.log(whereTo);
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {data?.map(marker => ( 
          <Marker 
            key={marker?.id}
            coordinate={{ latitude: marker?.lat, longitude: marker?.lon }}
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
