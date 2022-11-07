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
import { COLORS } from '../Component/Styles';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {useNavigation} from "@react-navigation/native"

const Home=()=>{
  const navigation = useNavigation();
  const [dataSource, setDataSource] = useState([]);
 
  useEffect(() => {
    let items = Array.apply(null, Array(5)).map((v, i) => {
      return {
        id: i,
        name: 'Shirt',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMWzl7hvKunPV0cNCQjHxGqjwGjvByQFyJg&usqp=CAU' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

  const images = [
    {
      image:'https://sewingiscool.com/wp-content/uploads/2020/06/How-to-Alter-a-Coat-That-Is-Too-Big-or-Small-Easy-Tips.jpg',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:'https://sewingiscool.com/wp-content/uploads/2020/06/How-to-Alter-a-Blazer-That-is-Too-Big-or-Small-Easy-Tips.jpg',
     desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
     },
     {
      image:'https://www.theplunge.com/wp-content/uploads/2018/04/alterations-to-make-to-an-off-the-peg-suit-shoulders.jpg',
     desc:
      'Red fort in India New Delhi is a magnificient masterpeiece of humans',
     }
    
   ];
   

    return(
      
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      <ScrollView nestedScrollEnabled={false} >
 
      <View style={{backgroundColor:COLORS.white}}>
      <View >
      
      <FlatListSlider 
      style={{flex:1,width:100,height:100}}
      data={images} 
     indicatorActiveColor={'black'}
      indicatorInActiveColor={'grey'}
      indicatorActiveWidth={30}
      animation
      height={240}
      timer={5000}
      onPress={item => {}}
      
    />
        
    </View>
      </View>

     
      
      <View style={styles.container2}>
      <View style={{marginVertical:wp("2%"), marginTop:("8%")}}>
        <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate("TopVents")}}>
        <View style={{...styles.imgBck, marginBottom:wp("5%")}}>
      <Image 
           style={{ height: '100%', width: '100%', overflow: "hidden", 
           opacity: 0.6, }}
           source={{
             uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMWzl7hvKunPV0cNCQjHxGqjwGjvByQFyJg&usqp=CAU",
           }}
           resizeMode="stretch"
           />
         <Text style={{color:"white", top:hp("8%"), left: 0, right: 40, height: 300,
           textAlign:"center",fontSize:hp("3%"),position:"absolute",  }}>Top</Text>
           <Text style={{color:"white", top:hp("8%"), left: 50, right: 0, height: 300,
           textAlign:"center",fontSize:hp("3%"),position:"absolute", textDecorationLine: 'underline' }}>Vents</Text>
           </View>
           </TouchableOpacity>


           <TouchableOpacity activeOpacity={1}>
           <View style={styles.imgBck}>
      <Image 
           style={{ height: '100%', width: '100%', overflow: "hidden", 
           opacity: 0.6, }}
           source={{
             uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLMWzl7hvKunPV0cNCQjHxGqjwGjvByQFyJg&usqp=CAU",
           }}
           resizeMode="stretch"
           />

           <Text style={{color:COLORS.white, fontFamily:"Poppins-Regular",top:hp("8%"), left: 0, right: 40, height: 300,
           textAlign:"center",fontSize:hp("3%"),position:"absolute",  }}>Our</Text>
           <Text style={{color:COLORS.white, top:hp("8%"), fontFamily:"Poppins-Regular", left: 90, right: 0, height: 300,
           textAlign:"center",fontSize:hp("3%"),position:"absolute", textDecorationLine: 'underline' }}>Collection</Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
          <ScrollView horizontal={true} >
      <View style={styles.container3}>
     
        <View style={{flex:1,flexDirection:"row",marginBottom:-10,marginTop:hp("2%")}}>
        <Text style={{color:COLORS.primary, left:wp("30%"), right: 0,
           textAlign:"center",fontSize:hp("3%"),fontFamily:"Poppins-Regular"  }}>Top</Text>
           <Text style={{color:COLORS.primary,  left:wp("32%"), right: 0,
           textAlign:"center",fontSize:hp("3%"),fontFamily:"Poppins-Regular", textDecorationLine: 'underline' }}>Catagories</Text>
        </View>
     
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
        
        <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate("Catagories")}}>
          <View
            style={{
              
              flexDirection: 'column',
             marginBottom:wp("2%"),
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
            <View style={{backgroundColor:COLORS.primary, paddingVertical:wp("1%"), marginHorizontal:wp("3%"),borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{fonstSize:20, textAlign:"center",color:COLORS.white, fontFamily:"Poppins-Regular"}}>{item.name}</Text>
                </View>
          </View>
           </TouchableOpacity>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
       
      </View>
      
      </ScrollView>
      </ScrollView>
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
    backgroundColor:COLORS.white
   },
   container3:{
    flex:1.8,
    //backgroundColor:"blue"
   },
   imgBck:{
   // flex: 1,
    height:hp("20%"),
    width:wp("100%"),
    backgroundColor:"black",
    position:"relative"
   },
   flatListItem: {
    flex:1,
    width:wp("44%"),
    height:hp("20%"),
    paddingHorizontal:wp("10%"),
   marginVertical: hp("10%"),
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
   backgroundColor:COLORS.primary,
   width:wp("44%"),
   height:hp("3%"),
   marginLeft:wp("3%"),
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
  
   
 
  },
  container: {
    flex:1,
    justifyContent: 'center',
    //backgroundColor: 'uellow',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    //height: 100,
    //borderTopRightRadius:10,
    //borderTopLeftRadius:10,
    //flex:1,
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
    elevation: 10,
  },
  contentContainer: {
    paddingTop: hp("20%"),
    
  }
  });
  
  export default Home;