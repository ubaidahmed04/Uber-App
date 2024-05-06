import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
function LogoTitle() {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Setting() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: ' Settings',
          headerShown:false,
          headerStyle: { backgroundColor: '#c3c3c3' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Text>Setting Screen</Text>
      {/* <Link href='./main'>Go to Details</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
