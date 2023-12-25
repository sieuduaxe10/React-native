import react, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";


const Product = () =>{
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    const getApi = ()=>{
        return fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
       getApi();  
    },[]);

    return(
    <View>
                    <ScrollView>
        <View style={styles.container}>
            <FlatList
            scrollEnabled={false}
             data={products}
             numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({item})=>
            <View style={styles.item}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetails',{item})}}>
                <Image source={{uri:item.image}} style= {{width:'100%', height:150}}/>
               
                    <View style ={styles.dess}>
                    <Text style={{color:'#fff', textAlign:'center', padding:7}}>{item.title}</Text>
                    <Text style={{color:'#fff', textAlign:'center', padding:7}}>{item.price}</Text>
                    </View>
                    </TouchableOpacity>
            </View>    
        }/>
                
        </View>
        </ScrollView>
    </View>
    )
}
export default Product;



const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap', // thuộc tính rớt xuống hàng
        justifyContent:'space-between', 
    },
    item:{
        width:'45%',
        marginBottom:10
    },
  dess:{
    backgroundColor:'black'
  },
  row:{
    flex:1,
    justifyContent:'space-between',
  },
}) 