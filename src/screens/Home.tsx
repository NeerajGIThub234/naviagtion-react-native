import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>


//First way to use navigation (Second Way on Details Page)
const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button 
      title='Go to details'
      // first Way
    //   onPress={()=> navigation.navigate("Details",{
    //     productId:"86"
    //   })}

    //Second Way but if Details is also Undefined like home
   // onPress={()= navigation.navigate("Details")};

   // 3rd Way -adding layer like instagram like going inside inside
    onPress={()=>navigation.push("Details",{
        productId:"86"
      })}
      />
    </View>
  );
}

export default Home;

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