import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../Header';


export default function ProductDetail({ route,navigation }) {
  const { item } = route.params;

  const addToCart = async (product) => {
    try {
      const existingCart = await AsyncStorage.getItem("cart");
      let cart = existingCart ? JSON.parse(existingCart) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
      } else {
        product.quantity = 1;
        cart.push(product);
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));

      console.log("Sản phẩm đã được thêm vào giỏ hàng thành công!");
      alert("Thêm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  return (
    <View style={styles.container}>
            <View style={styles.header}>
        <Header navigation={navigation} />
      </View>
      <View style={styles.image}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </View>
     
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>Price: ${item.price}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productCategory}>directory: {item.category}</Text>
    
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addToCartButtonText} >Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
   
  },
  image: {
    alignItems:"center"
  },
  productImage: {
    width: '100%',
    height: 200,
    aspectRatio: 1,
    resizeMode: 'center',
    marginBottom: 16,
    
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
   
  },
  productPrice: {
    fontSize: 18,
    color: 'red',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
  
  },
  productCategory: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productRating: {
    fontSize: 16,
    color: 'orange',
  },
  ratingNumber: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 16,
    color: 'gray',
  },
  addToCartButton: {
    backgroundColor: '#3399FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems:"center",
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});