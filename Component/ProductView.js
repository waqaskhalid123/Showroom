import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,

} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../Component/Styles';

const ProductView = ({
    title,
    price,
    imageURL,
    buttonContainerStyle,
    buttonTextStyle,
    onPress,
    type,
    })=>{
  const styles = StyleSheet.create({

   itemText:{
     flexDirection:"row",
     justifyContent:"space-around",
     alignItems:"center",
     backgroundColor:COLORS.white,
     width:wp("44%"),
     height:hp("6%"),
   },
  

   productImage: {
     width:wp("44%"),
     height:hp("20%"),
   },
  
   whatsAppButtonContainer:{
         
     backgroundColor:COLORS.greenbtn,
     borderRadius:hp("0.5%"),
     paddingVertical:hp("1%"),
     paddingHorizontal:wp("2%"),
   
   }
   });

    return(

        
            
        <View
        style={{
          flex : 1
        }}>
        <Image
          style={styles.productImage}
          source={{uri: 'https://i.pinimg.com/736x/5d/4c/cb/5d4ccb8cb5050fba8e1c5c4049e1161e--mens-accessories-idea.jpg'}}
          resizeMode="stretch"
        />
        <View >
        <View style={styles.itemText}>
            <View>
            <Text style={{ color:COLORS.primary,}}>{title}</Text>
            <Text style={{ color:COLORS.primary,}}>{price}</Text>
            </View>
               
            <TouchableOpacity activeOpacity={1} style={styles.whatsAppButtonContainer}onPress={()=>{}}>
           <Text style={{ color:"white",fontSize:8}}>NEGOCIER LE PRIX </Text>
           </TouchableOpacity>
          
          </View>

            </View>

      </View>
    );
};

export default ProductView;