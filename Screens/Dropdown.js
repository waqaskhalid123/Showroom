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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../Component/Styles';
import ListComp from '../Component/ListComp';
import {useNavigation} from "@react-navigation/native"


const Dropdown=(
    color
)=>{
    const[value,setvalue]=useState("Small")
    const[selection,setselection]=useState(true)
    const onPress = (name) => {
        setselection(!selection)
        setvalue(name)
      };
    return(
       <View style={{backgroundColor:color}}>
        <View style={{borderWidth:1,borderRadius:5,paddingVertical:hp("0.1%"),paddingHorizontal:wp("2%"),borderColor:COLORS.secondary }} >
        <TouchableOpacity activeOpacity={1} onPress={()=>{setselection(!selection)}}>
        <Text  style={{flex:1,fontFamily:"Poppins-Regular",textAlign:"center",fontSize:hp("3%") ,color:COLORS.primary}}>{value}</Text>
        </TouchableOpacity>
        </View>
        {!selection?
        <View style={{borderWidth:1,paddingVertical:wp("0.5%"),borderRadius:5,marginVertical:hp("1%"),fontFamily:"Poppins-Regular",marginRight:wp("6%")}}>
        <FlatList
        data={[{ name: 'Large' },{ name: 'Medium'},{ name:'Small'}]}
        renderItem={({ item }) =><View >
        <TouchableOpacity activeOpacity={1} onPress={() => {onPress(item.name)}}>
        <Text style={{textAlign:"center",fontSize:hp("3%")}} >{item.name}</Text>        
        </TouchableOpacity>
        </View>
         } />
         </View>
        :
        null
        }
       </View>
    )
}
const styles = StyleSheet.create({
    
});
export default Dropdown;
