import React, { useEffect, useState } from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Myicons from "react-native-vector-icons/Ionicons"
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import Arrow from "react-native-vector-icons/Ionicons"
import BackArrow from "react-native-vector-icons/MaterialIcons"
import { COLORS } from '../Component/Styles';
import AboutUS from './AboutUs';
import PrivacyPolicy from './PrivacyPolicy';
import Faqs from './Faqs';
import OrderHistory from './OrderHistory';
import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {


  const navigation = useNavigation();
  return (

    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />} screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: "black",
        width: wp("80%"),

      }, drawerPosition: "left",
      drawerActiveBackgroundColor: "black",



    }}

    >
      <Drawer.Screen name='Draw' component={BottomNav} options={{
        headerShown: false, headerStatusBarHeight: hp("1%"),
        drawerItemStyle: { height: 0, },
        headerRight: () => (
          <BackArrow name="options-outline" size={25} style={{ paddingRight: wp("2.5%") }} />
        ),
        headerTitleAlign: "center",


      }} />

    </Drawer.Navigator>


  );
};
const styles = StyleSheet.create({

  image1: {

    width: 80,
    height: 60,
    // borderRadius: hp("100%"),
    borderWidth: wp("1%"),
    //borderColor: "rgba(255,212,1,255)",
    backgroundColor: "rgba(255,212,1,255)",
    overflow: "hidden",
    //marginVertical: hp("3%"),
    marginLeft: wp("20%"),
    marginBottom: wp("1%"),
    //paddingTop:hp("5%")


  },
})
export default DrawerNav;