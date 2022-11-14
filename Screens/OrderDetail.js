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
  FlatList,
  LogBox
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../Component/Styles';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"

const OrderDetail= () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, [])
    const[value, setsvalue]= useState(1);
    const data=[
        {id:1, name: 'Blazer jacket 08', price:"$ 29.99" ,size:"large" },{id:2, name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },{id:3, name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },
    
      ];
    const DATA=[
        {id:"#32476868234", status: 'Pending', name:"Sheraz Ahmed" ,OrderTime:"17 Oct 2022 08:24 am", PaymentType:"Paypal", Amount:"€29.99", Address:"946 Fairground St. Miami Beach, FL 33139" },           
      ];
    
    return(
      <ScrollView nestedScrollEnabled={false}  style={{ width: "100%",backgroundColor:COLORS.white}}>
     <View style={{flex:1 ,backgroundColor:COLORS.white}}>
         
          <View>
         
          <View>
        <FlatList
  data={DATA}
  renderItem={({ item }) =>
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
  } />
  </View>
  
  </View>
  
  </View>
   <View style={{flex:2,paddingHorizontal:12, marginTop:hp("1%")}}>
    <Text style={{...styles.PrimaryTxt, fontSize:hp("2.5%") ,backgroundColor:"White",flex:1}}>Order Items</Text>
   </View>
 
 <View style={{flex:30 ,backgroundColor:COLORS.white, paddingHorizontal:12}}>


<View>
    <FlatList
  data={data}
  renderItem={({ item }) =>
  <View style={{flex:1,flexDirection:"row",borderBottomWidth:hp("0.1%"), marginTop:hp("-1%"), borderBottomColor:"lightgrey" }}>
   <View style={{flex:1,justifyContent:"center"}}>
   <View style={{ height:hp("18%"), width:wp("33%"),padding:wp("3%")}}>
                  <Image
                    style={{ height: '100%', width: '100%'}}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmMhT7ihIcRVh9N6-B4odZV-H6IRQaOLmhw&usqp=CAU",
                    }}
                    resizeMode="stretch"
                  />
                </View>
   </View>
   <View style={{flex:1 ,paddingVertical:hp("2%")  }}>
    <View >
    <Text style={{color:COLORS.primary, right: 0,textAlign:"left",fontSize:hp("2.1%"),fontFamily:"Poppins-Regular"}}>{item.name}</Text>
    </View>
    <View style={{flexDirection:"row", marginTop:hp("1%") , marginBottom:("3%")}}>
    <View style={{flexDirection:"row"}}>
           <Text style={{color:COLORS.secondary, left:wp("0%"), right: 0, 
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular"}}>S</Text>
           <Text style={{color:COLORS.secondary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular"}}>ize</Text>     
        </View>
        <View style={{marginLeft:wp("2%")}}>
        <Text style={{color:COLORS.primary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular", }}>{item.size}</Text>    
    </View>
    </View>
    <View style={{flexDirection:"row"}}>
           <Text style={{color:COLORS.secondary, left:wp("0%"), right: 0, 
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular"}}>Q</Text>
           <Text style={{color:COLORS.secondary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular"}}>uantity</Text> 
          <View style={{marginLeft:wp("2%")}}>
        <Text style={{color:COLORS.primary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular", }}>{value}</Text>    
    </View>    
        </View>
    </View>
    <View style={{flex:0.5,flexDirection:"row", alignItems:"flex-end",  marginBottom:hp("3.5%") }}>
   
   <Text style={{flex:1,fontFamily:"Poppins-Bold", fontSize:hp("2.2%")}}>{item.price}</Text>
   
   </View>
  </View>
  } />
  </View> 
    </View>
  
      
</ScrollView>     
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
    backgroundColor:"white",
    paddingVertical:3,
    paddingHorizontal:2, 
    borderRadius:10 ,
    overflow:"hidden",
    marginTop:15,
    marginHorizontal:12,
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 5,
    elevation: 5
},
contentContainer: {
  paddingVertical: 20
}

})
export default OrderDetail;