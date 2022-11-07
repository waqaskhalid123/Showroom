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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"

const OrderHistory= () => {
    const[value, setsvalue]= useState(1);
    const navigation = useNavigation()
    const DATA=[
        {id:"#32476868234", status: 'Pending', name:"Sheraz Ahmed" ,OrderTime:"17 Oct 2022 08:24 am", PaymentType:"Paypal", Amount:"€29.99", Address:"946 Fairground St. Miami Beach, FL 33139" },
        {id:"#32476868235", status: 'Pending', name:"Sheraz Ahmed" ,OrderTime:"17 Oct 2022 08:24 am", PaymentType:"Paypal", Amount:"€29.99", Address:"946 Fairground St. Miami Beach, FL 33139" },
        {id:"#32476868236", status: 'Pending', name:"Sheraz Ahmed" ,OrderTime:"17 Oct 2022 08:24 am", PaymentType:"Paypal", Amount:"€29.99", Address:"946 Fairground St. Miami Beach, FL 33139" },
        {id:"#32476868237", status: 'Pending', name:"Sheraz Ahmed" ,OrderTime:"17 Oct 2022 08:24 am", PaymentType:"Paypal", Amount:"€29.99", Address:"946 Fairground St. Miami Beach, FL 33139" },    
      ];
    
    return(
     <View style={{flex:1, padding:12, backgroundColor:COLORS.white}}>
        
        <FlatList
  data={DATA}
  renderItem={({ item }) =>
  <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate("OrderDetail")}}>
  <View style={styles.orderList}>
   <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",paddingVertical:3, paddingHorizontal:5}}>
    <View>
        <Text style={styles.SecondaryTxt}>Order ID</Text>
        <Text style={styles.PrimaryTxt}>{item.id}</Text>
    </View>
    <View style={{flexDirection:"row"}}>
    <Text style={styles.SecondaryTxt}>Status: </Text>
    <Text style={{...styles.SecondaryTxt,color:COLORS.pendingOrange}}>{item.status}</Text>
    </View>
   </View>

   <View style={{flex:1,paddingVertical:3, paddingHorizontal:5}}>
   <Text style={styles.PrimaryTxt}>{item.name}</Text>
   <View style={{flex:1, flexDirection:"row"}}>
   <Text style={styles.SecondaryTxt}>Order Time: </Text>
   <Text style={styles.PrimaryTxt}>{item.OrderTime}</Text>
   </View>
   </View>
   <View style={{flex:1, flexDirection:"row",paddingVertical:3, paddingHorizontal:5}}>
    <View style={{flex:1, borderTopWidth:0.5, borderTopColor:"lightgrey", borderRightWidth:0.5, borderRightColor:"lightgrey"}}>
    <Text style={{...styles.SecondaryTxt,textAlign:"center"}} >Payment Type</Text>
    <Text style={{...styles.PrimaryTxt,textAlign:"center",fontFamily:"Poppins-Bold"}}>{item.PaymentType}</Text>
    </View>
    <View style={{flex:1,borderTopWidth:0.5, borderTopColor:"lightgrey"}}>
    <Text style={{...styles.SecondaryTxt,textAlign:"center"}}>Amount</Text>
    <Text style={{...styles.PrimaryTxt,textAlign:"center",fontFamily:"Poppins-Bold"}}>{item.Amount}</Text>
    </View>
    </View> 

   <View style={{flex:1, flexDirection:"row" ,justifyContent:"flex-start", paddingVertical:3, paddingHorizontal:5}}>
   <Ionicons name='location'size={15} color={COLORS.redBtn} style={{paddingRight:wp("1%")}} />
   <Text>{item.Address}</Text>
   </View>

   
  </View>
  </TouchableOpacity>
  } />
    </View>        
    )
}
const styles = StyleSheet.create({
PrimaryTxt:{
    color: COLORS.primary,
    fontFamily: "Poppins-Regular"
},
SecondaryTxt:{
    color: COLORS.secondary,
    fontFamily: "Poppins-Regular"
},
orderList:{
    flex:1,
    marginVertical:hp("1%"),
    borderBottomColor:"grey", 
    backgroundColor:COLORS.white, 
    paddingVertical:3,
    paddingHorizontal:2, 
    borderRadius:10 ,
    overflow:'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderRightColor:"lightgrey",
    borderLeftColor:"lightgrey"
}

})
export default OrderHistory;