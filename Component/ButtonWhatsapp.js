import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from './Styles';
import Ionicons from "react-native-vector-icons/Ionicons"
import Myicons from "react-native-vector-icons/Feather"


const ButtonWhatsapp=(
  
)=>{
    return(
      <View style={{backgroundColor:COLORS.greenbtn,marginLeft:wp("3%"),paddingVertical:hp("0.3%"),justifyContent:"center",flexDirection:"row",borderRadius:5,alignItems:"center"}}>
      <TouchableOpacity onPress={()=>{{}}}>
        <View style={{flexDirection:"row",}}>
        <Ionicons name='logo-whatsapp' size={20} color={COLORS.white} style={{marginHorizontal:wp("2%")}}/>
      <Text style={{ color:COLORS.white,textAlign:"center",fontFamily:"Poppins-Regular"}}>NEGOCIER LE PRIX</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({

})
export default ButtonWhatsapp;