import { View, Text, StatusBar, TouchableOpacity, TextInput,Button  } from 'react-native'
import React, { useState,useContext } from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {addItemToCart } from "../CartContext";
const ProductDetails = ({route}) =>{
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    
    const handleAddToCart = () => {
        addItemToCart(item); // Assuming `item` is the product you want to add
      };

    const handleGoToCart = () => {
        navigation.navigate('ShoppingCart');
      };
    const {item} =route.params;
    const[isModal, setIsModal] = useState(false);
    const[qty, setQty] = useState('1');
    const updateQty =(qty:string) =>{
        let quantity = parseInt(qty) + 1;
        setQty(quantity.toString())
    }
    return(
        <View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="#1e88e5" />
            </TouchableOpacity>
                <Image source={{uri: item.image}} style={{width:'100%', height:'80%'}}/>
                
                <View style={styles.dess}>
                    <Text style={{color:'#fff'}}>Tên sản phẩm: {item.name}</Text>
                    <Text style={{color:'#fff'}}>Giá: {item.price}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>setIsModal(true)}>
                    <Text style={{textAlign:'center', color:"#fff"}}>Mua ngay</Text>
                </TouchableOpacity>
                {isModal?<View style={styles.modal}>
                    <Text>Chọn số lượng</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{width:"25%", backgroundColor:'#e21f6d'}}><Text style={{fontSize:30, color:'#ffff', textAlign:'center'}}>-</Text></TouchableOpacity>
                        <TextInput style={{borderWidth:1, width:'50%', textAlign:'center'}} keyboardType='numeric' value={qty} onChangeText={(value)=>setQty(value)}/>
                        <TouchableOpacity style={{width:'25%', backgroundColor:'#e21f6d'}} onPress={()=>{updateQty(qty)}}>
                            <Text style={{fontSize:30, color:'#ffff', textAlign:'center'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#e21f6d', padding:15, borderRadius:30, marginTop:30}} onPress={()=>setIsModal(false)}>
                    <Button onPress={handleAddToCart} title="Add To Cart" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#e21f6d', padding:15, borderRadius:30, marginTop:30}} onPress={()=>setIsModal(false)}>
                    <Button onPress={handleGoToCart} title="Xem giỏ hàng" />
                    </TouchableOpacity>
                
                    </View>:''}
           </View>
    )
}
export default ProductDetails;
const styles = StyleSheet.create({
    dess:{
        backgroundColor:'gray',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30, 
        marginTop:80,
        position:'absolute',
        top:'55%',
        width:'100%',
        height:'80%',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    modal:{
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
        position:'absolute',
        top:'45%',
        width:'100%',
        height:'100%',
    },
    btn:{
        backgroundColor:'#e21f6d',
        padding:15,
        position:'absolute',
        bottom:-135,
        width:'100%',
        
        
    }
})