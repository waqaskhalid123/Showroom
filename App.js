/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import BackArrow from "react-native-vector-icons/Ionicons"
import Home from './Screens/Home';
import Catagories from './Screens/Catagories';
import ProductDetail from './Screens/ProductDetail';
import Cart from './Screens/Cart';
import Dropdown from './Screens/Dropdown';
import BottomNav from './Screens/BottomNav';
import DrawerNav from './Screens/DrawerNav';
import TopVents from './Screens/TopVents';
import OrderHistory from './Screens/OrderHistory';
import OrderDetail from './Screens/OrderDetail';
import TrackOrder from './Screens/TrackOrder';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import AboutUS from './Screens/AboutUs';
import Faqs from './Screens/Faqs';
import Splash from './Screens/Splash';




const App=()=>{
 
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer >
    <Stack.Navigator  screenOptions={{headerShown:true}}>

    <Stack.Screen name="Splash" component={Splash} options={{
      title:"helo", headerShown:false
    }} />

    <Stack.Screen name="DrawerNav" component={DrawerNav} options={{
      title:"helo", headerShown:false
    }} />

    <Stack.Screen name="AboutUS" component={AboutUS} options={{headerShown:true, 
      title:"About Us",
      headerTitleAlign:"center", 
       headerTitleStyle: {    
        fontFamily:"Poppins-Regular",
        },
        headerStyle: {
                          
          height:50
        },
        }}   />

    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown:true, 
      title:"Privacy Policy",
      headerTitleAlign:"center", 
       headerTitleStyle: {    
        fontFamily:"Poppins-Regular",
        },
        headerStyle: {
                          
          height:50
        },
        }}  /> 

    <Stack.Screen name="Faqs" component={Faqs} options={{headerShown:true, 
      title:"FAQS",
      headerTitleAlign:"center", 
       headerTitleStyle: {    
        fontFamily:"Poppins-Regular",
        },
        headerStyle: {
                          
          height:50
        },
        }} />

    <Stack.Screen name="Track Order" component={TrackOrder}
    options={{headerShown:true, 
      headerTitleAlign:"center", 
       headerTitleStyle: {    
        fontFamily:"Poppins-Regular",
        },
        headerStyle: {
                          
          height:50
        },
        }}  />

    <Stack.Screen name="Order History" component={OrderHistory}
     options={{headerShown:true, 
      headerTitleAlign:"center", 
       headerTitleStyle: {    
        fontFamily:"Poppins-Regular",
        },
        headerStyle: {
                          
          height:50
        },
        }}/>

    <Stack.Screen name="OrderDetail" component={OrderDetail} 
    options={{headerShown:true, 
    headerTitleAlign:"center", 
    headerTitleStyle: {    
      fontFamily:"Poppins-Regular",
      },
      headerStyle: {
                        
        height:50
      },
      }} />
   
    <Stack.Screen name="BottomNav" component={BottomNav} /> 

    <Stack.Screen name="cart" component={Cart} options={{headerShown:true,headerTitleStyle: {
        
        fontFamily:"Poppins-Regular",
        },
        headerStyle: {
            
    height:100
  },}} />

    <Stack.Screen name="Home" component={Home} />
    

    <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
      headerShown:true,
      headerTitleAlign:"center",
      title:"Product Details",
      headerTitleStyle: {fontFamily:"Poppins-Regular"},
      headerTitleAlign:"center", 
      headerTitleStyle: {    
      fontFamily:"Poppins-Regular",
      },
      headerRight: () => (
        <BackArrow name="ios-cart-outline" size={25} onPress={() => {}} style={{ paddingRight: wp("2.5%")}} />
      ),
      headerStyle: {               
      height:50
      },}} />

    <Stack.Screen name="Dropdown" component={Dropdown} />

    <Stack.Screen name="Catagories" component={Catagories} 
    options={{
    headerShown:true, headerTitleAlign:"center",
    headerTitleStyle: {    
    fontFamily:"Poppins-Regular",
    },
    headerRight: () => (
      <BackArrow name="options-outline" size={25} style={{ paddingRight: wp("2.5%"), }} />
    ),
    headerStyle: {
                      
      height:50
    },}} /> 

    <Stack.Screen name="TopVents" component={TopVents} options={{headerShown:true, 
    headerTitleAlign:"center", 
    headerRight: () => (
      <BackArrow name="options-outline" size={25} style={{ paddingRight: wp("2.5%"), }} />
    ),
     headerTitleStyle: {    
      fontFamily:"Poppins-Regular",
      },
      headerStyle: {
                        
        height:50
      },
      }} /> 
     
    
  </Stack.Navigator>
   </NavigationContainer>
  );
}
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
    marginLeft:wp("20%"),
    marginBottom:wp("1%"),
    //paddingTop:hp("5%")
    
   
  },
 })
export default App;
