import {  Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoToMapButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Map');
  };

  return (
    <Pressable onPress={onPress}>
      <Text>Go to map</Text>
    </Pressable>
  );
};

export default GoToMapButton;
