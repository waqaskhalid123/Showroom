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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../Component/Styles';
import ListComp from '../Component/ListComp';
import { useNavigation } from "@react-navigation/native";


const TopVents = () => {

  const navigation = useNavigation();
  const [dataSource, setDataSource] = useState([]);
  const [selection, setselection] = useState(true);

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

  return (

    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <>
              
                <ListComp item={item} />
              
            </>

          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
          style={{paddingHorizontal:10}}
          columnWrapperStyle={{justifyContent:'space-between'}}
        />
      </View>
    </View>
  )
}
export default TopVents;