import { View, Text, FlatList, SafeAreaView } from "react-native"; 
import { StyleSheet } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/productItem/productItem";

export default function Home() {

  const products = getAllProducts();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.titulo}>Sou a Home</Text>
        
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
        
            <ProductItem product={item} />
          )}
          contentContainerStyle={styles.listaContainer} 
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  content: {
    flex: 1,
    paddingTop: 10, 
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  listaContainer: {
    paddingHorizontal: 16, 
  }

});






// // ==========================================
// //  CONSULTA
// // ==========================================
//
// import { View, Text, FlatList } from "react-native";
// import { StyleSheet } from "react-native";
// 
// export default function Home() {
// 
//   type Aluno = {
//     id: number;
//     nome: string;
//     cidade: string;
//   };
// 
//   let Alunos: Aluno[] = [
//     { id: 1, nome: "Henry", cidade: "Sao Paulo" },
//     { id: 2, nome: "John", cidade: "Rio de Janeiro" },
//     { id: 3, nome: "Jane", cidade: "Belo Horizonte" }
//   ];
// 
//   return (
//     <View style={styles.container}>
//       
//       <Text style={styles.titulo}>Sou a Home</Text>
//       
//       <FlatList
//         data={Alunos}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <Text style={styles.itemTexto}>{item.nome} - {item.cidade}</Text>
//         )}
//         contentContainerStyle={styles.listaContainer} 
//       />
//     </View>
//   );
// }
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 20, 
//   },
//   titulo: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   listaContainer: {
//     alignItems: 'center', 
//   },
//   itemTexto: {
//     fontSize: 16,
//     marginVertical: 8, 
//   }
// });

