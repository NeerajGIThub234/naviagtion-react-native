import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// navigation
import { NativeStackScreenProps,NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

//Second Way  to use navigation(first Way on Details Page) 
const Details = ({route}:DetailsProps) => {
  const {productId}=  route.params;

  const navigation= useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
    <Text style={styles.smallText}>Details: {productId}</Text>
    <Button 
    title='Go to Home'
    //onPress={()=> navigation.navigate("Home")}
    // take you on one Screen back
        onPress={()=> navigation.goBack()}
    />
    <Button 
    title='Go to first scrren'
    // 2 screen back
    //onPress={()=> navigation.pop(2)}
    // on first screen
    onPress={()=> navigation.popToTop()}
    />
  </View>
  );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    }
});