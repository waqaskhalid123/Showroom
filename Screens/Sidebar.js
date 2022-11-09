import React, {useState,useEffect} from 'react';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  FlatList,
  Text,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
  Alert,
  Image,
  Share

} from 'react-native';

import {DrawerContentScrollView,DrawerItem,DrawerItemList} from "@react-navigation/drawer"
import Myicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Component/Styles';
import BackArrow from "react-native-vector-icons/MaterialIcons"
import OrderHistory from './OrderHistory';


const Sidebar = ({...props})=>{
  
    const navigation = useNavigation();
    const [nemail,setemail]=useState("");
    const [sidebar, setsidebar] = useState('');

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'I am really enjoy using this application ',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
      

    return(
    <DrawerContentScrollView {...props}>
        
        <View style={styles.container}>
        
          <View style={{flex:1,backgroundColor:"black", justifyContent:"center", alignItems:"center"}}>
          <Image style={styles.image1}source={require("../assets/logo.png")} />
          </View>
         </View>

         <View style={{flex:1,borderWidth:1,height:hp("80%") , backgroundColor:"black"}}>
        <DrawerItemList {...props}/>

      
       
<View style={styles.draweritem}>
<DrawerItem icon={ () => (<Myicons style={styles.iconItem} name='md-help-circle-outline' size={17} color={COLORS.white}  /> )} 
      label={ () => (<Text style={styles.text}>FAQS</Text>)}
       onPress={() => { navigation.navigate("Faqs") }}/>
       </View>
<View style={styles.draweritem}>
<DrawerItem icon={ () => (<Myicons style={styles.iconItem} name='ios-information-circle-outline'
              size={17}
              color={COLORS.white}
               /> )} 
      label={ () => (<Text style={styles.text}>About Us</Text>)}
       onPress={() => { navigation.navigate("AboutUS") }}/> 
       </View>
       
<View style={styles.draweritem}>
<DrawerItem icon={ () => ( <Myicons style={styles.iconItem}  name='ios-time-outline' size={17} color={COLORS.white}  />)} 
      label={ () => (<Text style={styles.text}>Order history</Text>)}
       onPress={() => { navigation.navigate("Order History") }}/>
       </View>
      
       <View style={styles.draweritem}>
       <DrawerItem icon={ () => (<BackArrow style={styles.iconItem}  name='security' size={17} color={COLORS.white} /> )} 
      label={ () => (<Text style={styles.text}>Privacy Policy</Text>)}
       onPress={() => { navigation.navigate("PrivacyPolicy") }}/> 
        </View>
       
        <View style={styles.draweritem}>
        <DrawerItem icon={ () => (<Myicons style={styles.iconItem}  name='ios-person-add-outline' size={17} color={COLORS.white} /> )} 
      label={ () => (<Text style={styles.text}>Invite Friend</Text>)}
       onPress={() => { onShare() }}/>  
      </View>
       
       <View  style={{flex:1, paddingHorizontal:("20%"),marginBottom:("5%"),backgroundColor:"black", flexDirection:"row",justifyContent:"space-around",alignItems:"flex-end"}}>
       <View style={{width:"15%",height:"15%"}} >
      <Image  source={require("../assets/facebook.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
    </View>
       <View style={{width:"15%",height:"15%"}} >
      <Image  source={require("../assets/insta.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
    </View>
     
    <View style={{width:"15%",height:"15%"}} >
      <Image  source={require("../assets/snapchat.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
    </View>
    </View>
       </View>
      
       

      
   
       {/*<View style={{height:hp("40%") }}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"flex-end" ,paddingHorizontal:wp("12%"), marginBottom:hp("5%")}}>
        <View style={{width:"15%",height:"15%"}} >
      <Image  source={require("../assets/facebook.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
    </View>
       
    <View style={{width:"15%",height:"15%"}} >
      <Image  source={require("../assets/Insta.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
    </View>

    <View style={{width:"15%",height:"15%"}} >
      <Image  source={require("../assets/Snapchat.png")} style={{width:"100%",height:"100%"}} resizeMode="contain"/>
    </View>
        
        </View>
    </View>*/}
    </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:"red"
  },
  image1: {

    width: 100,
    height: 100,
    //borderRadius: hp("100%"),
    //borderWidth: wp("1%"),
    backgroundColor: "black",
    marginVertical: hp("2%"),
    //paddingleft:wp("10%"),
    //marginleft:10
   
  },
  draweritem:{
  //  borderWidth:1,
    marginVertical:hp("-1.4%"),
  },
  iconItem:{
   //borderWidth:1,
   marginRight:wp("-6%"),
   marginBottom:wp("2%")
  },

  text:{
    
   fontFamily:"Poppins-Regular",
   color:COLORS.white
  }
})
export default Sidebar;