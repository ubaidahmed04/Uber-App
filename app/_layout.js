import React from 'react';
import { View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import DrawerContent from "./../components/DrawerContent";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <Drawer.Navigator > */}
        <Drawer drawerContent={DrawerContent}>
          {/* <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              drawerIcon: ({ color,  }) => ( 
                <MaterialCommunityIcons name="home" size={40} color={color} />
              )
            }}
          /> */}
          {/* <Drawer.Screen
            name="Setting"
            options={{
              drawerLabel: 'Settings',
              drawerIcon: ({ color, size }) => ( 
                <Ionicons name="setting-outline" size={size} color={color} />
              )
            }}
          /> */}
        </Drawer>
         {/* </Drawer.Navigator> */}
      </GestureHandlerRootView>
    </View>
  );
}




