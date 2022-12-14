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
import { useNavigation } from "@react-navigation/native"
import axios from 'axios';
import { ServerApi } from './Api/Api';


const FormData = global.FormData;

const Catagories = ({ route }) => {
  const { id } = route.params
  const { catagories } = route.params

  const navigation = useNavigation();
  const [dataSource, setDataSource] = useState([]);
  const [selection, setselection] = useState(id);
  const [products, setproducts] = useState([]);
  const formdata = new FormData();

  formdata.append("category_id", selection)


  const postuser = async () => {
    let headers = {
      "key": ServerApi.Key,
      "Content-Type": ServerApi.contentType,
    }
    await axios.post(
      ServerApi.ApiProduct,
       {category_id:selection} ,
      {headers}
      
    )
      .then(response =>
        {//console.log(response.data.data)
        let pro  =(response.data.data)
       setproducts(pro)}
      )

      .catch( error=>console.log(error))

  };

  useEffect(() => {
    postuser()
  // console.log("======",products)
  }, [products])

  //setselection(id)
  //console.log("catagories id",id)
  //console.log("catagories data",catagories)

  {/*const formdata = new FormData();

    formdata.append("category_id",selection)
    
    
    const postuser=()=>{
        axios({
            method: ServerApi.Method,
            url: ServerApi.ApiCatagory,
            data: formdata,    
            headers:{
             "key":ServerApi.Key,
             "Content-Type":ServerApi.contentType,
            }
          })
          .then(function (response) {
            console.log("response",JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error.response.data);
          });

    };

    useEffect(()=>{
      postuser()
    },[])*/}

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

  // console.log(selection)

  const onPress = (index) => {
    setselection(index)
    setIndexValue(false)
    console.log("selection", selection)
    //navigation.navigate('Root',{name:nemail})

  };

  const [indexValue, setIndexValue] = useState(id);

  const data = [
    { name: 'SHIRT' },
    { name: 'JEANS' },
    { name: 'PENTS' },
    { name: 'TIE' },
    { name: 'TROUSER' },
    { name: 'BLAZER' },
    { name: 'JACKET' }

  ];

  return (

    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 0.1, backgroundColor: COLORS.white }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={catagories}
          renderItem={({ item, index }) => <View>
            <View>

              {/*{item.map((v, i) => (
            
            <>
            {i === indexValue?
             <Text style={i === indexValue? styles.selectedCatagorytxt : styles.unSelectedCatagorytxt }>{}</Text>
             :
             null
            }
             <Text style={item.name === selection? styles.selectedCatagorytxt : styles.unSelectedCatagorytxt }>{item.name}</Text>      
             <Text style={i === indexValue? styles.selectedCatagorytxt : styles.unSelectedCatagorytxt }>{item.name}</Text>
            <Text>key={index}</Text> 
            <Text>{console.log(i)}</Text>
           
            </>
            
          ))}*/}
            </View>

            {/*<TouchableOpacity  onPress={() => {onPress(index) }}>
       
        {index === indexValue?
         <Text style={selection === 0 || index === indexValue?  styles.selectedCatagorytxt : styles.unSelectedCatagorytxt }>{item.name}</Text>      
         :
          <Text style={index === selection?  styles.selectedCatagorytxt : styles.unSelectedCatagorytxt }>{item.name}</Text>            
        }
        <View>
        </View>
      </TouchableOpacity>*/}
            <TouchableOpacity onPress={() => { onPress(item.id) }}>

              {id === item.id ?
                <Text style={id === selection || id === indexValue ? styles.selectedCatagorytxt : styles.unSelectedCatagorytxt}>{item.name}</Text>
                :
                <Text style={item.id === selection ? styles.selectedCatagorytxt : styles.unSelectedCatagorytxt}>{item.name}</Text>
              }
              <View>
              </View>
            </TouchableOpacity>
          </View>
          } />

      </View>

      <View style={styles.container3}>

      <View>
       <FlatList
          data={products}
          renderItem={({ item }) => (
            <>
             
                <ListComp name={item.name} price={item.price} imgUri={"https://showroomdepot.fr/app/public/image/product/"+item.product_image[0].image}/>
                
                
            </>

          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
          style={{paddingHorizontal:10}}
          columnWrapperStyle={{justifyContent:'space-between'}}
        />
  </View>

        {/*<FlatList
          data={products}
          renderItem={({item}) => (
            <>
           <Text>{console.log("=>>",item.name)}</Text>

           {/* */}
        




        {/* </>

          )}
         {/* //Setting the number of column
          numColumns={2}
         // keyExtractor={(item, index) => index}
          
        />*/}

      </View>


      {/* add flatlist */}

      

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
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

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
    width: wp("44%"),
    height: hp("20%"),
    //paddingHorizontal:wp("10%"),
    // marginVertical: hp("10%"),
    marginTop: hp("3%"),
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
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },

  flatItemText: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.white,
    width: wp("44%"),
    height: hp("6%"),
    marginLeft: wp("3%")
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'uellow',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    //borderTopRightRadius:10,
    //borderTopLeftRadius:10,
    flex: 1,
    width: wp("44%"),
    height: hp("20%"),
    //paddingHorizontal:wp("10%"),
    // marginVertical: hp("10%"),
    marginTop: hp("1%"),
    marginHorizontal: wp("3%"),
    backgroundColor: "white",
    shadowOpacity: 10,
    shadowColor: "grey",
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: "blue"
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

  },
  selectedCatagorytxt: {
    marginTop: hp("1%"),
    textAlign: "center",
    color: COLORS.primary,
    marginRight: wp("6%"),
    marginLeft: wp("3%"),
    fontFamily: "Poppins-Bold",
    fontSize: hp("2%"),
    textDecorationLine: 'underline',
  },

  unSelectedCatagorytxt: {
    marginTop: hp("1%"),
    textAlign: "center",
    color: COLORS.primary,
    marginRight: wp("6%"),
    marginLeft: wp("3%"),
    fontFamily: "Poppins-Regular",
    fontSize: hp("2%"),

  },




});

export default Catagories;