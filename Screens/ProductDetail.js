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
  Dimensions
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../Component/Styles';
import Ionicons from "react-native-vector-icons/Ionicons"
import Myicons from "react-native-vector-icons/Feather"
import ListComp from '../Component/ListComp';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FlatListSlider } from 'react-native-flatlist-slider';
import Dropdown from './Dropdown';
import { Picker } from '@react-native-picker/picker';
import HorizontalList from '../Component/HorizontalList';

const ProductDetail = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [dataSource, setDataSource] = useState([]);
  const [selection, setselection] = useState(true);
  const [value, setsvalue] = useState(1);


  const width = Dimensions.get('window');
  const HEIGHT = Dimensions.get('window').height;
  useEffect(() => {
    let items = Array.apply(null, Array(5)).map((v, i) => {
      return {
        id: i,
        name: 'Jeans 74',
        price: "$ 29.99",
        img: 'https://cdn.shopify.com/s/files/1/1033/9361/products/JLZC2902-DBL_3_800x.jpg?v=1655718399' + (i + 1)

      };
    });
    setDataSource(items);
  }, []);


  function Increment() {
    setsvalue(value + 1);
  }

  function Decrement() {
    if (value > 0, value!=1) { setsvalue(value - 1); }
  }

  const DATA = [
    {
      id: 1,
      imguri: "https://sewingiscool.com/wp-content/uploads/2020/06/How-to-Alter-a-Coat-That-Is-Too-Big-or-Small-Easy-Tips.jpg",

    },
    {
      id: 2,
      imguri: "https://image.mooresclothing.ca/is/image/Moores/37RL_21_MICHAEL_STRAHAN_SUIT_SEPARATE_JACKETS_GREY_SOLID_MAIN?imPolicy=pgp",
    },
    {
      id: 3,
      imguri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvFMswNtMIB3oQEwYMBPam0v9A_oGm4KOrg&usqp=CAU",
    },
  ];

  const images = [
    {
      image: 'https://sewingiscool.com/wp-content/uploads/2020/06/How-to-Alter-a-Coat-That-Is-Too-Big-or-Small-Easy-Tips.jpg',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: 'https://sewingiscool.com/wp-content/uploads/2020/06/How-to-Alter-a-Blazer-That-is-Too-Big-or-Small-Easy-Tips.jpg',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: 'https://www.theplunge.com/wp-content/uploads/2018/04/alterations-to-make-to-an-off-the-peg-suit-shoulders.jpg',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    }

  ];


  return (

    <View style={{ flex: 1, backgroundColor:COLORS.white }}>

      <View style={styles.contentContainer}>

        <ScrollView nestedScrollEnabled={false} >
          <View >

            <FlatListSlider
              style={{ flex: 1, width: 100, height: 100 }}
              data={images}
              indicatorActiveColor={'black'}
              indicatorInActiveColor={'grey'}
              indicatorActiveWidth={30}
              animation
              height={300}
              timer={5000}

            />
          </View>

          <ScrollView nestedScrollEnabled={false} >
            <View style={styles.container2}>
              {/*<FlatList
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
              
      
  } />*/}
              <>
              <View style={{flex:1, marginTop:hp("3%")}}>
              <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Bold", fontSize: hp("2.5%") }}>Blazer jacket 08</Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, justifyContent: "center"}}>
                 {/*} <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Regular", fontSize: hp("2.5%") }}>Blazer jacket 08</Text>*/}
                  <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Bold", fontSize: hp("4%") }}>$ 29.99</Text>
                </View>

                <View style={{ flex: 1.5, marginTop:hp("0.5%"),justifyContent:"flex-start", alignItems:"flex-end" }}>

                  <View style={{ backgroundColor: COLORS.greenbtn, borderRadius: 5, width:wp("50%")}}>
                    <TouchableOpacity onPress={() => { { } }}>
                      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='logo-whatsapp' size={20} color={COLORS.white} style={{ paddingVertical: 7, paddingRight: 8, marginLeft: -2 }} />
                        <Text style={{ color: COLORS.white, textAlign: "center", fontFamily: "Poppins-Regular" }}>NEGOCIER LE PRIX</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: "row", marginTop: 5 }}>

                <View style={{ flex: 0.5 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{
                      color: COLORS.primary, left: wp("0%"), right: 0,
                      textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular"
                    }}>S</Text>
                    <Text style={{
                      color: COLORS.primary, left: 0, right: 0,
                      textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular", textDecorationLine: 'underline'
                    }}>ize</Text>
                  </View>
                  {/*<View style={{borderWidth:1,paddingVertical:wp("0.5%"),marginRight:wp("5%"),borderRadius:5}}>
      <Text style={{fontFamily:"Poppins-Regular",textAlign:"center",fontSize:15}}>Large</Text>
      </View>*/}



                  <View style={{ borderWidth: 1, justifyContent: "center", height: hp("5.5%"), marginRight: wp("0%"), borderRadius: 5, borderColor: COLORS.secondary }} >
                    <Picker
                      selectedValue={selectedLanguage}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                      }
                    >
                      <Picker.Item label="Large" value="Large" />
                      <Picker.Item label="Medium" value="Medium" />
                      <Picker.Item label="Small" value="Small" />
                    </Picker>
                  </View>



                </View>


                <View style={{ flex: 0.7 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{
                      color: COLORS.primary, right: 0,
                      textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular", marginLeft: wp("10%")
                    }}>Q</Text>
                    <Text style={{
                      color: COLORS.primary, left: wp("0.1%"), right: 0,
                      textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular", textDecorationLine: 'underline'
                    }}>uantity</Text>
                  </View>
                  <View style={{ borderWidth: 1, marginRight: wp("17%"), borderRadius: 5, borderColor: COLORS.secondary, marginLeft: wp("10%") }}>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"space-evenly",height: hp("5.5%") }}>
                      <Ionicons name='ios-remove-sharp' size={20} color={COLORS.primary} style={{}} onPress={() => { Decrement() }}  />
                      <Text style={{ fontFamily: "Poppins-Regular", fontSize: 18, }}>{value}</Text>
                      <Ionicons name='add' size={20} color={COLORS.primary} onPress={() => { Increment() }}  />
                    </View>
                  </View>
                </View>
              </View></>
              <View></View>
            </View>
          </ScrollView>
          <View style={{ padding: 12 }} >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{
                color: COLORS.primary, left: wp("0%"), right: 0,
                textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular"
              }}>D</Text>
              <Text style={{
                color: COLORS.primary, left: wp("0.1%"), right: 0,
                textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular", textDecorationLine: 'underline'
              }}>escription</Text>
            </View>
            <View style={{ marginLeft: hp("1.5%") }}>
              <Text style={{ color: COLORS.primary, fontSize: hp("2%"), textAlign: "left", fontFamily: "Poppins-Regular", }}>Lorem Ipsum is si.</Text>
            </View>
          </View>


          <View style={[styles.container3, { padding: 12 }]}>

            <View style={{ flex: 1, flexDirection: "row", marginBottom: -6, marginTop: -15 }}>
              <Text style={{
                color: COLORS.primary, left: 0, right: 0,
                textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular"
              }}>Related</Text>
              <Text style={{
                color: COLORS.primary, left: wp("2%"), right: 0,
                textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular", 
                marginBottom:wp("2%")
              }}>P</Text>
              <Text style={{
                color: COLORS.primary, left: wp("2.1%"), right: 0,
                textAlign: "center", fontSize: hp("3%"), fontFamily: "Poppins-Regular", textDecorationLine: 'underline'
              }}>roducts</Text>
            </View>
            
            <FlatList
              horizontal
              data={dataSource}
              renderItem={({ item }) => (

                <HorizontalList item={item}  />

              )}
            //Setting the number of column

            />
           
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <View style={{ flex: 1, flexDirection: "row" , alignItems:"center"}}>
            <View style={styles.input1}>
              <TextInput style={{flex: 1, fontSize:hp("2.5%"), paddingLeft: 10, color: COLORS.primary }} placeholder='Coupon Code' onChangeText={(val) => { }} />
              <View style={{ marginLeft: wp("3%"), paddingRight: hp("1%") }} >
                <Myicons name='x' size={20} color={COLORS.secondary} />
              </View>
            </View>
            <View style={{justifyContent:"center",alignItems:"center"}} >
              <View style={{backgroundColor:COLORS.redBtn, height:hp("6%"),width:wp("12%"), marginLeft:wp("3%"), justifyContent:"center",alignItems:"center",borderRadius: hp("0.5%"),}}>
              <Myicons color={"white"} name='check' size={20}  />
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 3 }}>

              <Text style={{ color: COLORS.primary }}>Total</Text>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Bold" }}>29.99</Text>
                <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Bold", textDecorationLine: 'line-through', marginLeft: hp("1%"), color: COLORS.primary }}>29.99</Text>
              </View>
            </View>
            <View style={{ flex: 1.4 }}>
              <View style={{ backgroundColor: COLORS.redBtn, height:hp("6%"), marginBottom: hp("1.5%"), justifyContent: "center", borderRadius: hp("0.5%") }}>
                <TouchableOpacity onPress={() => { { } }}>
                  <Text style={{ color: COLORS.white, textAlign: "center", fontFamily: "Poppins-Regular", fontSize: 14 }}>Add Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

    </View>


  )
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "red",

  },
  container2: {
    flex: 1,
    paddingHorizontal: 12
  },
  container3: {
    flex: 3,
    // backgroundColor:"blue"
  },
  imgBck: {
    // flex: 1,
    height: hp("15%"),
    width: wp("100%"),
    backgroundColor: "white",
    position: "relative"
  },
  flatListItem: {
    flex: 1,
    width: wp("44%"),
    height: hp("20%"),
    //paddingHorizontal:wp("10%"),
    // marginVertical: hp("10%"),
    marginTop: hp("3%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10
  },

  flatItemText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: wp("67%"),
    //width:"100%",
    //height:hp("6%"),
    marginBottom: wp("25%")
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'uellow',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    //borderTopRightRadius:10,
    //borderTopLeftRadius:10,
    flex: 1,
    width: wp("44%"),
    height: hp("20%"),
    //paddingHorizontal:wp("10%"),
    // marginVertical: hp("10%"),
    marginTop: hp("1%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "blue"
  },
  contentContainer: {
    paddingTop: hp("20%"),

  },

  flatItemButton: {
    flex: 1,
    backgroundColor: COLORS.greenbtn,
    marginHorizontal: wp("20%"),
    //marginTop:hp("2%"),
    borderRadius: hp("1%"),
    // paddingTop:hp("1%"),
    paddingHorizontal: hp("1%"),
    //marginBottom:hp("1%"),

  },
  Catagorytxt: {
    marginTop: hp("1%"),
    textAlign: "center",
    color: COLORS.primary,
    marginHorizontal: wp("3%"),
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  contentContainer: {
    //paddingVertical: 10
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
    paddingHorizontal: 12,
    height: 130,
    backgroundColor:COLORS.white,   
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 20,
    
  },
  input1: {
    flex: 1,
    //height:hp("6"),
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.secondary,
    borderWidth: wp("0.3%"),
    borderRadius: hp("0.5%"),
    //marginVertical: hp("1%"),
    paddingRight: hp("1%"),
    height:hp("6%"),
    width:wp("12%")
    //marginVertical: hp("1.5%"),


  },
  checkButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: wp("2%"),
    backgroundColor: COLORS.redBtn,
    //paddingHorizontal: wp("5%"),
    borderRadius: hp("0.5%"),
    //marginTop: hp("2%"),
   justifyContent:"center",
    padding: hp("1.5%"),
    color: COLORS.white,
    //paddingLeft:("2%")
    //height:40,
    //width:40
    //marginHorizontal:wp("4%"),
  },

  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' }


});

export default ProductDetail;