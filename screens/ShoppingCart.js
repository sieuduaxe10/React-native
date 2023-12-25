import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../CartContext';

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const renderItem = ({ item }) => {
    if (!item || !item.id) {
      return null; // Skip rendering if item or item.id is undefined
    }
  
    return (
      <View style={styles.cartItem}>
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
    );
  };
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    padding: 8,
  },
  checkoutButton: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
