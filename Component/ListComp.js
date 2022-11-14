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
import { useNavigation } from "@react-navigation/native"

const ListComp = ({
  name,
  price,
  imgUri,
  // img,
  //item
}) => {
  const navigation = useNavigation();
  const [dataSource, setDataSource] = useState([]);
  return (
  
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => { navigation.navigate("ProductDetail") }}
      style={{ marginBottom: 15 }}
    >
      <View>
      
        <View
          style={{
            // flex: 0.5,
            flexDirection: 'column',
            width: wp("44%"),
            height: hp("30%")
          }}>
          <Image
            style={styles.imageThumbnail}
            source={{ uri: imgUri}}
            resizeMode="stretch"
          />
          <View >
            <View style={styles.flatItemText}>

              <View style={{ flex: 1, justifyContent: "center", paddingVertical: hp("1.5%") , backgroundColor:"red"}} >
                <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Regular", fontSize: hp("2%") }}>{name}</Text>
                <Text style={{ color: COLORS.primary, fontFamily: "Poppins-Bold", fontSize: hp("2%") }}>{price}</Text>
              </View>
              <View style={{ flex: 1.5, justifyContent: "flex-end" }}>

                <View style={{ flex: 1, backgroundColor: COLORS.greenbtn, flexDirection: "row", justifyContent: "center", alignItems: "flex-end", marginHorizontal: 5, marginTop: 15, borderRadius: 5 }} >
                  <TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 5, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                      <Ionicons name='logo-whatsapp' size={10} color={COLORS.white} style={{ marginRight: 3 }} />
                      <Text style={{ color: COLORS.white, fontFamily: "Poppins-Regular", fontSize: hp("1%") }}>NEGOCIER LE PRIX</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
            </View>

          </View>

        </View>
      </View>
    </TouchableOpacity>


  )
}

const styles = StyleSheet.create({
  container1: {
    flex: 1.2,
    backgroundColor: "red",

  },
  container2: {
    flex: 1.6,
    backgroundColor: "green"
  },
  container3: {
    flex: 1.8,
    //backgroundColor:"blue"
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
    width: wp("40%"),
    height: hp("20%"),
    //paddingHorizontal:wp("10%"),
    marginVertical: hp("10%"),

    marginTop: hp("3%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10,
  },

  imgStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },

  flatItemText: {
    flexDirection: "row",
    //justifyContent:"space-around",
    //alignItems:"center",
    width: wp("43%"),
    height: hp("6%"),
    //marginLeft:wp("3%"),
    //backgroundColor:"red",
    // marginLeft: wp("3%"),
    marginRight: wp("5%"),
    marginVertical: hp("1%")
    // paddingRight: wp("4%"),

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'uellow',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    //height: 100,
    //borderTopRightRadius:10,
    //borderTopLeftRadius:10,
    flex: 1,
    //width:wp("44%"),
    //height:hp("20%"),
    //paddingHorizontal:wp("10%"),
    // marginVertical: hp("10%"),
    marginTop: hp("1%"),
    // marginLeft: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10,
    //backgroundColor:"blue"
  },
  contentContainer: {
    paddingTop: hp("20%"),

  },

  flatItemButton: {
    flex: 1,
    backgroundColor: COLORS.greenbtn,
    //margiop:wp("3%"),
    // marginVertical:hp("1.5%"),
    borderRadius: hp("0.5%"),
    //paddingLeft:hp("2%"), 
    paddingVertical: hp("1%"),
    //marginLeft:wp("2%"),
    //marginRight:wp("2%"),
    paddingHorizontal: wp("2%"),
    marginTop: hp("1.5%"),
    marginBottom: hp("0.5%")

  }
});

export default ListComp;