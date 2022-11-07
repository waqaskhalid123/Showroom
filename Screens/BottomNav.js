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
  Linking
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BackArrow from "react-native-vector-icons/Ionicons"
import Myicons from "react-native-vector-icons/Entypo"
import Cart from './Cart';
import Home from './Home';
import ProductDetail from './ProductDetail';
import Search from './Search';
import Chat from './Chat';
import { COLORS } from '../Component/Styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TrackOrder from './TrackOrder';


const BottomNav = () => {

  const customTabBarStyle = {
    activeTintColor: "red",
    inactiveTintColor: 'red',
    style: { backgroundColor: 'white' },
    headerShown: false
  }
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation()
  sendWhatsApp = () => {
    let msg = "type something";
    let phoneWithCountryCode = "xxxxxxxxxx";

    let mobile =
      Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
          .then(data => {
            data = 'whatsapp://send?text=hello&phone=03445549030'
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please insert message to send");
      }
    } else {
      alert("Please insert mobile no");
    }
  };




  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="red"
        screenOptions={customTabBarStyle}
        shifting="false">
        <Tab.Screen
          name="Home"

          options={{
            tabBarLabel: '',
            headerTitleAlign: "center",
            tabBarIcon: ({ focused, color }) => (
              <BackArrow name="home-outline" color={focused ? COLORS.redBtn : "gray"} size={20} />
            ),


            headerShown: true,
            headerLeft: () => (
              <BackArrow name="ios-menu-outline" size={25} onPress={() => { navigation.openDrawer(); }} style={{ paddingLeft: wp("5%") }} />
            ),
            headerTitleStyle: {

              fontFamily: "Poppins-Regular",
            },
            headerStyle: {

              height: 50
            },

          }}
          component={Home} />
        <Tab.Screen
          name="Search"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, color }) => (
              <BackArrow name="ios-search-outline" color={focused ? COLORS.redBtn : "gray"} size={20} />
            ),
            headerShown: true,
            headerLeft: () => (
              <BackArrow name="ios-menu-outline"  size={25} onPress={() => { navigation.openDrawer(); }} style={{ paddingLeft: wp("5%") }} />
            ),
            headerTitle: () => {
              return (


                <View style={{ flexDirection: "row", borderRadius: hp("0.5%"), borderWidth: 1, borderColor:COLORS.secondary, alignItems: "center", color: COLORS.primary , paddingRight: wp("10%")}}>
                  <BackArrow name="ios-search-outline" color={COLORS.secondary} size={20} style={{ paddingHorizontal: wp("1%") }} />
                  <TextInput style={{ fontSize: hp("2.5%"), color: COLORS.primary, borderColor: COLORS.secondary,borderRadius: hp("0.5%"), paddingRight: wp("30%"), paddigleft:-70,paddingVertical: hp("1%")  }} placeholder='Search' onChangeText={(val) => { }} />
                </View>
              )
            },
            headerShown: true,
            headerLeft: () => (
              <BackArrow name="ios-menu-outline" size={25}  onPress={() => { navigation.openDrawer(); }} style={{ paddingLeft: wp("5%"), marginRight:wp("5%")}} />
            ),
            headerRight: () => (
              <BackArrow name="options-outline" size={25} onPress={() => { navigation.openDrawer() }} style={{ paddingRight: wp("2.5%") }} />
            ),
            headerStyle: {
              height: hp("11%")
            },

          }}
          component={Search} />

        <Tab.Screen
          name="Add"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  flex: 1,
                  position: 'absolute',
                  //bottom: -15, // space from bottombar
                  height: 68,
                  width: 40,
                  //borderRadius: 68,
                  justifyContent: "flex-start",
                  alignItems: 'center',
                  backgroundColor: "white",
                  borderRadius: 40 / 2,
                  overflow: "hidden"
                }}
              >
                <BackArrow name="ios-logo-whatsapp" color={COLORS.greenbtn} size={36} onPress={() => { Linking.openURL('whatsapp://send?text=hello&phone=03445549030') }} />
              </View>
            ),

          }}
          component={Cart} />
        <Tab.Screen
          name="Cart"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, color }) => (
              <BackArrow name="ios-cart-outline" color={focused ? COLORS.redBtn : "gray"} size={20} />
            ),
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => (
              <BackArrow name="ios-menu-outline" size={25} onPress={() => { navigation.openDrawer(); }} style={{ paddingLeft: wp("5%") }} />
            ),
            
            headerTitleStyle: {

              fontFamily: "Poppins-Regular",
            },
            headerStyle: {

              height: 50
            },
          }}
          component={Cart} />
        <Tab.Screen
          name="Order Tracker"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused, color }) => (
              // <BackArrow name="ios-person-outline" color={color} size={20} />
              <BackArrow name="ios-locate-outline" color={focused ? COLORS.redBtn : "gray"} size={20} />
            ),
            headerShown: true,
            headerLeft: () => (
              <BackArrow name="ios-menu-outline" size={25} onPress={() => { navigation.openDrawer(); }} style={{ paddingLeft: wp("5%") }} />
            ),
            headerTitleAlign: "center",
           
            headerTitleStyle: {

              fontFamily: "Poppins-Regular",
            },
            headerStyle: {
              height: 50
            },
            tabBarHideOnKeyboard: true
          }}
          component={TrackOrder} />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  input1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: hp("0.5%"),
    marginVertical: hp("2%"),
    marginLeft: wp("8%"),
    paddingRight: wp("50%"),
    borderColor: COLORS.secondary,
    //padding:hp("0.5%")


  },
})
export default BottomNav