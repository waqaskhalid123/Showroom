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
  TextInput,
  KeyboardAvoidingView,
  LogBox
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../Component/Styles';
import Myicons from "react-native-vector-icons/Ionicons"
import Ionicons from "react-native-vector-icons/Ionicons"
import OrderDetail from './OrderDetail';

const TrackOrder=()=>{
  
    useEffect(() => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    const[display, setdisplay]=useState(true)
    const[value, setsvalue]= useState(1);
    const data=[
        {id:1, name: 'Blazer jacket 08', price:"$ 29.99" ,size:"large" },{id:2, name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },{id:3, name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },
    
      ];
    const DATA=[
        {id:"#32476868234", status: 'Pending', name:"Sheraz Ahmed" ,OrderTime:"17 Oct 2022 08:24 am", PaymentType:"Paypal", Amount:"€29.99", Address:"946 Fairground St. Miami Beach, FL 33139" },           
      ];

    return(
      <View style={{flex:1, backgroundColor:COLORS.white }}>
        <View style={{flex:1, paddingHorizontal:12}}>
        
        <View style={{flex:1 ,borderBottomWidth:1, borderBottomColor:"lightgrey", justifyContent:"center" }}>
        <View style={{justifyContent:"flex-end"}}>
        <Text style={{...styles.PrimaryTxt, fontSize:hp("2.5%")}}>Order Number</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",}}>
            
        <View style={{flexDirection:"row",borderRadius: hp("0.5%"), borderWidth:1, borderColor:COLORS.secondary ,justifyContent:"center" ,alignItems:"center", color: COLORS.primary}}>        
                 <TextInput style={{ fontSize:hp("2.5%")  , color: COLORS.primary , borderRadius: hp("0.5%"),paddingRight:wp("37%"), paddingVertical:hp("1%")}} placeholder='Order Number' onChangeText={(val) => { }} />
                 </View>

                 
            
            <TouchableOpacity activeOpacity={1} onPress={()=>{setdisplay(!display)}}>
            <View style={{flex:1, backgroundColor:COLORS.redBtn ,paddingHorizontal:wp("6%")  ,height:hp("6%") , justifyContent:"center" ,marginHorizontal:wp("2"), borderRadius:hp("0.5%")}}>
            <Text style={{...styles.PrimaryTxt, fontSize:14, color:COLORS.white}}>Track</Text>
            </View>
            </TouchableOpacity>
        </View>
        
        </View>
        </View>
        <KeyboardAvoidingView
        style={{flex: 5, backgroundColor:"White"}} 
        behavior={"height"} 
       keyboardVerticalOffset={hp("15%")}
        >
        {display?
         <View style={{flex:1}}>
         <ScrollView  style={{ width: "100%",height:"100%" }}>
           <View>
         <FlatList
   data={DATA}
   renderItem={({ item }) =>
   <View style={styles.orderList}>
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",paddingVertical:3, paddingHorizontal:5, }}>
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
   <View style={{flex:2,paddingHorizontal:12, marginTop:hp("1%")}}>
    <Text style={{...styles.PrimaryTxt, fontSize:hp("2.5%") ,backgroundColor:"White",flex:1}}>Order Items</Text>
   </View>
 
 <View style={{flex:30 ,backgroundColor:COLORS.white, paddingHorizontal:12}}>
     <FlatList
   data={data}
   renderItem={({ item }) =>
   <View style={{flex:1,flexDirection:"row",borderBottomWidth:hp("0.1%"),marginTop:hp("-1%"), borderBottomColor:"lightgrey" }}>
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
            textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular" }}>uantity</Text> 
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
     </ScrollView>
     </View>        
       
        :
        null
        }
        </KeyboardAvoidingView>

         
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
    
    //borderBottomColor:"grey", 
    backgroundColor:"white",
    paddingVertical:3,
    paddingHorizontal:2, 
    borderRadius:10 ,
    overflow:"hidden",
    //width:wp("0%"),
    marginTop:15,
    marginHorizontal:12,
    //paddingVertical:12,
    //borderRightWidth:1,
    //borderLeftWidth:1,
    //borderRightColor:"lightgrey",
    //borderLeftColor:"lightgrey",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 5,
    elevation: 5
},
contentContainer: {
  paddingVertical: 20
}
    
})
export default TrackOrder;