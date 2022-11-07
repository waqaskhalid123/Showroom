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
import {useNavigation} from "@react-navigation/native"


const Catagories=()=>{
  const navigation = useNavigation();
  const [dataSource, setDataSource] = useState([]);
  const [selection, setselection]= useState(true);
 
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

  console.log(selection)

  const onPress = () => {
    setselection(!selection)
    //navigation.navigate('Root',{name:nemail})
    
  };

    return(
      
    <View style={{flex:1}}>
      <View style={{flex:0.1,backgroundColor:COLORS.white}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[{ name: 'SHIRT' },{ name: 'JEANS'},{ name:'PENTS'}]}
        renderItem={({ item }) =><View>
       
        <TouchableOpacity activeOpacity={1} onPress={() => {  setselection(item.name) }}>
        <Text style={item.name === selection? styles.selectedCatagorytxt : styles.unSelectedCatagorytxt }>{item.name}</Text>
        
        </TouchableOpacity>
        </View>
         } />

      </View>
      
   <View style={styles.container3}>

        
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

    
{/* add flatlist */}
     
       {/*} <View>
      <FlatList
  showsHorizontalScrollIndicator={false}
  data={dataSource}
  renderItem={({ item }) =>
        
       
          
          <ListComp name={item.name} price={item.price} />

          
    }
     
  />
  </View>*/}
  
   
      {/*<View style={styles.container3}>
      {/*<View style={{ flex: 1.4, flexdirection: "row", }}>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[{ name: 'shirt', imgUri:"https://i.pinimg.com/736x/5d/4c/cb/5d4ccb8cb5050fba8e1c5c4049e1161e--mens-accessories-idea.jpg" },{ name: 'shirt', imgUri:"https://i.pinimg.com/736x/5d/4c/cb/5d4ccb8cb5050fba8e1c5c4049e1161e--mens-accessories-idea.jpg" },{ name: 'shirt', imgUri:"https://i.pinimg.com/736x/5d/4c/cb/5d4ccb8cb5050fba8e1c5c4049e1161e--mens-accessories-idea.jpg" },]}
            renderItem={({ item }) =>
            <TouchableOpacity  style={styles.flatListItem} activeOpacity={1} onPress={() => navigation.navigate('ResturantDetail')}>
             
              <Image
                  style={styles.imgStyle}
                  source={{
                    uri: item.imgUri,
                  }}
                  resizeMode="stretch"
                />
                <View style={[styles.flatItemText]}>
                <Text style={{ marginTop:hp("1%"), textAlign:"center",color:COLORS.white,}}>{item.name}</Text>
                </View>
                
               </TouchableOpacity>
            } />

        </View>*/}

{/*<View >

<FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
  data={[{ name: 'SHIRT' },{ name: 'JEANS'},]}
  renderItem={({ item }) =><>
       {selection?
        <TouchableOpacity onPress={onPress}>
        <Text style={styles.Catagorytxt}>{item.name}</Text>
        </TouchableOpacity>
        :
      <TouchableOpacity onPress={onPress}>
      <Text style={{...styles.Catagorytxt, textDecorationLine: 'underline' }}>{item.name}</Text>
      </TouchableOpacity>
     }
      </>
  } />

</View>
        
        <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 0.5,
              flexDirection: 'column',
              width:wp("44%"),
              height:hp("30%"),
              //backgroundColor:"yellow"
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
              resizeMode="stretch"
            />
            <View >
            <View style={styles.flatItemText}>
                <View>
                <Text style={{ marginHorizontal:hp("0.3%"),color:COLORS.primary,}}>{item.name}</Text>
                <Text style={{ marginHorizontal:hp("0.3%"),color:COLORS.primary,}}>{item.price}</Text>
                </View>
                 <View>
                   
                <TouchableOpacity activeOpacity={1} style={styles.flatItemButton}onPress={()=>{}}>
               <Text style={{ color:"white",fontSize:8}}>NEGOCIER LE PRIX </Text>
               </TouchableOpacity>
              </View>
              </View>

                </View>

          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
      </View>*/}
      </View>
    )
}

const styles = StyleSheet.create({
   container1:{
    flex:1.2,
    backgroundColor:"red",
 
   },
   container2:{
    flex:1.6,
    backgroundColor:"green"
   },
   container3:{
    flex:1.8,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
   
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

  imgStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },

  flatItemText:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:COLORS.white,
    width:wp("44%"),
    height:hp("6%"),
    marginLeft:wp("3%")
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
        //margiop:wp("3%"),
       // marginVertical:hp("1.5%"),
        borderRadius:hp("0.5%"),
        //paddingLeft:hp("2%"), 
        paddingVertical:hp("1%"),
        //marginLeft:wp("2%"),
        //marginRight:wp("2%"),
        paddingHorizontal:wp("2%"),
        marginTop:hp("1.5%"),
        marginBottom:hp("0.5%")
  
  },
   selectedCatagorytxt:{
    marginTop:hp("1%"),
    textAlign:"center", 
    color:COLORS.primary,
    marginRight: wp("6%"),
    marginLeft: wp("3%"),
    fontFamily:"Poppins-Regular",
    fontSize:hp("2%"),
    textDecorationLine: 'underline',
   },

   unSelectedCatagorytxt:{
    marginTop:hp("1%"),
    textAlign:"center", 
    color:COLORS.primary,
    marginRight: wp("6%"),
    marginLeft: wp("3%"),
    fontFamily:"Poppins-Regular",
    fontSize:hp("2%"),
    
   },

  
   

  });
  
  export default Catagories;