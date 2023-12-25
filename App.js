import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



import { CartProvider } from "./CartContext.js";
import Product from "./components/Product.js";
import ProductDetails from "./screens/ProductDetails.js";
import ShoppingCart from "./screens/ShoppingCart.js";



const Stack = createNativeStackNavigator();

function App(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Product}   />
          <Stack.Screen name="ProductDetails" component={ProductDetails}   />
          <Stack.Screen name="ShoppingCart" component={ShoppingCart}/>

        
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;