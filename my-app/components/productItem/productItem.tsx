import { View, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router"; 
import { styles } from "./productItemStyle"; 
import { Product } from "../../types/product";

type ProductProps = {
  product: Product; 
};

export function ProductItem({ product }: ProductProps) {
  return (
    
    <Link href={`/product/${product.id}`} asChild>
      <Pressable style={styles.card}>
        <Image 
          source={{ uri: product.image }} 
          style={styles.imagemProduto} 
          resizeMode="cover"
        />

        <View>
          <Text style={styles.itemTitulo}>{product.title}</Text>
          <Text style={styles.itemPreco}>R\$ {product.price.toFixed(2)}</Text>
          <Text style={styles.itemDescricao}>{product.description}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
