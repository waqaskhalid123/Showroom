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
  

} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../Component/Styles';
import ListComp from '../Component/ListComp';
import {useNavigation} from "@react-navigation/native"
import {Picker} from '@react-native-picker/picker';


const Chat=()=>{
  const [selectedLanguage, setSelectedLanguage] = useState();
    return(
      <View >
       <Picker 
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
      }
      style={{
        borderWidth:1,marginHorizontal:wp("22%"),  borderRadius:10,justifyContent:"center", height:30
      }}
      >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }});
export default Chat;