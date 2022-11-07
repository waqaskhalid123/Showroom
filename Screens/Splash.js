import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import {useNavigation} from "@react-navigation/native"

const Splash=()=>{
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DrawerNav")
    }, 3000);
    
  }, []);

  return(
  <View style={{flex:1, backgroundColor:"black"}}>
    <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",width:"50%",height:"70%", marginHorizontal:"28%"}} >
      <Image  source={require("../assets/logo.png")} style={styles.image} resizeMode="contain"/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  image:{
   width:"100%",
   height:"100%"
  }
});

export default Splash;
