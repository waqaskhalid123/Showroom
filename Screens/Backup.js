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
  TextInput
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../Component/Styles';
import Ionicons from "react-native-vector-icons/Ionicons"
import Myicons from "react-native-vector-icons/Feather"
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListComp from '../Component/ListComp';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const ProductDetail=()=>{
  const [dataSource, setDataSource] = useState([]);
  const [selection, setselection]= useState(true);
  const[value, setsvalue]= useState(0);

  
 
  useEffect(() => {
    let items = Array.apply(null, Array(5)).map((v, i) => {
      return {
        id: i,
        name: 'Jeans 74',
        price: "$ 29.99",
        src: 'https://cdn.shopify.com/s/files/1/1033/9361/products/JLZC2902-DBL_3_800x.jpg?v=1655718399' + (i + 1)

      };
    });
    setDataSource(items);
  }, []);


  function Increment(){
    setsvalue(value+1);
  } 

  function Decrement(){
    if(value > 0)
    {setsvalue(value-1);}
  } 


   const images =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfDxbrnbx46KygIzbiUwX0kqFUrrWva9Dcw&usqp=CAU",
    "https://image.mooresclothing.ca/is/image/Moores/37RL_21_MICHAEL_STRAHAN_SUIT_SEPARATE_JACKETS_GREY_SOLID_MAIN?imPolicy=pgp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvFMswNtMIB3oQEwYMBPam0v9A_oGm4KOrg&usqp=CAU"
   ]
  

    return(
      
    <View style={{flex:1}}>
        <View style={styles.contentContainer}>
       <ScrollView nestedScrollEnabled={true} >
       <View style={{backgroundColor:'#00c22e',flex:1}}>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        <Text>helo</Text>
        

      </View>
    <View style={styles.container2}>
    <FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
  data={[{ name: 'SHIRT', price:"$ 29.99" , size:"large" }]}
  renderItem={({ item }) =>
            <View >
              <View style={{flex:0.3,backgroundColor:"yellow",flexDirection:"row", marginTop:hp("1%"), paddingBottom:wp("5%")}}>
              <View style={{flex:1,marginLeft:hp("1.5%") }}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              </View>
              <TouchableOpacity activeOpacity={1} style={{...styles.flatItemButton, marginLeft:wp("42%")}}
         onPress={()=>{}}>
             <Text style={{textAlign:"center", color:"white",}}>NEGOCIER LE PRIX</Text>
         </TouchableOpacity>

              </View>

              <View style={{flex:1, flexDirection:"row" }}>

                <View>
                  <View style={{flex:1,backgroundColor:"blue",marginLeft:hp("1.5%")  }}>
                <Text style={{backgroundColor:"blue", color:COLORS.primary,fontSize:hp("3%"),}}>size</Text>
                <Text style={{borderWidth:1,borderColor:COLORS.primary,color:COLORS.primary,fontSize:20,  textAlign:"center"}}>{item.size}</Text>
                </View >

                </View>
                

                <View style={{backgroundColor:"green", flex:1,marginLeft:hp("15%"),marginRight:hp("15%"),}}>
                <Text style={{ color:COLORS.primary,fontSize:hp("3%"),textAlign:"center"}}>Quantity</Text>
                <View style={{flex:1, flexDirection:"row",borderWidth:1,borderColor:COLORS.primary,paddingHorizontal:wp("8%"), 
                //marginBottom:hp("5%"), 
                marginHorizontal:wp("3%")}} >
                  <TouchableOpacity onPress={()=>{Decrement()}}>
                <Text style={{ color:COLORS.primary,fontSize:hp("3%")
              }}>-</Text>
                </TouchableOpacity>
                <Text style={{color:COLORS.primary,fontSize:hp("3%"), textAlign:"center", marginHorizontal:wp("3%")}}>{value}</Text>
                <TouchableOpacity onPress={()=>{Increment()}}>
                <Text style={{ color:COLORS.primary,fontSize:hp("3%"),}}>+</Text>
                </TouchableOpacity>
                </View>
                </View>
                
              </View>
              
      
              </View>
      
  } />
    </View>
    <View style={{backgroundColor:"grey"}}>
    <View style={{backgroundColor:"pink",marginTop:hp("2%"),marginHorizontal:hp("1.5%") }}>
    <Text style={{color:COLORS.primary,fontSize:hp("3%"),textAlign:"left"}}>Description</Text>
    </View>
    <View style={{ backgroundColor:"red",marginLeft:hp("1.5%"),marginHorizontal:hp("1.5%") }}>
    <Text style={{color:COLORS.primary,fontSize:hp("2%"),textAlign:"left",marginBottom:hp("2%")}}>Lorem Ipsum is si.</Text>
    </View>
    </View>

    
    <View style={styles.container3}>      
      <FlatList
      horizontal
      data={dataSource}
      renderItem={({item}) => (

      <ListComp name={item.name} price={item.price} img={item.src}/>

      )}
      //Setting the number of column
      
      />
        </View> 
        </ScrollView>
        <View style={styles.footer}>
        <View style={{flex:1, flexDirection:"row"}}>
        <View style={styles.input1}>
            <TextInput style={{fontSize:17,flex:1}}    placeholder='Coupon Code' onChangeText={(val)=>{}}/>
            <View style={{marginLeft:wp("3%"),paddingRight:hp("1%")}} >
            <Myicons name='x'size={20} />
            </View>
            </View>
            <View >
            <Myicons name='check'size={20}  style={styles.checkButton} />
            </View>
        </View>
        <View style={{flex:1,flexDirection:"row"}}>
          <View style={{flex:3,marginLeft:hp("1.5%")}}>

            <Text style={{fontFamily:"Poppins-Bold"}}>Total</Text>

            <View style={{flex:1,flexDirection:"row"}}>
            <Text>29.99</Text>
            <Text style={{ textDecorationLine: 'line-through',marginLeft:hp("1%") }}>29.99</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <View style={{backgroundColor:COLORS.redBtn,flex:1,marginHorizontal:hp("1%"),marginBottom:hp("1.5%"),justifyContent:"center",borderRadius:1}}>
          <TouchableOpacity onPress={()=>{{}}}>
                <Text style={{ color:COLORS.white,textAlign:"center"}}>Add Cart</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
    </View>
      
    </View>
    
    
    )
}

const styles = StyleSheet.create({
   container1:{
   
    backgroundColor:"red",
 
   },
   container2:{
    flex:2,
    //backgroundColor:"green"
   },
   container3:{
    flex:3,
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
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10
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
    flex:1,
    backgroundColor:COLORS.greenbtn,
     marginHorizontal:wp("20%"),
     //marginTop:hp("2%"),
     borderRadius:hp("1%"),
    // paddingTop:hp("1%"),
    paddingHorizontal:hp("1%"),
    //marginBottom:hp("1%"),
  
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

  contentContainer: {
    paddingVertical: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
},
titleWrapper: {

},
inputWrapper: {

},
contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
},
footer: {
    height: 100
},
input1:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        borderColor: "#9b958d",
        borderWidth: wp("0.3%"),
        marginLeft:wp("1.5%"),
        marginVertical:hp("1%"),
        borderRadius:hp("2%"),
        paddingLeft:hp("1%"),  
        marginBottom:hp("0.5"),  
        paddingRight:hp("1%"),
 
  
  
},
checkButton:{
  flexDirection:"row",
  alignItems:"center",
  marginHorizontal:wp("2%"),
  backgroundColor:COLORS.redBtn,
  paddingHorizontal:wp("3%"),
  borderRadius:hp("0.5%"),
  marginVertical:hp("1%"),
  paddingVertical:hp("3%"),
  
  //marginHorizontal:wp("4%"),
}

  });
  
  export default ProductDetail;