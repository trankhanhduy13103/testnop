import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Footer from './Footer';
import Product from './products/Product';
import ProductJewelery from './products/Jewelery';
import ProductElectronics from './products/Electronics';
import ProductMenClothing from './products/MenClothing';
import ProductWomenClothing from './products/WomenClothing';
import Search from './products/Search';


export default function Home({ navigation }) {
  const navigateToProductDetail = (item) => {
   
    navigation.navigate('ProductDetail', { item });
  };
  return (
    <View style={styles.container}>
     <ScrollView>
        <View style={styles.search}>
        <Search />
      </View>
        <View>
          <Text style={styles.textnewproduct}>ALL PRODUCT</Text>
          <Product navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>JEWELERY</Text>
          <ProductJewelery navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>ELECTRONIC</Text>
          <ProductElectronics navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>MEN CLOTH</Text>
          <ProductMenClothing navigateToProductDetail={navigateToProductDetail} />
          <Text style={styles.textnewproduct}>WOMEN CLOTH</Text>
          <ProductWomenClothing navigateToProductDetail={navigateToProductDetail} />
          
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Footer navigation={navigation} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
   
  },

  footer: {
    justifyContent: 'flex-end',
  },
  banner:{
    marginTop:30,

  },
  search:{
    marginTop:15
  },
  header: {},
  goback:{},
  textnewproduct:{
   marginTop:20,
   marginBottom:10,
   fontSize:20,
   fontWeight: 'bold',
   color:"green",
   textAlign:'center'
  },

  
  
});
