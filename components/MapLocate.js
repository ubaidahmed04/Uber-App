import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const CLIENT_ID = 'ORM10SPOSHQTGBO0RNSNWSNO3YQNOSV1APPBHEBEZ14DP2HN';
const CLIENT_SECRET = 'LZ25P1D051BFTK5FOKRYSLB4GQNDWX3N1PSRK1N3W2JQBWH5';
const RADIUS = 1000; // Search radius in meters

const MapWithFoursquare = () => {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near=${searchQuery}&radius=${RADIUS}`
      );
      setVenues(response);
      console.log(venues)
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  const handleSearch = () => {
    if (searchInput.trim() !== '') {
      fetchData(searchInput);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchInput}
        onChangeText={text => setSearchInput(text)}
        placeholder="Enter location"
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {venues.map((venue, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: venue.venue.location.lat,
              longitude: venue.venue.location.lng,
            }}
            title={venue.venue.name}
          />
        ))}
      </MapView>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
});

export default MapWithFoursquare;
