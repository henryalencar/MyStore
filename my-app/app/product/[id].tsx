import { StyleSheet, Text, ScrollView, Image } from 'react-native'; 
import { Button } from '../../components/button/button'; 
import { router, useLocalSearchParams, Stack } from 'expo-router'; 
import { getProductsById } from '../../services/product'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 

export default function ProductScreen() { 
  const { id } = useLocalSearchParams(); 
  const idProduct = parseInt(id as string, 10); 
  const product = getProductsById(idProduct); 

  if (!product) { 
    router.back(); 
    return null; 
  } 

  function handleComprar() { 
    if (product) { 
      alert(`Você comprou o produto ${product.title} no valor de R$ ${product.price.toFixed(2)}`); 
    } 
  } 

  return ( 
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}> 
      <Stack.Screen 
        options={{ 
          headerShown: true, 
          title: "Detalhes do Produto", 
          headerBackTitle: "Voltar", 
        }} 
      />

      <ScrollView 
        style={styles.productArea} 
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', padding: 16, gap: 16 }} 
      > 
        <Image source={{ uri: product.image }} style={styles.productImage} /> 
        <Text style={styles.productTitle}>{product.title}</Text> 
        <Text style={styles.productPrice}>R\$ {product.price.toFixed(2)}</Text> 
        <Button title="Comprar" onPress={handleComprar} /> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA', 
  }, 
  productArea: { 
    flex: 1, 
    width: '100%', 
  }, 
  productImage: { 
    width: '100%', 
    height: 280, 
    borderRadius: 16, 
    backgroundColor: '#FFF', 
    marginBottom: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 10, 
    elevation: 2, 
  }, 
  productTitle: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: '#1A1A1A', 
    textAlign: 'center', 
    marginHorizontal: 8, 
  }, 
  productPrice: { 
    fontSize: 22, 
    fontWeight: '600', 
    color: '#2E7D32', 
    marginTop: 4, 
    marginBottom: 12, 
  }, 
});
