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
import { COLORS } from '../Component/Styles';
import Myicons from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

const Cart=()=>{
  const [dataSource, setDataSource] = useState([]);
  const [selection, setselection]= useState(true);
  const[value, setsvalue]= useState(1);

  const data=[
    {id:1, name: 'Blazer jacket 08', price:"$ 29.99" ,size:"large" },{id:2, name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },{id:3, name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },

  ];

  function Increment(){
    setsvalue(value+1);
  } 

  const arr=[];
    data.forEach(d => {
      arr.push(d.id)

    })

  function Decrement(id){
    if(value >0, value!=1)

    { 
      for(let x of arr)
      {
        console.log("x",x)
        console.log("id",x)
        if(x == id)
        {setsvalue(value-1);
        console.log("done")
      }
      }

    }
    
  } 


  

   const images =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfDxbrnbx46KygIzbiUwX0kqFUrrWva9Dcw&usqp=CAU",
    "https://image.mooresclothing.ca/is/image/Moores/37RL_21_MICHAEL_STRAHAN_SUIT_SEPARATE_JACKETS_GREY_SOLID_MAIN?imPolicy=pgp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvFMswNtMIB3oQEwYMBPam0v9A_oGm4KOrg&usqp=CAU"
   ]
  
    
     
    
    

    return(
      
    <View style={{flex:1}}>
 
     
       
   {/* <View style={styles.container2}>
    <FlatList
  
  
  data={[{ name: 'Blazer jacket 08', price:"$ 29.99" ,size:"large" },{ name: 'Blazer jacket 08', price:"$ 29.99",size:"large" },{ name: 'Blazer jacket 08', price:"$ 29.99",size:"large" }]}
  renderItem={({ item }) =>
  
    <View style={{
      backgroundColor: '#fff',
      //paddingVertical: 15,
      //paddingHorizontal: 20,
      //marginHorizontal: 20,
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 5,
      flexDirection: 'row-reverse',
      //position: 'relative'
    }}>
               
               
  
  </View>
                
               

              </View>
      
  } />
    </View> */}
    <View style={styles.container1}>
    {/*<FlatList
  data={data}
  renderItem={({ item }) =>
  <View style={{flex:1,flexDirection:"row",borderBottomWidth:hp("0.1%"), marginTop:hp("1%"), borderBottomColor:"lightgrey" }}>
   <View style={{flex:1,}}>
   <View style={{ height:hp("15%"), width:wp("30%"),padding:wp("3%"), justifyContent:"center", marginTop:hp("2%")}}>
                  <Image
                    style={{ height: '100%', width: '100%' }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmMhT7ihIcRVh9N6-B4odZV-H6IRQaOLmhw&usqp=CAU",
                    }}
                    resizeMode="contain"
                  />
                </View>
   </View>
   <View style={{flex:2  ,marginRight:wp("-8%"), paddingVertical:hp("3%") ,marginLeft:hp("4%") }}>
    <Text style={{color:COLORS.primary,right: 0,textAlign:"left",fontSize:hp("2.5%"),fontFamily:"Poppins-Regular",}}>{item.name}</Text>
    <View style={{flexDirection:"row", marginTop:hp("-1%") , marginBottom:("3%")}}>
    <View style={{flexDirection:"row"}}>
           <Text style={{color:COLORS.secondary, left:wp("0%"), right: 0, 
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular"}}>S</Text>
           <Text style={{color:COLORS.secondary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular", textDecorationLine: 'underline' }}>ize</Text>     
        </View>
        <View style={{marginLeft:wp("2%")}}>
        <Text style={{color:COLORS.primary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular", }}>{item.size}</Text>    
    </View>
    </View>
    <View style={{borderWidth:1,marginRight:wp("10%"),borderRadius:5,borderColor:"lightgrey", paddingVertical:hp("0.5%") }}>
        
        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-evenly",height:hp("5%")}}>
      <Myicons name='minus' size={18} color={COLORS.primary} onPress={()=>{Decrement(item.id)}} />
      
      <Text style={{color:COLORS.primary,fontFamily:"Poppins-Regular",fontSize:hp("2.5%") }}>{value}</Text>
    
      <Myicons name='plus' size={18} color={COLORS.primary} onPress={()=>{Increment()}} />
      </View>
      </View>
    </View>
   <View style={{flex:1,paddingVertical:10,padding:wp("3%"),alignItems:"flex-end" }}>
   <Ionicons name='close'size={12} color={COLORS.white}  style={{backgroundColor:COLORS.redBtn, borderRadius:20/2,height:20,width:20,  marginBottom:20 , padding:4 }}/>
   <View style={{paddingTop:hp("3%")}}>
   <Text style={{flex:1,fontFamily:"Poppins-Bold", fontSize:hp("2.2%")}}>{item.price}</Text>
   </View>
   </View>
  </View>
  } />
    </View>
    <View style={{...styles.container2,flexDirection:"row"}}>
      <View style={{flex:2,padding:wp("3%")}}>
    <Text style={{color:COLORS.primary,fontFamily:"Poppins-Regular"}}>Total</Text>
    <Text style={{color:COLORS.primary,fontFamily:"Poppins-Bold"}}>$29.99</Text>
    </View>
    <View style={{flex:1 ,padding:wp("3%") }}>
      
    <TouchableOpacity onPress={()=>{{}}}>
    <View style={{backgroundColor:COLORS.redBtn,borderRadius:hp("0.5%"),height:hp("6%") ,justifyContent:"center"}}>
     <Text style={{ color:COLORS.white,textAlign:"center",fontFamily:"Poppins-Regular",fontSize:14}}>Checkout</Text>
      </View>
    </TouchableOpacity>
    
</View>*/}
 <FlatList
  data={data}
  renderItem={({ item }) =>
  <View style={{flex:1,flexDirection:"row",borderBottomWidth:hp("0.1%"), marginTop:hp("1%"), borderBottomColor:"lightgrey" }}>
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
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular", textDecorationLine: 'underline' }}>ize</Text>     
        </View>
        <View style={{marginLeft:wp("2%")}}>
        <Text style={{color:COLORS.primary,  left:0, right: 0,
           textAlign:"center",fontSize:hp("2.2%"),fontFamily:"Poppins-Regular", }}>{item.size}</Text>    
    </View>
    </View>
        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-evenly",height: hp("5.5%"), width:wp("35%"),borderRadius:5 ,borderColor:COLORS.secondary, borderWidth:1}}>
      <Myicons name='minus' size={18} color={COLORS.primary} onPress={()=>{Decrement(item.id)}} />
      
      <Text style={{color:COLORS.primary,fontFamily:"Poppins-Regular",fontSize:hp("2.5%") }}>{value}</Text>
    
      <Myicons name='plus' size={18} color={COLORS.primary} onPress={()=>{Increment()}} />
      </View>   
    </View>
   <View style={{flex:0.5,paddingVertical:10,padding:wp("3%"),alignItems:"flex-end",backgroundColor:"red" }}>
   <Ionicons name='close'size={12} color={COLORS.white}  style={{backgroundColor:COLORS.redBtn, borderRadius:20/2,height:20,width:20,  marginBottom:wp("7%") , padding:4 }}/>
   <View style={{paddingTop:hp("3%")}}>
   <Text style={{flex:1,fontFamily:"Poppins-Bold", fontSize:hp("2.2%")}}>{item.price}</Text>
   </View>
   </View>
  </View>
  } />
</View>
    </View>
    
    
    
    )
}

const styles = StyleSheet.create({
   container1:{
    flex:7,
    backgroundColor:COLORS.white,
 
   },
   container2:{
    flex:1,
    backgroundColor:COLORS.white,   
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 20,
   },
   container3:{
    flex:1.8,
    backgroundColor:"blue"
   },
   imgBck:{
   // flex: 1,
    height:hp("15%"),
    width:wp("100%"),
    backgroundColor:"white",
    position:"relative"
   },
   flatListItem: {
    flex:1,
    width:wp("44%"),
    height:hp("20%"),
    //paddingHorizontal:wp("10%"),
   // marginVertical: hp("10%"),
    marginTop:hp("3%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
  
  },

  imgStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },

  flatItemText:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:COLORS.white,
    paddingHorizontal:wp("67%"),
    //width:"100%",
    //height:hp("6%"),
    marginBottom:wp("25%")
  },
  container: {
    flex:1,
    justifyContent: 'center',
    //backgroundColor: 'uellow',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    //borderTopRightRadius:10,
    //borderTopLeftRadius:10,
    flex:1,
    width:wp("44%"),
    height:hp("20%"),
    //paddingHorizontal:wp("10%"),
   // marginVertical: hp("10%"),
    marginTop:hp("1%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10,
    backgroundColor:"blue"
  },
  contentContainer: {
    paddingTop: hp("20%"),
    
  },

  flatItemButton:{
    backgroundColor:COLORS.greenbtn,
    marginHorizontal:wp("6%"),
     marginTop:hp("2%"),
     borderRadius:hp("1%"),
    paddingVertical:hp("1%"),
    paddingHorizontal:hp("3%"),
  
  },
   Catagorytxt:{
    marginTop:hp("1%"),
    textAlign:"center", 
    color:COLORS.primary,
    marginHorizontal: wp("3%"),
   },
   fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  cartContainer:{
    flexDirection:"row",
    justifyContent: 'center',
    //alignItems: 'center',
    flex:1,
    width:wp("44%"),
    height:hp("20%"),
    //paddingHorizontal:wp("10%"),
     marginVertical: hp("10%"),
    marginTop:hp("1%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10,
    backgroundColor:"blue"
  }

  });
  
  export default Cart;